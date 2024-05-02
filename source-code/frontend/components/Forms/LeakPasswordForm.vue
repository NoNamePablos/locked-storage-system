<script setup lang="ts">
  import { reactive, ref } from 'vue'

  interface FormState {
    password: string
  }
  const modalRef = ref(null)
  const formState = reactive<FormState>({
    password: ''
  })

  const emits = defineEmits<{
    (e: 'submit'): void
  }>()

  const resetForm = () => {
    modalRef.value.resetFields()
  }

  defineExpose({ resetForm })
</script>

<template>
  <div class="border-dashed border-gray-400 p-3 rounded">
    <div class="font-medium text-xl">Проверка пароля</div>
    <a-form
      ref="modalRef"
      layout="vertical"
      :model="formState"
      name="basic"
      class="mt-3"
      autocomplete="off"
    >
      <a-form-item name="password">
        <a-input
          v-model:value="formState.password"
          allow-clear
          placeholder="Введите пароль для проверки"
        />
      </a-form-item>
    </a-form>
    <a-flex>
      <a-button type="primary" html-type="submit">Проверить</a-button>
    </a-flex>
  </div>
</template>

<style scoped></style>
