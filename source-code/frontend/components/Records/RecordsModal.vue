<script setup lang="ts">
  import { ref, toRefs, reactive, watch } from 'vue'
  import { Home, Globe, User, LockKeyhole, Info } from 'lucide-vue-next'
  import LeakPasswordForm from '~/components/Forms/LeakPasswordForm.vue'
  import type { IRecordItem } from '~/services/models'
  import { useClipboard } from '@vueuse/core'
  import personalRecordsRepository from '~/services/repository/personalRecordsRepository'

  const loading = ref<boolean>(false)

  interface IProps {
    open: boolean
    isEditing?: boolean
    isLoading?: boolean
    item?: IRecordItem | unknown
    clusterdId: number | string
  }

  const props = withDefaults(defineProps<IProps>(), {
    isEditing: false,
    isLoading: false,
    item: () => ({})
  })

  const { copy } = useClipboard()
  const { open, isEditing, isLoading, item, clusterdId } = toRefs(props)

  const emits = defineEmits<{
    (e: 'close'): void
    (e: 'confirm', data: unknown): void
  }>()

  const handleOk = async () => {
    loading.value = true
    try {
      const validate = await modal.value?.validateFields()
      if (validate && !validate.errorFields) {
        const request = {
          password: formState.password,
          site: formState.site,
          login: formState.login,
          name: formState.name,
          title: formState.title,
          record_id: item.value.id,
          ...(!isEditing.value && {
            cluster_id: +clusterdId.value
          })
        }

        console.log(request)

        const method = isEditing.value
          ? personalRecordsRepository.update
          : personalRecordsRepository.create
        const response = await method(request)
        emits('confirm', response)
      }
    } catch (e) {
      console.log(e)
    } finally {
      loading.value = false
    }
  }

  const handleCancel = () => {
    emits('close')
  }

  interface FormState {
    name: string
    site: string
    login: string
    password: string
    title: string
    confirm_password?: ''
  }
  const modal = ref(null)
  const leaksFormRef = ref(null)

  const formState = reactive<FormState>({
    name: '',
    site: '',
    login: '',
    password: '',
    confirm_password: '',
    title: ''
  })

  watch(
    () => item.value,
    newValue => {
      console.log('mew : ', newValue)
      console.log(isEditing.value)
      if (isEditing.value && newValue) {
        console.log('news: ', newValue)
        formState.title = newValue?.title ?? ''
        formState.name = newValue?.name ?? ''
        formState.site = newValue?.site ?? ''
        formState.login = newValue?.login ?? ''
        formState.password = newValue?.password ?? ''
        formState.confirm_password = ''
        console.log(formState)
      }
    },
    {
      immediate: true
    }
  )

  const isCheckLeaksPassword = ref(false)
  const toggleLeaksPassword = () => {
    isCheckLeaksPassword.value = !isCheckLeaksPassword.value
  }

  watch(
    () => open.value,
    newVal => {
      if (newVal && !isEditing.value) {
        console.log(newVal)
        console.log('item:', formState)
        formState.title = ''
        formState.site = ''
        formState.login = ''
        formState.password = ''
      }
      if (!newVal) {
        console.log('res: ', newVal)
        modal.value?.resetFields()
        if (isCheckLeaksPassword.value) {
          leaksFormRef.value?.resetForm()
          isCheckLeaksPassword.value = false
        }
      }
    },
    {
      immediate: true
    }
  )

  const copyText = data => {
    try {
      copy(data)
      message.success('Данные скопированы')
    } catch (e) {
      message.error('Ошибка копирования')
    }
  }

  const deleteRecords = async () => {
    loading.value = true
    try {
      const response = await personalRecordsRepository.delete(item.value?.id)
      emits('confirm', response)
    } catch (e) {
      console.log(e)
    } finally {
      loading.value = false
    }
  }
</script>

<template>
  <a-modal :open="open" @cancel="handleCancel" @ok="handleOk">
    <template #title>
      <a-skeleton v-if="isLoading" :paragraph="{ rows: 0 }" active />
      <div v-else>{{ isEditing ? item?.title : 'Добавление пароля' }}</div>
    </template>
    <template #footer>
      <a-flex v-if="isEditing" justify="space-between" wrap="wrap">
        <a-button type="link" danger :loading="loading" @click="deleteRecords()"
          >Удалить пароль</a-button
        >
        <a-button type="primary" :loading="loading" @click="handleOk()">Сохранить</a-button>
      </a-flex>
      <a-button v-else key="submit" type="primary" :loading="loading" @click="handleOk"
        >Добавить пароль</a-button
      >
    </template>
    <a-space v-if="isLoading" class="w-[250px]" direction="vertical">
      <a-flex justify="space-between" wrap="wrap">
        <a-skeleton-input active />
      </a-flex>
      <a-flex justify="space-between" wrap="wrap">
        <a-skeleton-input active />
        <a-skeleton-button active />
      </a-flex>
      <a-flex justify="space-between" wrap="wrap">
        <a-skeleton-input class="flex-grow" active />
      </a-flex>
      <a-flex justify="space-between" wrap="wrap">
        <a-skeleton-input class="flex-grow" active />
        <a-skeleton-button active />
      </a-flex>
    </a-space>
    <a-form v-else ref="modal" layout="vertical" :model="formState" name="basic" autocomplete="off">
      <a-form-item
        name="title"
        class="w-[340px]"
        :rules="[{ required: true, message: 'Введите название сайта/сервиса' }]"
      >
        <a-input
          v-model:value="formState.title"
          class="text-gray-400"
          placeholder="Название сайта/сервиса"
        >
          <template #prefix>
            <home :size="20" color="currentColor" />
          </template>
        </a-input>
      </a-form-item>
      <a-flex wrap="wrap" :gap="4">
        <a-form-item
          class="w-[340px]"
          name="site"
          :rules="[{ required: true, message: 'Введите URL' }]"
        >
          <a-input v-model:value="formState.site" class="text-gray-400" placeholder="URL">
            <template #prefix>
              <globe :size="20" color="currentColor" />
            </template>
            <template #suffix>
              <a-tooltip>
                <template #title>
                  <span class="text-center block">Вводите полный адрес vk.com</span>
                </template>
                <info :size="20" color="currentColor" />
              </a-tooltip>
            </template>
          </a-input>
        </a-form-item>
        <a-button v-if="!isEditing" type="primary" class="flex-grow" ghost>Вставить</a-button>
        <a-button v-else type="primary" class="flex-grow" ghost @click="copyText(formState.site)"
          >Скопировать</a-button
        >
      </a-flex>
      <a-form-item
        class="w-[340px]"
        name="login"
        :rules="[{ required: true, message: 'Введите логин/Email' }]"
      >
        <a-input
          v-model:value="formState.login"
          class="text-gray-400"
          placeholder="Введите логин/Email"
        >
          <template #prefix>
            <user :size="20" color="currentColor" />
          </template>
        </a-input>
      </a-form-item>
      <a-flex wrap="wrap" :gap="4">
        <a-form-item
          class="w-[340px]"
          name="password"
          :rules="[{ required: true, message: 'Введите пароль' }]"
        >
          <a-input-password
            v-model:value="formState.password"
            class="text-gray-400"
            placeholder="Введите пароль"
          >
            <template #prefix>
              <lock-keyhole :size="20" color="currentColor" />
            </template>
          </a-input-password>
        </a-form-item>
        <a-button
          v-if="!isEditing"
          type="primary"
          class="flex-grow"
          ghost
          @click="toggleLeaksPassword()"
          >Проверить</a-button
        >
        <a-button
          v-else
          type="primary"
          class="flex-grow"
          ghost
          @click="copyText(formState.password)"
          >Скопировать</a-button
        >
      </a-flex>
      <div v-if="isCheckLeaksPassword">
        <leak-password-form ref="leaksFormRef" />
      </div>
    </a-form>
  </a-modal>
</template>

<style scoped></style>
