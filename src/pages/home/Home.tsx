import { useEffect, useState } from 'react'
import GalleryServicesWithFilter from '../../components/GalleryWithFilter/GalleryServicesWithFilter'
import Search from '../../components/Search/Search'
import { Service } from '../../models'
import { fetchServices } from '../../services'

const Home = () => {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    fetchServices().then(res => {
      setServices(res)
    })
  }, [])

  return (
    <div className="flex flex-col gap-[10px] mt-10">
      <div className='flex justify-center'>
        <Search />
      </div>
      <GalleryServicesWithFilter services={services}/>
    </div>
  )
}

export default Home
