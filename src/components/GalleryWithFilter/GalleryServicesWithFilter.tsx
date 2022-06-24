import { FC, useContext } from 'react'
import GalleryServices from '../GalleryServices/GalleryServices'
import { Client, Service } from '../../models'
import SortFilter from '../SortFilter/SortFilter'
import { UserContext } from '../../context/UserContext'
import { fetchPostFavouriteService } from '../../services'

interface GalleryServicesWithFilterProps {
  services: Service[]
  onSortServices: (typeSort: string) => void
}

const GalleryServicesWithFilter: FC<GalleryServicesWithFilterProps> = ({ services, onSortServices }) => {
  const { user, setUserContext } = useContext(UserContext)

  const handleFavouriteServices = (serviceId: string) => {
    if (user) {
      fetchPostFavouriteService(user.id, serviceId).then(res => {
        const userUpdated = { ...user, favouriteServices: res.favouriteServices } as Client
        setUserContext(userUpdated)
      })
    }
  }

  return (
    <div className='flex flex-col gap-5 mt-10' >
      <SortFilter onSortServices={onSortServices}/>
      <GalleryServices services={services} favouriteServices={user?.favouriteServices || []} typeUser={user?.type || null} onFavouriteService={handleFavouriteServices}/>
    </div>
  )
}

export default GalleryServicesWithFilter
