import { Text } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { Service } from '../../models'
import { fetchFavourites } from '../../services/favourites.service'
import GalleryServicesWithFilter from '../../components/GalleryWithFilter/GalleryServicesWithFilter'

const Favourites = () => {
  const [favouriteServices, setFavouriteServices] = useState<Service[]>([])
  const { user } = useContext(UserContext)
  console.log(user)
  useEffect(() => {
    if (user) {
      fetchFavourites(user?.id).then(res => {
        setFavouriteServices(res)
      })
    }
  }, [])

  return (
    <div >
      <Text className='font-bold text-3xl mt-10'>Servicios favoritos</Text>
      <div className='flex mt-10'>
        {favouriteServices.length
          ? <GalleryServicesWithFilter services={favouriteServices || []}/>
          : <Text className='font-bold text-xl'>No hay ningún servicio como favorito</Text>
        }
      </div>
    </div>
  )
}

export default Favourites
