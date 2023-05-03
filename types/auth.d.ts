export interface AuthSlice {
  login: boolean
  user: {
    id?: string
    username?: string
    civility?: string
    email: string
    phone: string
    terms: boolean
    newsletter: boolean
    roles: string[]
    accessToken: string
    confirmEmail: boolean
    idOrganization?: number
  }
}
