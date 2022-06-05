import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-2'>
      <Text fontSize='3xl'>FixAdvisor</Text>
      <nav className='flex gap-5'>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/new-service">New Service</Link>
      </nav>
    </div>
  )
}

export default Navbar
