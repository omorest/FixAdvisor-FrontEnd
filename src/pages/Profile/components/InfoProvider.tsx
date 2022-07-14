import { Text } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'
import GalleryServices from '../../../components/GalleryServices/GalleryServices'
import { Provider, Service } from '../../../models'
import { fetchServicesProvider } from '../../../services'
import EditSpecificInfoProvider from './EditSpecificInfoProvider'
import SpecificInfoProvider from './SpecificInfoProvider'

interface InfoProviderProps {
  user: Provider
}

const InfoProvider: FC<InfoProviderProps> = ({ user }) => {
  const [servicesProvider, setServicesProvider] = useState<Service[]>([])
  const [isEditingInformation, setIsEditingInformation] = useState<boolean>(false)

  useEffect(() => {
    const request = async () => {
      const services = await fetchServicesProvider(user?.id)
      setServicesProvider(services)
    }
    request()
  }, [])

  const handleEditInformation = () => setIsEditingInformation(!isEditingInformation)
  const handleDelete = async (services: Service[]) => {
    const servicess = await fetchServicesProvider(user?.id)
    setServicesProvider(servicess)
  }

  return (
    <div className='bg-white p-10 flex flex-col gap-10 w-[80%] rounded-lg shadow-xl'>
      <div className='flex flex-col gap-5 justify-between'>
        <div className='mt-10 flex flex-col gap-5'>
          <div className='flex justify-between'>
            <Text className='font-bold text-xl'>
            Información
            </Text>
            <Text className='font text-lg hover:cursor-pointer' onClick={handleEditInformation}>
              {isEditingInformation ? 'Cancelar editar información' : 'Editar información'}
            </Text>
          </div>
          {
            isEditingInformation
              ? <EditSpecificInfoProvider user={user} onSave={() => setIsEditingInformation(false)}/>
              : <SpecificInfoProvider user={user}/>
          }

        </div>

        <div className='mt-10 flex flex-col gap-5'>
          <Text className='font-bold text-xl'>
            Servicios
          </Text>
          {servicesProvider?.length > 0
            ? <GalleryServices services={servicesProvider} user={user} onDeleteService={handleDelete}/>
            : <Text> No tienes servicios creados</Text>
          }

        </div>
      </div>
    </div>
  )
}

export default InfoProvider
