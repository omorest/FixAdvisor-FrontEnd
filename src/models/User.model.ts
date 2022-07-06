export interface Client {
  email: string
  name: string
  id: string
  favouriteServices: string[]
  type: 'Client'
}

export interface Provider {
  email: string
  name: string
  company: string
  location: string
  phoneNumber: number
  logoImage: string
  id: string
  servicesIds?: string[]
  website?: string
  type: 'Provider'
}
