import { Input, Select } from '@chakra-ui/react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { signInUser } from '../../firebase/utilsFirebase'

const SignInForm = () => {
  const { register, handleSubmit } = useForm()
  const { setUserContext } = useContext(UserContext)
  const onSubmit = (data: any) => signInUser(data.email, data.password, data.typeUser, setUserContext)

  return (
    <div className='flex flex-col gap-5 w-[50%] items-center boder-solid border-[2px] boder-2 rounded p-5'>
      <div>Sign In</div>
      <form className='flex flex-col gap-5 w-[80%]' onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder='Email' isRequired {...register('email')}/>
        <Input type='text' placeholder='Password' isRequired {...register('password')} />
        <Select isRequired {...register('typeUser')} className='cursor-pointer'>
          <option value='Client'>Cliente</option>
          <option value='Provider'>Proveedor de servicios</option>
        </Select>
        <Input type="submit" />
      </form>
      <Link to="/signup">Registrate aquí</Link>
    </div>
  )
}

export default SignInForm
