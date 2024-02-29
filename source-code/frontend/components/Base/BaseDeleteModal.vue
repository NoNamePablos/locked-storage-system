<script setup lang="ts">
  import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
  import { createVNode, toRefs } from 'vue'
  import { Modal } from 'ant-design-vue'
  import type { LegacyButtonType } from 'ant-design-vue/es/button/buttonTypes'

  interface IProps {
    title?: string
    icon?: any
    content?: string
    confirmText?: string
    confirmType?: LegacyButtonType
    cancelText?: string
    id: number | string
  }
  const props = withDefaults(defineProps<IProps>(), {
    title: 'Ты уверен что хочешь удалить этот кластер?',
    icon: null,
    content: 'Some descriptions',
    confirmText: 'Да',
    confirmType: 'danger',
    cancelText: 'Нет'
  })

  const { title, icon, content, confirmText, confirmType, cancelText, id } = toRefs(props)
  const emits = defineEmits<{
    (e: 'confirm-delete', data: string | number): void
  }>()
  const showDeleteConfirm = () => {
    Modal.confirm({
      title: title.value,
      icon: icon.value ? createVNode(icon.value) : createVNode(ExclamationCircleOutlined),
      content: content.value,
      okText: confirmText.value,
      okType: confirmType.value,
      cancelText: cancelText.value,
      onOk() {
        emits('confirm-delete', id.value)
      },
      onCancel() {
        console.log('close deletye')
      }
    })
  }
</script>

<template>
  <div @click="showDeleteConfirm()">
    <slot />
  </div>
</template>

<style scoped></style>
