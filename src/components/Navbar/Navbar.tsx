import { Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-2'>
      <Text fontSize='3xl'>FixAdvisor</Text>
      <div>
        <div>Home</div>
      </div>
    </div>
  )
}

export default Navbar
