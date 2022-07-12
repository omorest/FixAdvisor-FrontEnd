export interface Client {
  email: string
  name: string
  id: string
  favouriteServices: string[]
  type: 'Client'
  urlProfileImage?: string
}

export interface Provider {
  email: string
  name: string
  company: string
  location: string
  phoneNumber: number
  urlProfileImage?: string
  id: string
  servicesIds?: string[]
  website?: string
  type: 'Provider'
}
