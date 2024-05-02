import type { IRecordItem } from '~/services/models'

export const mockRecords: IRecordItem[] = [
  {
    id: 3,
    email: '123@123',
    login: 'admin@admin.com',
    password: '06062001',
    site: 'meta.com'
  },
  {
    id: 4,
    email: '1231123@12323123',
    login: 'admin@admin.com',
    password: '06062001',
    site: 'instagram.com'
  },
  {
    id: 6,
    email: '123123123123@123123123123',
    login: 'admin@admin.com',
    password: '06062001',
    site: 'trello.com'
  },
  {
    id: 7,
    email: '123123123123@123123123123',
    login: 'admin@admin.com',
    password: '06062001',
    site: 'jira.com'
  }
]
export const mockRecordById: IRecordItem = {
  title: 'Jira',
  id: 7,
  login: 'admin@admin.com',
  password: '06062001',
  site: 'jira.com'
}
