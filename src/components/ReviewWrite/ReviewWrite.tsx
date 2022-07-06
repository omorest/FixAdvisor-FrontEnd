import { Input, Text } from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import StarRatings from 'react-star-ratings'

interface ReviewWriteProps {
  userType: string
}

const ReviewWrite: FC<ReviewWriteProps> = ({ userType }) => {
  const [rating, setRating] = useState(0)
  const [showCreateOpinion, setShowCreateOpinion] = useState(false)

  const ratingChanged = (newRating: number) => {
    setRating(newRating)
  }

  const handleShowOpinion = () => {
    setShowCreateOpinion(!showCreateOpinion)
  }

  return (
    <div className='flex flex-col gap-5'>
      {
        showCreateOpinion
          ? <div className='flex flex-col gap-5'>
            <Text className='font-bold hover:cursor-pointer' onClick={handleShowOpinion}>No quiero dar mi opinión</Text>
            <StarRatings
              rating={rating}
              starRatedColor="#68D391"
              starHoverColor="#68D399"
              changeRating={ratingChanged}
              numberOfStars={5}
              name='rating'
              starDimension='30px'
            />
            <Input placeholder='Escribe tu opinión aquí'></Input>
          </div>
          : <div className='flex flex-col gap-5'>
            <Text className='font-bold hover:cursor-pointer' onClick={handleShowOpinion}>Quiero dar mi opinión</Text>
          </div>
      }
    </div>
  )
}

export default ReviewWrite
