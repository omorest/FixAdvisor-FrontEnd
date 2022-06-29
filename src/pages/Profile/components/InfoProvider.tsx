import { Text } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'
import GalleryServices from '../../../components/GalleryServices/GalleryServices'
import { User } from '../../../context/UserContext'
import { Service } from '../../../models'
import { fetchServicesProvider } from '../../../services'

interface InfoProviderProps {
  user: User
}

const InfoProvider: FC<InfoProviderProps> = ({ user }) => {
  const [servicesProvider, setServicesProvider] = useState<Service[]>([])

  useEffect(() => {
    const request = async () => {
      const services = await fetchServicesProvider(user?.id)
      console.log('hola')
      setServicesProvider(services)
    }
    request()
  }, [])

  return (
    <div className='bg-white p-10 flex flex-col gap-10 w-[80%] rounded-lg shadow-xl'>
      <div className='flex flex-col gap-5 justify-between'>
        <div className='mt-10 flex flex-col gap-5'>
          <Text className='font-bold text-xl'>
            Servicios
          </Text>
          {servicesProvider?.length > 0
            ? <GalleryServices services={servicesProvider} typeUser={user && user?.type} />
            : <Text> No tienes servicios creados</Text>
          }

        </div>
      </div>
    </div>
  )
}

export default InfoProvider
