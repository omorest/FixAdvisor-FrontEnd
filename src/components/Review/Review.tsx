import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Image, Input, Text } from '@chakra-ui/react'
import { FC, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import StarRatings from 'react-star-ratings'
import { UserContext } from '../../context/UserContext'
import { SingleReview } from '../../models/Review.model'

const defaultImage = 'https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png'

interface ReviewProps {
  review: SingleReview
  serviceId: string
  onReloadreviews: (review: SingleReview) => void
}

const Review: FC<ReviewProps> = ({ review, serviceId, onReloadreviews }) => {
  const { register, handleSubmit } = useForm()
  const { user } = useContext(UserContext)
  const [isDone, setIsDone] = useState(false)

  const onSubmit = (data: any) => {
    const reviewUpdated: SingleReview = {
      ...review,
      responseProvider: data.responseProvider,
      providerName: user?.name
    }
    setIsDone(false)
    onReloadreviews(reviewUpdated)
    setIsDone(true)
  }

  if (isDone) {
    return null
  }

  return (
    <>
      <AccordionItem>
        <AccordionButton>
          <Box flex='1' textAlign='left' fontWeight={'semibold'} className='flex items-center gap-4'>
            <Image
              borderRadius='full'
              boxSize='40px'
              src={ defaultImage }
              objectFit='cover'
              alt='perfil foto'
            />
            <div>
              <Text fontSize={'large'}>{review.clientName}</Text>
              <Text fontWeight='normal' fontSize={'15px'}>
                {review.date}
              </Text>
            </div>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4} marginLeft={'0px'}>
          <div className='flex flex-col gap-2'>

            <StarRatings
              rating={review.rate}
              starRatedColor="#68D391"
              numberOfStars={5}
              name='rating'
              starSpacing='1px'
              starDimension={'15px'}
            />
            <Text fontStyle={'italic'}> {review.opinion}</Text>
          </div>
          {
            (user && user.type === 'Provider' && user.servicesIds?.includes(serviceId) && !review.responseProvider && !isDone)
              ? <form onSubmit={handleSubmit(onSubmit)}>

                <div className='mt-4 ml-4 flex justify-between'>
                  <Input placeholder='Responde aquí' width="80%" {...register('responseProvider')}></Input>
                  <Input bgColor='white' type="submit" color='white' bgGradient='linear(to-r, green.300, green.300)' width="20%" className='font-bold cursor-pointer'/>
                </div>
              </form>
              : null
          }
          <div className='mt-4 ml-4'>
            <Text fontWeight={'semibold'} >{review.providerName}</Text>
            <Text fontStyle={'italic'}> {review.responseProvider}</Text>
          </div>
        </AccordionPanel>
      </AccordionItem>
    </>

  )
}

export default Review
