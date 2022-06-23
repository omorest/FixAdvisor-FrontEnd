import { Badge, Box, Text } from '@chakra-ui/react'
import { FC } from 'react'
import Reviews from '../../../components/Rewiews/Reviews'
import Stars from '../../../components/Stars/Stars'
import { Service } from '../../../models'
import { SingleReview } from '../../../models/Review.model'
import { colorTypeProvider, optionsTypeServices } from '../../../utils/typeServiceUtils'
import CarouselImages from '../../../components/CarouselImages/CarouselImages'

interface InfoServiceDetailsProps {
  service: Service
}
const reviews: SingleReview[] = [
  {
    date: '1-02-2022',
    nameClient: 'Carlos',
    opinion: 'Es lo mejor',
    companyProvider: 'Carpinterías Oscar',
    responseProvider: 'Muchas gracias'
  },
  {
    date: '15-04-2021',
    nameClient: 'Cristofer',
    opinion: 'Es lo peor',
    companyProvider: 'Carpinterías Oscar',
    responseProvider: 'No lo creo!'
  }
]

const InfoServiceDetails: FC<InfoServiceDetailsProps> = ({ service }) => {
  return (
    <div className='bg-white p-10 flex flex-col gap-10 min-w-[60%] rounded-lg shadow-xl'>
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
        <Reviews reviews={reviews}/>
      </div>
    </div>
  )
}

export default InfoServiceDetails
