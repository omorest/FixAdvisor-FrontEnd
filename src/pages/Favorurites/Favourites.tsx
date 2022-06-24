import { Text } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { Service } from '../../models'
import GalleryServicesWithFilter from '../../components/GalleryWithFilter/GalleryServicesWithFilter'
import { sortByString } from '../../utils/utils'
import { fetchFavourites } from '../../services'

const Favourites = () => {
  const [favouriteServices, setFavouriteServices] = useState<Service[]>([])
  const { user } = useContext(UserContext)

  const handleSortServices = (typeSort: string) => {
    const servicesSort = [...favouriteServices]
    if (typeSort === 'rate') {
      servicesSort.sort((a, b) => b.rate - a.rate)
    }
    if (typeSort === 'nameService' || typeSort === 'typeService') {
      servicesSort.sort((a, b) => sortByString(a[typeSort], b[typeSort]))
    }
    setFavouriteServices(servicesSort)
  }

  useEffect(() => {
    if (user) {
      fetchFavourites(user?.id).then(res => {
        setFavouriteServices(res)
      })
    }
  }, [user])

  return (
    <div >
      <Text className='font-bold text-3xl mt-10'>Servicios favoritos</Text>
      <div className='flex mt-10'>
        {favouriteServices.length
          ? <GalleryServicesWithFilter services={favouriteServices || []} onSortServices={handleSortServices}/>
          : <Text className='font-bold text-xl'>No hay ningún servicio como favorito</Text>
        }
      </div>
    </div>
  )
}

export default Favourites
