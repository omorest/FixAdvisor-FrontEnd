import { Input, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { createUserProvider } from '../../firebase/utilsFirebase'

const SingUpFormProvider = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => createUserProvider({ ...data }, data.password)

  return (
    <div className='flex flex-col items-center justify-center gap-10 mt-20'>
      <div>Sign Up</div>
      <form className='flex flex-col gap-5 w-[80%]' onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder='Name' isRequired {...register('name')}/>
        <Input placeholder='Email' isRequired {...register('email')}/>
        <Input placeholder='Company' isRequired {...register('company')}/>
        <Input type='password' placeholder='Password' isRequired {...register('password')} />
        <Text fontSize='xl' color='black' >Localización *</Text>
        <Input placeholder='Location' bgColor='white' isRequired {...register('location')}/>
        <Text fontSize='xl' color='black' >Número de teléfono *</Text>
        <Input type='number' bgColor='white' placeholder='Phone number' isRequired {...register('phoneNumber')}/>
        <Text fontSize='xl' color='black' >Web</Text>
        <Input type='text' bgColor='white' placeholder='https://micompañía.com' {...register('website')}/>
        <Input type="submit" />
      </form>
    </div>
  )
}

export default SingUpFormProvider
