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
    <div className='flex flex-col items-center justify-center gap-10 mt-20 mb-20' >
      <form className='bg-white p-10 flex flex-col gap-10 min-w-[35%] rounded-lg shadow-xl' onSubmit={handleSubmit(onSubmit)}>
        <Text fontSize='2xl' className='font-bold text-center'>Crear servicio</Text>
        <div className='flex flex-col gap-3'>
          <Text fontSize='lg' color='#0E141B'>Tipo de servicio *</Text>
          <Select placeholder='Elegir' variant='flushed' color='#0E141B' _placeholder={{ color: 'inherit' }} focusBorderColor='#0E141B' isRequired {...register('typeService')} className='cursor-pointer'>
            {optionsTypeServices.map((typeService, index) => {
              return <option value={Object.keys(typeService)} key={index} >{Object.values(typeService)}</option>
            })}
          </Select>
        </div>
        <div className='flex flex-col gap-3'>
          <Text fontSize='lg' color='#0E141B'>Descripción *</Text>
          <Textarea placeholder='Describe tu servicio aquí' variant='filled' color='#0E141B' _placeholder={{ color: 'inherit' }} focusBorderColor='#0E141B' isRequired {...register('description')}/>
        </div>
        <Input bgColor='white' type="submit" color='white' bgGradient='linear(to-r, green.300, green.300)' className='font-bold cursor-pointer'/>
      </form>

      <Text fontSize='md'>Los campos con (*) son obligatorios.</Text>
    </div>
  )
}

export default ServiceForm
