export type TypeServices = 'Fontanería' | 'Carpintería' | 'Electricidad'

export interface Service {
  providerId: string
  id: string
  description: string
  typeService: TypeServices
  urlsImagesService?: string[]
  rateStarts?: [number, number, number, number, number]
  rate?: number
  totalReviews?: number
}
