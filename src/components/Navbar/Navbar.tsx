import { Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

const Navbar = () => {
  const { user } = useContext(UserContext)
  return (
    <div className='flex justify-between items-center p-2'>
      <Link to='/'><Text fontSize='3xl'>FixAdvisor</Text></Link>
      <nav className='flex gap-5'>
        <Link to="/">Home</Link>
        {user?.type !== 'Provider'
          ? null
          : <Link to="/new-service">New Service</Link>
        }
        {
          user
            ? <Link to="/">Cerrar sesión</Link>
            : <Link to="/login">Login</Link>
        }
      </nav>
    </div>
  )
}

export default Navbar
