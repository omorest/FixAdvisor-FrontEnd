import { Input, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { signInUser } from '../../firebase/utilsFirebase'

const SignInForm = () => {
  const { register, handleSubmit } = useForm()
  const { setUserContext } = useContext(UserContext)
  const navigate = useNavigate()

  const onSubmit = (data: any) => {
    signInUser(data.email, data.password, setUserContext)
    navigate('/')
  }

  return (
    <div className='flex flex-col items-center justify-center gap-10 mt-20 mb-20' >
      <form className='bg-white p-10 flex flex-col gap-10 min-w-[30%] rounded-lg shadow-xl' onSubmit={handleSubmit(onSubmit)}>
        <Text fontSize='2xl' className='font-bold text-center'> Iniciar sesión</Text>
        <Input placeholder='Email' variant='flushed' color='#0E141B' _placeholder={{ color: 'inherit' }} focusBorderColor='#0E141B' isRequired {...register('email')}/>
        <Input placeholder='Contraseña' type='password' variant='flushed' color='#0E141B' _placeholder={{ color: 'inherit' }} focusBorderColor='#0E141B' isRequired {...register('password')} />
        <Input bgColor='white' type="submit" value='Acceder' color='white' bgGradient='linear(to-r, green.300, green.300)' className='font-bold cursor-pointer'/>
        <Link to="/signup" className='text-center'>Registrate aquí</Link>
      </form>
    </div>
  )
}

export default SignInForm
