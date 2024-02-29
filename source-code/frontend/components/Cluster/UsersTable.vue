<script setup lang="ts">
  import type { IClusterUserItem } from '~/services/models'

  interface IProps {
    data: IClusterUserItem[]
  }
  const props = defineProps<IProps>()

  const colums = [
    {
      title: 'id',
      dataIndex: 'id',
      width: '10%'
    },
    {
      title: 'name',
      dataIndex: 'name'
    },
    {
      title: 'email',
      dataIndex: 'email'
    },
    {
      title: 'role',
      dataIndex: 'role'
    },
    {
      title: 'operation',
      dataIndex: 'operation'
    }
  ]

  const onDelete = key => {
    console.log('delete item from users table: ', key)
  }
</script>

<template>
  <a-table bordered :data-source="data" :columns="colums">
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'operation'">
        <a-popconfirm v-if="data.length" title="Удалить?" @confirm="onDelete(record.id)">
          <a>Delete</a>
        </a-popconfirm>
      </template>
    </template>
  </a-table>
</template>
