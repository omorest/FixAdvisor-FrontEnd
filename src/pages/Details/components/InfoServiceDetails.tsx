import { Badge, Box, Text } from '@chakra-ui/react'
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
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

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
      <div className='font-semibold text-lg flex justify-between'>
        <div className='flex items-center gap-4'>
          <Text fontSize="4xl">{service?.rate}</Text>
          <Stars rate={service?.rate ?? 0} totalReviews={service?.totalReviews ?? 0}/>
        </div>
        { user?.type === 'Client'
          ? <div className='text-6xl'>
            {
              user.favouriteServices.includes(service?.id)
                ? <AiFillHeart className='text-[#ff595e]'/>
                : <AiOutlineHeart />
            }
          </div>
          : null
        }
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
      <div className='flex flex-col gap-7'>
        <Text className='font-bold text-2xl'>
          Opiniones
        </Text>
        {user?.type === 'Client'
          ? <ReviewWrite user={user} service={service}/>
          : <Text className='font-bold'> Registrate como cliente para poder opinar de un servicio</Text>
        }
        <Reviews reviews={reviews} serviceId={service?.id}/>
      </div>
    </div>
  )
}

export default InfoServiceDetails
