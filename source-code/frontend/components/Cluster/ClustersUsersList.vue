<script setup lang="ts">
  interface Props {
    users: unknown[]
  }

  defineProps<Props>()

  const columns = [
    {
      name: 'ID',
      dataIndex: 'user_id',
      key: 'user_id'
    },
    {
      name: 'Имя',
      dataIndex: 'name',
      key: 'name'
    },
    { name: 'Редактор', dataIndex: 'is_redactor', key: 'is_redactor' },
    { name: 'Просмотр', dataIndex: 'is_reader', key: 'is_reader' },
    {
      title: 'Действия',
      key: 'action'
    }
  ]

  const emit = defineEmits<{
    (event: 'change-user', data: unknown): void
    (event: 'delete', data: unknown): void
  }>()

  const onChange = (record, key) => {
    console.log('change: ', { record, key })
    emit('change-user', { record, key })
  }

  const onDelete = record => {
    console.log('delete')
    emit('delete', record)
  }
</script>

<template>
  <div>
    <a-table :columns="columns" :data-source="users">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'name'">
          <span> Имя </span>
        </template>
        <template v-if="column.key === 'id'">
          <span> ID </span>
        </template>
        <template v-if="column.key === 'is_redactor'">
          <span> Редактор </span>
        </template>
        <template v-if="column.key === 'is_reader'">
          <span> Просмотр </span>
        </template>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'is_redactor'">
          <a-switch :checked="record.is_redactor" @change="onChange(record, 'is_redactor')" />
        </template>
        <template v-if="column.key === 'is_reader'">
          <a-switch :checked="record.is_reader" disabled />
        </template>
        <template v-if="column.key === 'action'">
          <a-button type="link" danger @click="onDelete(record)">Удалить</a-button>
        </template>
      </template>
    </a-table>
  </div>
</template>

<style scoped></style>
