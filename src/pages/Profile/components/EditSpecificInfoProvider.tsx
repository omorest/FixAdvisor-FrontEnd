import { Input } from '@chakra-ui/react'
import { FC, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../../context/UserContext'
import { Provider } from '../../../models'
import { fetchUpdateProvider } from '../../../services'
import { filterDataObjectWithInfo } from '../../../utils/utils'

interface EditSpecificInfoProviderProps {
  user: Provider
  onSave: () => void
}

const EditSpecificInfoProvider: FC<EditSpecificInfoProviderProps> = ({ user, onSave }) => {
  const { register, handleSubmit } = useForm()
  const { setUserContext } = useContext(UserContext)

  const onSubmit = (data: any) => {
    const dataFiltered = filterDataObjectWithInfo(data)
    fetchUpdateProvider({ ...dataFiltered, id: user.id } as Provider)
    setUserContext({ ...user, ...dataFiltered })
    onSave()
  }

  return (
    <div className=''>
      <form className='flex flex-col w-[40%] gap-4' onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder={'Nombre: ' + user?.name} variant='flushed' color='#0E141B' _placeholder={{ color: 'inherit' }} focusBorderColor='#0E141B' {...register('name')}/>
        <Input placeholder={'Compañía: ' + user?.company} variant='flushed' color='#0E141B' _placeholder={{ color: 'inherit' }} focusBorderColor='#0E141B' {...register('company')}/>
        <Input placeholder={'Localización: ' + user?.location} variant='flushed' color='#0E141B' _placeholder={{ color: 'inherit' }} focusBorderColor='#0E141B' {...register('location')}/>
        <Input type='number' placeholder={'Número de contacto: ' + user?.phoneNumber} variant='flushed' color='#0E141B' _placeholder={{ color: 'inherit' }} focusBorderColor='#0E141B' {...register('phoneNumber')}/>
        <Input type='text' placeholder={'Web: ' + user?.website} variant='flushed' color='#0E141B' _placeholder={{ color: 'inherit' }} focusBorderColor='#0E141B' {...register('website')}/>
        <Input bgColor='white' type="submit" value='Guardar' color='white' bgGradient='linear(to-r, green.300, green.300)' className='font-bold cursor-pointer'/>
      </form>
    </div>
  )
}

export default EditSpecificInfoProvider
