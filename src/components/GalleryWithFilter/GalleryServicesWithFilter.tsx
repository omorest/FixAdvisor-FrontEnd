import { FC, useEffect, useState } from 'react'
import { fetchServices } from '../../api/services'
import { Service } from '../../api/services/modelServices'
import GalleryServices from '../GalleryServices/GalleryServices'
import SortFilter from '../SortFilter/SortFilter'

interface GalleryServicesWithFilterProps {
  className: string
}

const GalleryServicesWithFilter: FC<GalleryServicesWithFilterProps> = ({ className }) => {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    fetchServices().then(res => {
      setServices(res)
    })
  }, [])

  return (
    <div className='flex flex-col gap-5 mt-10' >
      <SortFilter />
      <GalleryServices services={services}/>
    </div>
  )
}

export default GalleryServicesWithFilter
