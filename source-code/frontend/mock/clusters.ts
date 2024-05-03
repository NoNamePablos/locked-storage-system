import type { ICluster } from '~/services/models'

export const mockCluster: ICluster[] = [
  {
    id: 1,
    name: 'Личное',
    created: '26.02.2024',
    users: [
      {
        id: 9,
        email: 'admin18@admin.com',
        name: 'admin',
        avatar: null,
        created_at: '28.02.2024',
        emailVerifiedAd: true,
        role: 'user',
        companyId: 18,
        companyRoleId: 123
      },
      {
        id: 9,
        email: 'atest228.test',
        name: 'tester',
        avatar: null,
        created_at: '28.02.2024',
        emailVerifiedAd: true,
        role: 'user',
        companyId: 18,
        companyRoleId: 123
      }
    ]
  },
  {
    id: 2,
    name: 'Соц сети',
    created: '26.02.2024',
    users: [
      {
        id: 9,
        email: 'atest228.test',
        name: 'tester',
        avatar: null,
        created_at: '28.02.2024',
        emailVerifiedAd: true,
        role: 'user',
        companyId: 18,
        companyRoleId: 123
      }
    ]
  },
  {
    id: 3,
    name: 'От работы',
    created: '26.02.2024',
    users: [
      {
        id: 9,
        email: 'admin18@admin.com',
        name: 'admin',
        avatar: null,
        created_at: '28.02.2024',
        emailVerifiedAd: true,
        role: 'user',
        companyId: 18,
        companyRoleId: 123
      },
      {
        id: 9,
        email: 'admin18@admin.com',
        name: 'admin',
        avatar: null,
        created_at: '28.02.2024',
        emailVerifiedAd: true,
        role: 'user',
        companyId: 18,
        companyRoleId: 123
      }
    ]
  },
  {
    id: 4,
    name: 'Секретый файл',
    created: '26.02.2024',
    users: []
  }
]

export const mockClusterById: ICluster = {
  id: 1,
  name: 'Личное',
  created: '26.02.2024',
  password: 'dfasfdsf',
  users: [
    {
      id: 9,
      email: 'admin18@admin.com',
      name: 'admin',
      avatar: null,
      created_at: '28.02.2024',
      emailVerifiedAd: true,
      role: 'user',
      companyId: 18,
      companyRoleId: 123
    },
    {
      id: 9,
      email: 'atest228.test',
      name: 'tester',
      avatar: null,
      created_at: '28.02.2024',
      emailVerifiedAd: true,
      role: 'user',
      companyId: 18,
      companyRoleId: 123
    }
  ]
}
