import { Text } from '@chakra-ui/react'
import { useState } from 'react'
import GalleryServicesWithFilter from '../../components/GalleryWithFilter/GalleryServicesWithFilter'
import { Service } from '../../models'

const Favourites = () => {
  const [favouriteServices, setFavouriteServices] = useState<Service[]>([])
  return (
    <div >
      <Text className='font-bold text-3xl mt-10'>Servicios favoritos</Text>
      <div className='flex justify-center mt-10'>
        {favouriteServices.length
          ? <GalleryServicesWithFilter services={[]}/>
          : <Text className='font-bold text-xl'>No hay ningún servicio como favorito</Text>
        }
      </div>
    </div>
  )
}

export default Favourites
