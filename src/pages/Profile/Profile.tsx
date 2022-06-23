import { Image, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import InfoProvider from './components/InfoProvider'

const defaultImage = 'https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png'
const Profile = () => {
  const { user } = useContext(UserContext)

  return (
    <div className='flex flex-col gap-4 items-center mt-10'>
      <div className='bg-white p-10 flex flex-col gap-10 w-[80%] rounded-lg shadow-xl'>
        <div className='flex items-center gap-5 justify-between'>
          <Text className='font-bold text-3xl'>
            {
              user?.type === 'Provider' ? <Text>{user.company}</Text> : <Text> {user?.name}</Text>
            }
          </Text>
          <Image
            borderRadius='full'
            boxSize='200px'
            src={'https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=2000' || { defaultImage }}
            objectFit='cover'
            alt='perfil foto'
          />
        </div>
      </div>
      {
        user?.type === 'Provider' ? <InfoProvider user={user}/> : null
      }
    </div>

  )
}

export default Profile
