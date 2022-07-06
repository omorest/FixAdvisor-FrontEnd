import { Link, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { ImLocation } from 'react-icons/im'
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

        <div className='flex items-center gap-2'>
          <AiFillPhone/>
          <Text className='text-lg'>
            {provider?.phoneNumber}
          </Text>
        </div>
        {provider?.website &&
        <div className='flex items-center gap-2'>
          <CgWebsite />
          <Text className='text-lg'>
            <Link href={provider?.website} target='_blank' color='teal.500' >{provider?.website}</Link>
          </Text>
        </div>
        }
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-2'>
          <ImLocation />
          <Text className='text-lg'>
            {provider?.location}
          </Text>
        </div>
      </div>
    </div>
  )
}

export default InfoProviderDetails
