import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Image, Text } from '@chakra-ui/react'
import { FC } from 'react'
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
              boxSize='50px'
              src={'https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=2000' || { defaultImage }}
              objectFit='cover'
              alt='perfil foto'
            />
            <div>
              <Text fontSize={'large'}>{review.nameClient}</Text>
              <Text fontWeight='normal' fontSize={'15px'}>
                {review.date}
              </Text>
            </div>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4} marginLeft={'0px'}>
          <Text fontStyle={'italic'}> {review.opinion}</Text>

          {/* <AccordionPanel mt={4} marginLeft={'0px'} className='flex flex-col gap-2'>
            <Text fontWeight={'semibold'} >{review.companyProvider}</Text>
            <Text fontStyle={'italic'}> {review.responseProvider}</Text>
          </AccordionPanel> */}
        </AccordionPanel>
      </AccordionItem>
    </>

  )
}

export default Review
