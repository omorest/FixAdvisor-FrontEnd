import { FC, useContext } from 'react'
import GalleryServices from '../GalleryServices/GalleryServices'
import { Client, Service } from '../../models'
import SortFilter from '../SortFilter/SortFilter'
import { UserContext } from '../../context/UserContext'
import { fetchPostFavouriteService } from '../../services/favourites.service'

interface GalleryServicesWithFilterProps {
  services: Service[]
}

const GalleryServicesWithFilter: FC<GalleryServicesWithFilterProps> = ({ services }) => {
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
      <SortFilter />
      <GalleryServices services={services} favouriteServices={user?.favouriteServices || []} typeUser={user?.type || null} onFavouriteService={handleFavouriteServices}/>
    </div>
  )
}

export default GalleryServicesWithFilter
