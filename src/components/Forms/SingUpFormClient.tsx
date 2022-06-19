import { Input, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { createUserClient } from '../../firebase/utilsFirebase'

const SingUpFormClient = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => createUserClient({ ...data, favouriteServices: [] }, data.password)

  return (
    <div className='flex flex-col items-center justify-center gap-10 mt-20 mb-20' >
      <form className='bg-white p-10 flex flex-col gap-10 min-w-[35%] rounded-lg shadow-xl' onSubmit={handleSubmit(onSubmit)}>
        <Text fontSize='2xl' className='font-bold text-center'> Registro Cliente</Text>
        <Input placeholder='Nombre' variant='flushed' color='#0E141B' _placeholder={{ color: 'inherit' }} focusBorderColor='#0E141B' isRequired {...register('name')}/>
        <Input placeholder='Email' variant='flushed' color='#0E141B' _placeholder={{ color: 'inherit' }} focusBorderColor='#0E141B' isRequired {...register('email')}/>
        <Input placeholder='Contraseña' type='password' variant='flushed' color='#0E141B' _placeholder={{ color: 'inherit' }} focusBorderColor='#0E141B' isRequired {...register('password')} />
        <Input bgColor='white' type="submit" color='white' bgGradient='linear(to-r, green.300, green.300)' className='font-bold cursor-pointer'/>
      </form>
    </div>
  )
}

export default SingUpFormClient
