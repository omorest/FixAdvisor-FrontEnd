import { SingleReview } from '../models/Review.model'
import { URL_NEW_REVIEW_SERVICE, URL_REVIEWS_SERVICE } from './urls'

export const fetchReviews = async (serviceId: string) => {
  const data = await fetch(`${URL_REVIEWS_SERVICE}/${serviceId}`)
  const reviews: SingleReview[] = await data.json() as SingleReview[]
  return reviews
}

export const fetchPostNewReview = async (serviceId: string, data: SingleReview): Promise<any> => {
  return fetch(`${URL_NEW_REVIEW_SERVICE}/${serviceId}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  })
    .then(response => response.json())
    .then(json => json)
    .catch(err => console.log(err))
}
