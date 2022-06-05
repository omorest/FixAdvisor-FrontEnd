export interface Client {
  email: string
  name: string
  id: string
}

export interface Provider {
  email: string
  name: string
  company: string
  location: string
  phoneNumber: number
  logoImage?: string
  id: string
}
