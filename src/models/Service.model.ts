export type TypeServices = 'Fontanería' | 'Carpintería' | 'Electricidad'

export interface Service {
  providerId: string
  id: string
  nameService: string
  description: string
  typeService: TypeServices
  urlsImagesService?: string[]
  rateStars?: [number, number, number, number, number]
  rate?: number
  totalReviews?: number
}
