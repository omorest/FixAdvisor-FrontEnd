import { Badge, Box, Link, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Provider, Service } from '../../models'
import { fetchProvider, fetchService } from '../../services'

const colorTypeProvider: any = {
  plumbing: 'blue',
  carpentry: 'orange',
  brickwork: 'gray'
}

const optionsTypeServices: any = {
  plumbing: 'Fontanería',
  carpentry: 'Carpintería',
  brickwork: 'Albañilería'
}

const Details = () => {
  const { id } = useParams()
  const [provider, setProvider] = useState<Provider>()
  const [service, setService] = useState<Service>()

  useEffect(() => {
    const requestService = async () => {
      const serviceInfo = await fetchService(id)
      const providerInfo = await fetchProvider(serviceInfo.providerId)
      setService(serviceInfo)
      setProvider(providerInfo)
    }
    requestService()
  }, [id])

  return (
    <div className='flex justify-center gap-10 flex-wrap mt-10'>
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
        <div>
          <div>Estrellas</div>
          <div>{service?.totalReviews} valoraciones</div>
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
      <div className='bg-white p-10 flex flex-col gap-10 min-w-[20%] rounded-lg shadow-xl'>
        <div>
          <Text className='font-bold text-2xl'>
            {provider?.company}
          </Text>
        </div>
        <div className='flex flex-col gap-3'>
          <Text className='text-lg'>
            {provider?.phoneNumber}
          </Text>
          {provider?.website &&
          <Text className='text-lg'>
            <Link href={provider?.website} target='_blank' color='teal.500' >{provider?.website}</Link>
          </Text>}
        </div>
        <div className='flex flex-col gap-3'>
          <Text className='font-bold text-xl'>
            Localización
          </Text>
          <Text className='text-lg'>
            {provider?.location}
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Details
