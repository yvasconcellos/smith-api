export interface Products {
  id: number
  name: string
  amount: string
}

export interface User {
  id?: number
  username: string
  classe: string
  level: number
  password: string
}

export interface Token {
  token: string
}