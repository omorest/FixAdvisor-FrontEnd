import { Text } from '@chakra-ui/react'
import { FC } from 'react'
import { User } from '../../../context/UserContext'

interface InfoProviderProps {
  user: User
}

const InfoProvider: FC<InfoProviderProps> = ({ user }) => {
  return (
    <div className='bg-white p-10 flex flex-col gap-10 w-[80%] rounded-lg shadow-xl'>
      <div className='flex items-center gap-5 justify-between'>
        <Text className='font-bold text-3xl'>
          {user?.name}
        </Text>
      </div>
    </div>
  )
}

export default InfoProvider
