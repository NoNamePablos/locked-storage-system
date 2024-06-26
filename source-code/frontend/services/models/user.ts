import { RoleType } from '~/services/constants/RoleType'

//roleType генерация на основе массива

export interface IUser {
  avatar: string
  companyId?: string | null
  companyRoleId?: string | null
  email: string
  emailVerifiedAd?: boolean | null
  id: number
  name: string
  role: RoleType
  updatedAt?: string
  owner?: {
    id: number
    name: string
    description: string
    avatar: string
  }
}
