import { Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

const Navbar = () => {
  const { user, setUserContext } = useContext(UserContext)

  const handleLogOut = () => setUserContext(null)

  const hoverStyle = 'hover:text-[white] hover:bg-[#68D391] p-2 rounded-[5px]'

  return (
    <div className='flex justify-center bg-[#1f2937] py-3'>
      <div className='flex justify-between items-center w-[90%]'>

        <Link to='/'><Text fontSize='3xl' className='text-white font-medium'>FixAdvisor</Text></Link>
        <nav className='flex gap-5'>
          {/* <Link to="/" className={`text-white font-medium ${hoverStyle}`}>Home</Link> */}
          {user?.type !== 'Provider'
            ? null
            : <Link to="/new-service" className={`text-white font-medium ${hoverStyle}`}>New service</Link>
          }
          {
            user && user.type === 'Client'
              ? <Link to="/favourites" className={`text-white font-medium ${hoverStyle}`} >Favoritos</Link>
              : null
          }
          {
            user
              ? <Link to="/profile" className={`text-white font-medium ${hoverStyle}`} >Perfil</Link>
              : null
          }
          {
            user
              ? <Link to="/" onClick={handleLogOut} className={`text-white font-medium ${hoverStyle}`} >Cerrar sesión</Link>
              : <Link to="/login" className={`text-white font-medium ${hoverStyle}`}>Login</Link>
          }
        </nav>
      </div>
    </div>
  )
}

export default Navbar
