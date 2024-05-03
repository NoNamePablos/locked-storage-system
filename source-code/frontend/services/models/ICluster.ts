import type { IUser } from '~/services/models/user'

export interface ICluster {
  id: number
  name: string
  created: string
  users?: IUser[]
  password?: string
}

export interface IRecordItem {
  id: number
  email: string
  login: string
  password: string
  site: string
  title?: string
}

export interface IClusterUserItem {
  id: number
  name: string
  email: string
  role: string
}
