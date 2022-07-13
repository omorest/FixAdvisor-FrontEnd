import { Input, Text } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import StarRatings from 'react-star-ratings'
import { User } from '../../context/UserContext'
import { Service } from '../../models'
import { SingleReview } from '../../models/Review.model'
import { uuid } from '../../utils/utils'

interface ReviewWriteProps {
  user: User
  service: Service
  onReloadreviews: (review: SingleReview) => void
  isReviewDone: boolean
}

const ReviewWrite: FC<ReviewWriteProps> = ({ user, service, onReloadreviews, isReviewDone }) => {
  const [rating, setRating] = useState(0)
  const [showCreateOpinion, setShowCreateOpinion] = useState(false)
  const { register, handleSubmit } = useForm()

  const handleRatingChanged = (newRating: number) => {
    setRating(newRating)
  }

  const onSubmit = async (data: any) => {
    const currentDate = new Date()
    const currentDateString = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`
    const review: SingleReview = { ...data, rate: rating, clientName: user?.name, id: uuid(), date: currentDateString }
    onReloadreviews(review)
  }

  const handleShowOpinion = () => {
    setShowCreateOpinion(!showCreateOpinion)
  }

  if (isReviewDone) {
    return <Text>Opinión guardada</Text>
  }

  return (
    <div className='flex flex-col gap-5'>
      {
        showCreateOpinion
          ? <div className='flex flex-col gap-5'>
            <Text className='font-bold hover:cursor-pointer' onClick={handleShowOpinion}>No quiero dar mi opinión</Text>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
              <StarRatings
                rating={rating}
                starRatedColor="#68D391"
                starHoverColor="#68D399"
                changeRating={handleRatingChanged}
                numberOfStars={5}
                name='rating'
                starDimension='30px'
              />
              <div className='flex justify-between'>
                <Input placeholder='Escribe tu opinión aquí' width="80%" {...register('opinion')}></Input>
                <Input bgColor='white' type="submit" color='white' bgGradient='linear(to-r, green.300, green.300)' width="20%" disabled={rating < 1} className='font-bold cursor-pointer'/>
              </div>
            </form>
          </div>
          : <div className='flex flex-col gap-5'>
            <Text className='font-bold hover:cursor-pointer' onClick={handleShowOpinion}>Quiero dar mi opinión</Text>
          </div>
      }
    </div>
  )
}

export default ReviewWrite
