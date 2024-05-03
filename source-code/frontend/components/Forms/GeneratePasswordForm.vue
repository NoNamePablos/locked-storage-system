<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { useClipboard } from '@vueuse/core/index'

  const passIngridients = {
    nums: '1234567890',
    letters: 'qwertyuiopasdfghjklzxcvbnm',
    upletters: 'QWERTYUIOPASDFGHJKLZXCVBNM',
    symbols: '!@$%^#&*-+'
  }
  const { copy } = useClipboard()
  interface FormState {
    isNums: boolean
    passLength: number | string
    isLetters: boolean
    isUpperLetters: boolean
    isSpecialSymbols: boolean
    password: string
  }
  const modalRef = ref(null)
  const formState = reactive<FormState>({
    isNums: true,
    passLength: 8,
    isLetters: false,
    isUpperLetters: false,
    isSpecialSymbols: false,
    password: ''
  })

  const emits = defineEmits<{
    (e: 'submit'): void
  }>()

  const resetForm = () => {
    modalRef.value.resetFields()
  }

  defineExpose({ resetForm })

  const copyText = data => {
    try {
      copy(data)
      message.success('Данные скопированы')
    } catch (e) {
      message.error('Ошибка копирования')
    }
  }

  const finalAlpabet = () => {
    let str = ''
    if (formState.isNums) {
      str += passIngridients.nums
    }
    if (formState.isLetters) {
      str += passIngridients.letters
    }
    if (formState.isUpperLetters) {
      str += passIngridients.upletters
    }
    if (formState.isSpecialSymbols) {
      str += passIngridients.symbols
    }
    return str
  }
  const createPassword = symbols => {
    let password = ''
    for (let i = 0; i <= formState.passLength - 1; i++) {
      let pickRandomSymbols = symbol => {
        return symbol[Math.floor(Math.random() * symbol.length)]
      }
      password += pickRandomSymbols(symbols)
    }
    return password
  }

  const generatePassword = () => {
    const finalAlp = finalAlpabet()
    formState.password = createPassword(finalAlp)
  }
</script>

<template>
  <div class="border-dashed border-gray-400 p-3 rounded">
    <div class="font-medium text-xl">Генерация пароля</div>
    <a-form
      ref="modalRef"
      layout="vertical"
      :model="formState"
      name="basic"
      class="mt-3"
      autocomplete="off"
    >
      <a-form-item name="isNums">
        <a-checkbox v-model:checked="formState.isNums">Цифры (0-9)</a-checkbox>
      </a-form-item>
      <a-form-item name="isLetters">
        <a-checkbox v-model:checked="formState.isLetters">Строчные буквы (a-z)</a-checkbox>
      </a-form-item>
      <a-form-item name="isUpperLetters">
        <a-checkbox v-model:checked="formState.isUpperLetters">Заглавные буквы (A-Z)</a-checkbox>
      </a-form-item>
      <a-form-item name="isSpecialSymbols">
        <a-checkbox v-model:checked="formState.isSpecialSymbols">Символы (!@$%^#&*-+)</a-checkbox>
      </a-form-item>
      <a-form-item name="passLength">
        <a-input-number id="inputNumber" v-model:value="formState.passLength" :min="8" :max="24" />
      </a-form-item>
      <a-flex wrap="wrap" :gap="4">
        <a-form-item name="password" class="flex-grow">
          <a-input v-model:value="formState.password" disabled />
        </a-form-item>
        <a-button
          type="primary"
          class="flex-grow"
          :disabled="formState.password == ''"
          ghost
          @click="copyText(formState.password)"
          >Скопировать</a-button
        >
      </a-flex>
    </a-form>
    <a-flex>
      <a-button type="primary" @click="generatePassword()">Сгенерировать</a-button>
    </a-flex>
  </div>
</template>

<style scoped></style>
