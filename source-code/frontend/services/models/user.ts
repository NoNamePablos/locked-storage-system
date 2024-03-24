import { RoleType } from '~/services/constants/RoleType'

export interface IUser {
  avatar: string
  companyId: string | null
  companyRoleId: string | null
  email: string
  emailVerifiedAd: boolean | null
  id: number
  name: string
  role: RoleType
  updatedAt: string
}
