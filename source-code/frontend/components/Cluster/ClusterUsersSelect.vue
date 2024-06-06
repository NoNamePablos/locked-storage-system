<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import { Home } from 'lucide-vue-next'
  import clusterRepository from '~/services/repository/clusterRepository'

  interface Props {
    users?: unknown[]
    isLoading?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    isLoading: false,
    users: () => []
  })

  const { users, isLoading } = toRefs(props)

  interface FormState {
    user_id: number | null
    is_redactor: boolean
    is_reader: boolean
  }

  interface Data extends FormState {
    name: string
  }

  const formState = reactive<FormState>({
    user_id: null,
    is_redactor: false,
    is_reader: true
  })

  interface Emits {
    (event: 'confirm', data: Data): void
  }

  const emit = defineEmits<Emits>()
  const modal = ref(null)
  const computedUsers = computed(() => {
    console.log(users.value)
    return (
      users.value.map(item => ({
        label: item.name,
        value: item.id
      })) ?? []
    )
  })

  const filterOption = (input: string, option: any) => {
    return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
  }

  const handleChange = (value: number) => {
    console.log(`selected ${value}`)
    formState.user_id = value
  }

  const handleOk = async () => {
    const validate = await modal.value?.validateFields()
    if (validate && !validate.errorFields) {
      const user = users.value.find(item => item.id === formState.user_id)
      console.log('confirm: ', { ...formState, name: user.name })
      emit('confirm', { ...formState, name: user.name })
    }
  }
</script>

<template>
  <a-form ref="modal" :model="formState" name="basic" autocomplete="off">
    <a-form-item name="user_id">
      <a-select
        v-model:value="formState.user_id"
        show-search
        placeholder="Выбрать сотрудника"
        style="width: 100%"
        :filter-option="filterOption"
        :options="computedUsers"
        @change="handleChange"
      />
    </a-form-item>
    <a-form-item label="Редактирование" name="is_redactor">
      <a-switch v-model:checked="formState.is_redactor" />
    </a-form-item>
    <a-form-item label="Просмотр" name="is_reader">
      <a-switch v-model:checked="formState.is_reader" disabled />
    </a-form-item>
    <a-button type="primary" @click="handleOk()">Сохранить</a-button>
  </a-form>
</template>
