import { Accordion } from '@chakra-ui/react'
import { FC } from 'react'
import { SingleReview } from '../../models/Review.model'
import Review from '../Review/Review'

interface ReviewsProps {
  reviews: SingleReview[]
  serviceId: string
  onReloadreviews: (review: SingleReview) => void
}

const Reviews: FC<ReviewsProps> = ({ reviews, serviceId, onReloadreviews }) => {
  return (
    <div>
      <Accordion allowToggle allowMultiple defaultIndex={[0]}>
        {reviews.map((review, index) => <Review review={review} serviceId={serviceId}key={index} onReloadreviews={onReloadreviews} />)}
      </Accordion>
    </div>
  )
}

export default Reviews
