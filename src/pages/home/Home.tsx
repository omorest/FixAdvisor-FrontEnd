import { Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import GalleryServicesWithFilter from '../../components/GalleryWithFilter/GalleryServicesWithFilter'
import Search from '../../components/Search/Search'
import { Service } from '../../models'
import { fetchSearchService, fetchServices } from '../../services'
import { sortByString } from '../../utils/utils'

const Home = () => {
  const [services, setServices] = useState<Service[]>([])
  const [inputValue, setInputValue] = useState('')
  const handleSearch = (inputValue: string) => setInputValue(inputValue)

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

  const handleFilterServices = (typeServices: string[]) => {
    const filteredServices = services.filter((service: Service) => typeServices.includes(service.typeService))
    setServices(filteredServices)
  }

  useEffect(() => {
    fetchServices().then(res => {
      setServices(res)
    })
  }, [])

  useEffect(() => {
    if (inputValue === '') {
      fetchServices().then(res => {
        setServices(res)
      })
    } else {
      fetchSearchService(inputValue)
        .then(res => setServices(res))
    }
  }, [inputValue])

  return (
    <div className="flex flex-col gap-[10px] mt-10">
      <div className='flex justify-center'>
        <Search onSearch={handleSearch}/>
      </div>
      {services.length > 0
        ? <GalleryServicesWithFilter services={services} onSortServices={handleSortServices} onFilterServices={handleFilterServices}/>
        : <Text className='text-2xl mt-10'>No se han encontrado servicios</Text>
      }
    </div>
  )
}

export default Home
