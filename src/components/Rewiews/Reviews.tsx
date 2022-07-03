import { Accordion } from '@chakra-ui/react'
import { FC } from 'react'
import { SingleReview } from '../../models/Review.model'
import Review from '../Review/Review'

interface ReviewsProps {
  reviews: SingleReview[]
}

const Reviews: FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div>
      <Accordion allowToggle allowMultiple defaultIndex={[0]}>
        {reviews.map((review, index) => <Review review={review} key={index} />)}
      </Accordion>
    </div>
  )
}

export default Reviews
