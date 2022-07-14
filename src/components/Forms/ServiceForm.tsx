import { Input, Select, Text, Textarea } from '@chakra-ui/react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { Provider } from '../../models'
import { fetchPostNewService } from '../../services'
import { uuid } from '../../utils/utils'

const optionsTypeServices = [
  { plumbing: 'Fontanería' },
  { carpentry: 'Carpintería' },
  { brickwork: 'Albañilería' }
]

const ServiceForm = () => {
  const { register, handleSubmit } = useForm()
  const user = useContext(UserContext).user as Provider
  const setUserContext = useContext(UserContext).setUserContext
  const navigate = useNavigate()

  const onSubmit = async (data: any) => {
    const imagesFiles = data.urlsImagesService
    const imagesFilesKeys = Object.keys(imagesFiles)

    const urlsImagesPromises = imagesFilesKeys.map(async (keyImage) => {
      const dataImages = new FormData()
      dataImages.append('file', imagesFiles[keyImage])
      dataImages.append('upload_preset', 'fixAdvisor')
      const res = await fetch('https://api.cloudinary.com/v1_1/fixadvisor/image/upload', {
        method: 'POST',
        body: dataImages
      })
      const { secure_url } = await res.json()
      return secure_url
    })

    Promise.all(urlsImagesPromises).then(urlImages => {
      const newService = {
        ...data,
        providerId: user?.id,
        id: uuid(),
        urlsImagesService: urlImages || [],
        rateStars: [0, 0, 0, 0, 0],
        rate: 0,
        totalReviews: 0
      }
      fetchPostNewService(newService).then(res => {
        setUserContext({ ...user, servicesIds: [...user?.servicesIds!, newService?.id] } as Provider)
        navigate(`/details/${newService.id}`)
      })
    })
  }

  return (
    <div className='flex flex-col items-center justify-center gap-10 mt-20 mb-20' >
      <form className='bg-white p-10 flex flex-col gap-10 min-w-[35%] rounded-lg shadow-xl' onSubmit={handleSubmit(onSubmit)}>
        <Text fontSize='2xl' className='font-bold text-center'>Crear servicio</Text>
        <div className='flex flex-col gap-3'>
          <Text fontSize='lg' color='#0E141B'>Nombre del servicio *</Text>
          <Input placeholder='Pon nombre a tu servicio aquí' variant='filled' color='#0E141B' _placeholder={{ color: 'inherit' }} focusBorderColor='#0E141B' isRequired {...register('nameService')}/>
        </div>
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
        <div className='flex flex-col gap-2'>
          <Text>Fotos para mostrar en el servicio</Text>
          <input type="file"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2
              file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold
              file:bg-[#e2e8f0] file:text-[#0E141B]
              hover:file:bg-[#CDF2CA] hover:file:cursor-pointer hover:cursor-pointer"
            multiple
            required
            {...register('urlsImagesService')}
          />
        </div>
        <Input bgColor='white' type="submit" color='white' bgGradient='linear(to-r, green.300, green.300)' className='font-bold cursor-pointer'/>
      </form>

      <Text fontSize='md'>Los campos con (*) son obligatorios.</Text>
    </div>
  )
}

export default ServiceForm
