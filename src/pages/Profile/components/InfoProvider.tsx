import { Link, Text } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { ImLocation } from 'react-icons/im'
import GalleryServices from '../../../components/GalleryServices/GalleryServices'
import { Provider, Service } from '../../../models'
import { fetchServicesProvider } from '../../../services'

interface InfoProviderProps {
  user: Provider
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
          <div className='flex justify-between'>
            <Text className='font-bold text-xl'>
            Información
            </Text>
            <Text className='font text-lg'>
            Editar información
            </Text>
          </div>
          <div>
            <div className='flex items-center gap-2'>
              <AiFillPhone/>
              <Text className='text-lg'>
                {user?.phoneNumber}
              </Text>
            </div>
            {user?.website &&
            <div className='flex items-center gap-2'>
              <CgWebsite />
              <Text className='text-lg'>
                <Link
                  href={user?.website}
                  target='_blank'
                  color='teal.500' >
                  {user?.website}
                </Link>
              </Text>
            </div>
            }
            <div className='flex items-center gap-2'>
              <ImLocation />
              <Text className='text-lg'>
                {user?.location}
              </Text>
            </div>
          </div>
        </div>

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
