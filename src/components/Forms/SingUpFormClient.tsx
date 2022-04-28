import { Input } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { createUser } from '../../firebase/utilsFirebase'

const SingUpFormClient = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => createUser({ ...data, type: 'client' })

  return (
    <div className='flex flex-col gap-5 w-[50%] items-center boder-solid border-[2px] boder-2 rounded p-5'>
      <div>Sing Up</div>
      <form className='flex flex-col gap-5 w-[80%]' onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder='Name' isRequired {...register('name')}/>
        <Input placeholder='Email' isRequired {...register('email')}/>
        <Input type='text' placeholder='Password' isRequired {...register('password')} />
        <Input type="submit" />
      </form>
    </div>
  )
}

export default SingUpFormClient
