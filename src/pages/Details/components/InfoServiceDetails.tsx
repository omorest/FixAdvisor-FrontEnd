import { Badge, Box, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import Stars from '../../../components/Stars/Stars'
import { Service } from '../../../models'
import { colorTypeProvider, optionsTypeServices } from '../../../utils/typeServiceUtils'

interface InfoServiceDetailsProps {
  service: Service
}

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
      <div className=''>
        <Stars rate={service?.rate ?? 0} totalReviews={service?.totalReviews ?? 0}/>
      </div>
      <div>
        <Text className='font-bold text-2xl'>
            Fotos
        </Text>
      </div>
      <div className='flex flex-col gap-5'>
        <Text className='font-bold text-2xl'>
              Sobre el servicio
        </Text>
        <p>
          {service?.description}
        </p>
      </div>
      <div>
        <Text className='font-bold text-2xl'>
          Opiniones
        </Text>
      </div>
    </div>
  )
}

export default InfoServiceDetails
