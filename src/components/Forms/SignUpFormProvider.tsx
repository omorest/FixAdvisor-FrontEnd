import { Input, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { createUserProvider } from '../../firebase/utilsFirebase'

const SignUpFormProvider = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const onSubmit = (data: any) => {
    createUserProvider({ ...data }, data.password)
    navigate('/login')
  }

  return (
    <div className='flex flex-col items-center justify-center mt-10' >
      <form className='bg-white p-10 flex flex-col gap-10 min-w-[35%] rounded-lg shadow-xl' onSubmit={handleSubmit(onSubmit)}>
        <Text fontSize='2xl' className='font-bold text-center'> Registro proveedor</Text>
        <Input placeholder='Nombre' variant='flushed' color='#0E141B' _placeholder={{ color: 'inherit' }} focusBorderColor='#0E141B' isRequired {...register('name')}/>
        <Input placeholder='Email' variant='flushed' color='#0E141B' _placeholder={{ color: 'inherit' }} focusBorderColor='#0E141B' isRequired {...register('email')}/>
        <Input placeholder='Compañía' variant='flushed' color='#0E141B' _placeholder={{ color: 'inherit' }} focusBorderColor='#0E141B' isRequired {...register('company')}/>
        <Input placeholder='Contraseña' type='password' variant='flushed' color='#0E141B' _placeholder={{ color: 'inherit' }} focusBorderColor='#0E141B' isRequired {...register('password')} />
        <Input placeholder='Localización' variant='flushed' color='#0E141B' _placeholder={{ color: 'inherit' }} focusBorderColor='#0E141B' isRequired {...register('location')}/>
        <Input type='number' placeholder='Número de contacto' variant='flushed' color='#0E141B' _placeholder={{ color: 'inherit' }} focusBorderColor='#0E141B' isRequired {...register('phoneNumber')}/>
        <Input type='text' placeholder='Web' variant='flushed' color='#0E141B' _placeholder={{ color: 'inherit' }} focusBorderColor='#0E141B' {...register('website')}/>
        <div className='flex flex-col gap-2'>
          <Text>Logo de la compañía</Text>
          <input type="file"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2
              file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold
              file:bg-[#e2e8f0] file:text-[#0E141B]
              hover:file:bg-[#CDF2CA] hover:file:cursor-pointer hover:cursor-pointer"
          />
        </div>
        <Input bgColor='white' type="submit" value='Acceder' color='white' bgGradient='linear(to-r, green.300, green.300)' className='font-bold cursor-pointer'/>
      </form>
    </div>
  )
}

export default SignUpFormProvider
