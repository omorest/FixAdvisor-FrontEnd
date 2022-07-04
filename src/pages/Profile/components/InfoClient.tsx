import { Text } from '@chakra-ui/react'
import { FC } from 'react'
import { Client } from '../../../models'

interface InfoClientProps {
  user: Client
}

const InfoClient: FC<InfoClientProps> = ({ user }) => {
  return (
    <div className='bg-white p-10 flex flex-col gap-10 w-[80%] rounded-lg shadow-xl'>
      <div className='flex gap-5 flex-col'>
        <div className='flex justify-between w-[100%]'>
          <Text className='font-bold text-xl'>
            Información
          </Text>
          <Text className='font text-lg'>
            Editar información
          </Text>
        </div>

        <div className='flex flex-col gap-2'>
          <div>
            <Text className='text-lg font-bold'>
              Nombre:
            </Text>
            <Text className='text-lg'>
              {user?.name}
            </Text>
          </div>

          <div>
            <Text className='text-lg font-bold'>
              Correo electrónico:
            </Text>
            <Text className='text-lg'>
              {user?.email}
            </Text>
          </div>
          <div>
            <Text className='text-lg font-bold'>
              Contraseña:
            </Text>
            <Text className='text-lg'>
              *****************
            </Text>
          </div>
        </div>

      </div>
    </div>
  )
}

export default InfoClient
