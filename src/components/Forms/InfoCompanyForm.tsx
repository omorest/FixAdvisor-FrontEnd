import { Input, Select, Text, Textarea } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

const optionsTypeServices = [
  { plumbing: 'Fontanería' },
  { carpentry: 'Carpintería' },
  { brickwork: 'Albañilería' },
  { carpentry: 'Carpintería' }
]

const InfoCompanyForm = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => console.log(data)

  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <Text fontSize='xl'>Crea tu servicio</Text>
      <form className='flex flex-col gap-5 w-[40%] bg-[#759eff] p-10 rounded-lg' onSubmit={handleSubmit(onSubmit)}>
        <Text fontSize='xl' color='white'>Tipo de servicio *</Text>
        <Select placeholder='Elegir' bgColor='white' isRequired {...register('type')} className='cursor-pointer'>
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

export default InfoCompanyForm
