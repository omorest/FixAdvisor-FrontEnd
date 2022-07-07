import { FC, useContext, useEffect } from 'react'
import GalleryServices from '../GalleryServices/GalleryServices'
import { Client, Service } from '../../models'
import SortFilter from '../SortFilter/SortFilter'
import { UserContext } from '../../context/UserContext'
import { fetchPostFavouriteService } from '../../services'
import { Checkbox, CheckboxGroup, Stack, useCheckboxGroup } from '@chakra-ui/react'

interface GalleryServicesWithFilterProps {
  services: Service[]
  onSortServices: (typeSort: string) => void
  onFilterServices?: (typeServices: string[]) => void
}

const GalleryServicesWithFilter: FC<GalleryServicesWithFilterProps> = ({ services, onSortServices, onFilterServices }) => {
  const { user, setUserContext } = useContext(UserContext)
  const { value, getCheckboxProps } = useCheckboxGroup({ defaultValue: [] })

  const handleFavouriteServices = (serviceId: string) => {
    if (user) {
      fetchPostFavouriteService(user.id, serviceId).then(res => {
        const userUpdated = { ...user, favouriteServices: res.favouriteServices } as Client
        setUserContext(userUpdated)
      })
    }
  }

  // useEffect(() => {
  //   onFilterServices(value)
  // }, [value])

  return (
    <div className='flex flex-col gap-5 mt-10 '>
      <div className='flex gap-5'>
        <SortFilter onSortServices={onSortServices}/>
        {
          onFilterServices
            ? <CheckboxGroup colorScheme='green'>
              <Stack spacing={[1, 5]} direction={['column', 'row']}>
                <Checkbox {...getCheckboxProps({ value: 'Carpentry' })}>Carpintería</Checkbox>
                <Checkbox {...getCheckboxProps({ value: 'Plumbing' })}>Fontanería</Checkbox>
                <Checkbox {...getCheckboxProps({ value: 'brickwork' })}>Albañilería</Checkbox>
              </Stack>
            </CheckboxGroup>
            : null
        }
      </div>
      <GalleryServices
        services={services}
        favouriteServices={user?.type === 'Client' ? user?.favouriteServices : []}
        typeUser={user?.type || null}
        onFavouriteService={handleFavouriteServices}/>
    </div>
  )
}

export default GalleryServicesWithFilter
