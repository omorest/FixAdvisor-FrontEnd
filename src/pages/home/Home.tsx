import { useEffect, useState } from 'react'
import GalleryServicesWithFilter from '../../components/GalleryWithFilter/GalleryServicesWithFilter'
import Search from '../../components/Search/Search'
import { Service } from '../../models'
import { fetchServices } from '../../services'

const Home = () => {
  const [services, setServices] = useState<Service[]>([])

  const sortByString = (a: string, b: string) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  }

  const handleSortServices = (typeSort: string) => {
    const servicesSort = [...services]
    if (typeSort === 'rate') {
      servicesSort.sort((a, b) => b.rate - a.rate)
    }
    if (typeSort === 'nameService' || typeSort === 'typeService') {
      servicesSort.sort((a, b) => sortByString(a[typeSort], b[typeSort]))
    }
    setServices(servicesSort)
  }

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
      <GalleryServicesWithFilter services={services} onSortServices={handleSortServices}/>
    </div>
  )
}

export default Home
