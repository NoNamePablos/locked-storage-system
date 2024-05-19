import type { IUser } from '~/services/models/user'

export interface ICompanyResponse {
  id: number
  name: string
  description: string
  owner: IUser
}
