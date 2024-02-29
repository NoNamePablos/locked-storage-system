<script lang="ts" setup>
  import jsonp from 'fetch-jsonp'
  import qs from 'qs'
  import UsersTable from '~/components/Cluster/UsersTable.vue'
  import { ref, type Ref } from 'vue'
  import type { IClusterUserItem } from '~/services/models'

  let timeout: any
  let currentValue = ''
  const fetching = ref(false)

  function fetch(value: string, callback: any) {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
    currentValue = value

    function fake() {
      const str = qs.stringify({
        code: 'utf-8',
        q: value
      })
      jsonp(`https://suggest.taobao.com/sug?${str}`)
        .then(response => response.json())
        .then(d => {
          if (currentValue === value) {
            const result = d.result
            const data: any[] = []
            result.forEach((r: any) => {
              data.push({
                value: r[0],
                label: r[0]
              })
            })
            callback(data)
          }
        })
    }

    timeout = setTimeout(fake, 300)
  }

  const data = ref<any[]>([])
  const value = ref()

  const list = ref<any[]>([])
  const handleSearch = (val: string) => {
    fetching.value = true
    fetch(val, (d: any[]) => (data.value = d))
    fetching.value = false
  }
  const handleChange = (val: string) => {
    console.log(val)
    value.value = val
    fetch(val, (d: any[]) => (data.value = d))
  }

  const handleClick = () => {
    if (value.value != '') {
      list.value.push(value.value)
    }
  }

  const dataSource: Ref<IClusterUserItem[]> = ref([
    {
      id: 1,
      name: 'Edward King',
      email: 'edward32@mail.ru',
      role: 'owner'
    },
    {
      id: 2,
      name: 'Edward King 2',
      email: 'edward32@mail.ru',
      role: 'manager'
    },
    {
      id: 3,
      name: 'Edward King 3',
      email: 'edward32@mail.ru',
      role: 'manager'
    }
  ])
</script>

<template>
  <a-flex gap="middle">
    <a-select
      v-model:value="value"
      show-search
      placeholder="input search text"
      :default-active-first-option="false"
      :show-arrow="false"
      :filter-option="false"
      :not-found-content="null"
      :options="data"
      @search="handleSearch"
      @change="handleChange"
    />
    <div>
      <a-button type="primary" @click="handleClick()">Добавить</a-button>
    </div>
  </a-flex>
  <div class="mt-4">
    <users-table :data="dataSource" />
  </div>
</template>
