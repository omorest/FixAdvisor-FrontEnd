import { Link, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { ImLocation } from 'react-icons/im'
import { Provider } from '../../../models'

interface SpecificInfoProviderProps {
  user: Provider
}

const SpecificInfoProvider: FC<SpecificInfoProviderProps> = ({ user }) => {
  return (
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

  )
}

export default SpecificInfoProvider
