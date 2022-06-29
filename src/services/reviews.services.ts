import { SingleReview } from '../models/Review.model'
import { URL_REVIEWS_SERVICE } from './urls'

export const fetchReviews = async (serviceId: string) => {
  const data = await fetch(`${URL_REVIEWS_SERVICE}/${serviceId}`)
  const reviews: SingleReview[] = await data.json() as SingleReview[]
  return reviews
}
