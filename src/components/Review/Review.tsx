import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Image, Text } from '@chakra-ui/react'
import { FC } from 'react'
import StarRatings from 'react-star-ratings'
import { SingleReview } from '../../models/Review.model'

const defaultImage = 'https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png'

interface ReviewProps {
  review: SingleReview
}

const Review: FC<ReviewProps> = ({ review }) => {
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
