export interface User {
  id: number
  image: string
  name: string
  nickname?: string
}

export interface AuthUser extends User{
  token: string
}
