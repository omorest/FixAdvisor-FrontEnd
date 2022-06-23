import { Link, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { Provider } from '../../../models'

interface InfoProviderDetailsProps {
  provider: Provider
}

const InfoProviderDetails: FC<InfoProviderDetailsProps> = ({ provider }) => {
  return (
    <div className='bg-white p-10 flex flex-col gap-10 min-w-[20%] h-[100%] rounded-lg shadow-xl'>
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
  )
}

export default InfoProviderDetails
