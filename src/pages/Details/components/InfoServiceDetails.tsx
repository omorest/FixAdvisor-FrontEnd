import { Badge, Box, Input, Text } from '@chakra-ui/react'
import { FC, useContext, useEffect, useState } from 'react'
import Reviews from '../../../components/Rewiews/Reviews'
import Stars from '../../../components/Stars/Stars'
import { Service } from '../../../models'
import { SingleReview } from '../../../models/Review.model'
import { colorTypeProvider, optionsTypeServices } from '../../../utils/typeServiceUtils'
import CarouselImages from '../../../components/CarouselImages/CarouselImages'
import { fetchReviews } from '../../../services/reviews.services'
import { UserContext } from '../../../context/UserContext'
import ReviewWrite from '../../../components/ReviewWrite/ReviewWrite'

interface InfoServiceDetailsProps {
  service: Service
}

const InfoServiceDetails: FC<InfoServiceDetailsProps> = ({ service }) => {
  const [reviews, setReviews] = useState<SingleReview[]>([])
  const { user } = useContext(UserContext)

  useEffect(() => {
    const request = async () => {
      if (service?.id) {
        const reviews = await fetchReviews(service.id)
        setReviews(reviews)
      }
    }
    request()
  }, [service?.id])

  return (
    <div className='bg-white p-10 flex flex-col gap-10 min-w-[60%] rounded-lg shadow-xl mb-10'>
      <div className='flex items-center gap-5'>
        <Text className='font-bold text-3xl'>
          {service?.nameService}
        </Text>
        {service?.typeService
          ? <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' fontSize='l' colorScheme={colorTypeProvider[service.typeService]}>
              {optionsTypeServices[service.typeService]}
            </Badge>
          </Box>
          : null
        }
      </div>
      <div className='font-semibold text-lg'>
        <Stars rate={service?.rate ?? 0} totalReviews={service?.totalReviews ?? 0}/>
      </div>
      <div className='flex flex-col gap-5' >
        <Text className='font-bold text-2xl'>
            Fotos
        </Text>
        <CarouselImages images={service?.urlsImagesService || []}/>
      </div>
      <div className='flex flex-col gap-5'>
        <Text className='font-bold text-2xl'>
              Sobre el servicio
        </Text>
        <p>
          {service?.description}
        </p>
      </div>
      <div className='flex flex-col gap-5'>
        <Text className='font-bold text-2xl'>
          Opiniones
        </Text>
        {
          <ReviewWrite userType={user?.type || ''}/>
        }
        <Reviews reviews={reviews}/>
      </div>
    </div>
  )
}

export default InfoServiceDetails
