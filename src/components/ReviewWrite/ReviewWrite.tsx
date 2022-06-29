import { Input } from '@chakra-ui/react'
import React, { FC } from 'react'
import StarRatings from 'react-star-ratings'

interface ReviewWriteProps {

}

const ReviewWrite: FC<ReviewWriteProps> = () => {
  return (
    <div className='flex flex-col gap-5'>
      <StarRatings
        rating={3}
        starRatedColor="#68D391"
        numberOfStars={5}
        name='rating'
        starSpacing='1px'
        starDimension={'25px'}
      />
      <Input placeholder='Escribe tu opinión aquí'></Input>
    </div>
  )
}

export default ReviewWrite
