<script setup lang="ts">
  import { ref, toRefs } from 'vue'

  interface IProps {
    open?: boolean
    fullModal?: boolean
    modalTitle?: string
    loading?: boolean
  }

  const props = withDefaults(defineProps<IProps>(), {
    open: false,
    modalTitle: '',
    loading: false
  })

  const { open, fullModal, loading } = toRefs(props)

  const emits = defineEmits<{
    (e: 'close'): void
    (e: 'submit'): void
  }>()

  const handleOk = () => {
    emits('submit')
  }
  const handleCancel = () => {
    emits('close')
  }
</script>

<template>
  <a-modal
    v-model:open="open"
    :title="modalTitle"
    width="100%"
    :wrap-class-name="fullModal ? 'full-modal' : ''"
    @cancel="handleCancel()"
    @ok="handleOk"
  >
    <template #footer>
      <a-button key="back" @click="handleCancel">Return</a-button>
      <a-button key="submit" type="primary" :loading="loading" @click="handleOk">Submit</a-button>
    </template>
    <div class="py-4"><slot /></div>
  </a-modal>
</template>

<style>
  .full-modal .ant-modal {
    @apply max-w-full top-0 pb-0 m-0;
  }
  .full-modal .ant-modal-content {
    @apply flex flex-col h-screen;
  }
  .full-modal .ant-modal-body {
    @apply flex-1;
  }
</style>
