import { Input, Select, Text, Textarea } from '@chakra-ui/react'
import { useContext, useId } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../context/UserContext'
import { fetchPostNewService } from '../../services'

const optionsTypeServices = [
  { plumbing: 'Fontanería' },
  { carpentry: 'Carpintería' },
  { brickwork: 'Albañilería' },
  { carpentry: 'Carpintería' }
]

const ServiceForm = () => {
  const { register, handleSubmit } = useForm()
  const { user } = useContext(UserContext)
  const idService = useId()

  const onSubmit = (data: any) => {
    const newService = {
      ...data,
      providerId: user?.id,
      id: idService,
      urlsImagesService: [],
      rateStarts: [0, 0, 0, 0, 0],
      rate: 0,
      totalReviews: 0
    }
    fetchPostNewService(newService)
  }

  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <Text fontSize='xl'>Crea tu servicio</Text>
      <form className='flex flex-col gap-5 w-[40%] bg-[#759eff] p-10 rounded-lg' onSubmit={handleSubmit(onSubmit)}>
        <Text fontSize='xl' color='white'>Tipo de servicio *</Text>
        <Select placeholder='Elegir' bgColor='white' isRequired {...register('typeService')} className='cursor-pointer'>
          {optionsTypeServices.map((typeService, index) => {
            return <option value={Object.keys(typeService)} key={index} >{Object.values(typeService)}</option>
          })}
        </Select>
        <Text fontSize='xl' color='white'>Descripción *</Text>
        <Textarea bgColor='white' placeholder='Escribe una breve descripción de tu servicio' isRequired {...register('description')}/>
        <Input type="submit" bgColor='white' color='#759eff'className='cursor-pointer' />
      </form>

      <Text fontSize='md'>Los campos con (*) son obligatorios.</Text>
    </div>
  )
}

export default ServiceForm
