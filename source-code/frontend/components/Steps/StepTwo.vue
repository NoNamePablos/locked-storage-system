<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import type { UploadProps } from 'ant-design-vue'
  interface FormState {
    title: string
    description: string
    avatar: UploadProps['fileList'] | null
  }
  const formState = reactive<FormState>({
    title: '',
    description: '',
    avatar: null
  })

  const companyInfo = ref(null)
  const emits = defineEmits<{
    (e: 'validate', formState: FormState): void
  }>()

  const validate = async () => {
    try {
      const validate = await companyInfo.value.validateFields()
      if (!validate.errorFields) {
        emits('validate', formState)
      }
    } catch (e) {
      console.log(e)
    }
  }
  defineExpose({
    validate
  })
</script>

<template>
  <a-card title="Информация о компании" style="width: 400px">
    <a-form ref="companyInfo" layout="vertical" name="CompanyInfo" :model="formState">
      <a-form-item
        label="Название компании"
        name="title"
        :rules="[{ required: true, message: 'Пожалуйста введите название компании' }]"
      >
        <a-input v-model:value="formState.title" />
      </a-form-item>
      <a-form-item
        label="Описание компании"
        name="description"
        :rules="[{ required: true, message: 'Пожалуйста введите описание компании' }]"
      >
        <a-textarea v-model:value="formState.description" :rows="4" :resize="false" />
      </a-form-item>
      <a-form-item label="Загрузка аватара" name="avatar">
        <a-upload
          v-model:file-list="formState.avatar"
          action="/upload.do"
          :max-count="1"
          list-type="picture-card"
        >
          <div>
            <PlusOutlined />
            <div style="margin-top: 8px">Upload</div>
          </div>
        </a-upload>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<style scoped></style>
