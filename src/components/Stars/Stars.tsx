import { Text } from '@chakra-ui/react'
import { FC } from 'react'
import StarRatings from 'react-star-ratings'

const TOTAL_STARS = 5

interface StarsProps {
  rate: number
  totalReviews: number
}

const Stars: FC<StarsProps> = ({ rate, totalReviews }) => {
  return (
    <div className='flex items-center gap-5'>
      <StarRatings
        rating={rate}
        starRatedColor="#68D391"
        // changeRating={this.changeRating}
        numberOfStars={TOTAL_STARS}
        name='rating'
        starSpacing='3px'
        starDimension='30px'
      />
      <Text className='font-semibold'>{totalReviews} reseñas</Text>

    </div>
  )
}

export default Stars
