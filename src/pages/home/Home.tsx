import { Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import GalleryServicesWithFilter from '../../components/GalleryWithFilter/GalleryServicesWithFilter'
import Search from '../../components/Search/Search'
import { Service } from '../../models'
import { fetchSearchService, fetchServices } from '../../services'
import { sortByString } from '../../utils/utils'

const Home = () => {
  const [services, setServices] = useState<Service[]>([])
  const [servicesFiltered, setServicesFiltered] = useState<Service[]>([])
  const [inputValue, setInputValue] = useState('')
  const handleSearch = (inputValue: string) => setInputValue(inputValue)

  const handleSortServices = (typeSort: string) => {
    const servicesSort = [...servicesFiltered]
    if (typeSort === 'rate') {
      servicesSort.sort((a, b) => b.rate! - a.rate!)
    }
    if (typeSort === 'nameService' || typeSort === 'typeService') {
      servicesSort.sort((a, b) => sortByString(a[typeSort], b[typeSort]))
    }
    setServicesFiltered(servicesSort)
  }

  const handleFilterServices = (typeServices: any[]) => {
    const filteredServices = services.filter((service: Service) => {
      return typeServices.includes(service.typeService)
    })
    setServicesFiltered(filteredServices)
  }

  useEffect(() => {
    fetchServices().then(res => {
      setServices(res)
      setServicesFiltered(res)
    })
  }, [])

  useEffect(() => {
    if (inputValue === '') {
      fetchServices().then(res => {
        setServicesFiltered(res)
      })
    } else {
      fetchSearchService(inputValue)
        .then(res => setServicesFiltered(res))
    }
  }, [inputValue])

  return (
    <div className="flex flex-col gap-[10px] mt-10">
      <div className='flex justify-center'>
        <Search onSearch={handleSearch}/>
      </div>
      {services.length > 0
        ? <GalleryServicesWithFilter services={servicesFiltered} onSortServices={handleSortServices} onFilterServices={handleFilterServices}/>
        : <Text className='text-2xl mt-10'>No se han encontrado servicios</Text>
      }
    </div>
  )
}

export default Home
