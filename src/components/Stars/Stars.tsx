import { Text } from '@chakra-ui/react'
import { FC } from 'react'
import StarRatings from 'react-star-ratings'

const TOTAL_STARS = 5

interface StarsProps {
  rate: number
  totalReviews: number
  starDimension?: string
  inLine?: boolean
}

const Stars: FC<StarsProps> = ({ rate, totalReviews, starDimension = '30px', inLine = true }) => {
  const style = `flex ${inLine ? 'items-center gap-5' : 'flex-col gap-3'} `

  return (
    <div className= {style}>
      <StarRatings
        rating={rate}
        starRatedColor="#68D391"
        // changeRating={this.changeRating}
        numberOfStars={TOTAL_STARS}
        name='rating'
        starSpacing='1px'
        starDimension={starDimension}
      />
      <Text>{totalReviews} reseñas</Text>

    </div>
  )
}

export default Stars
