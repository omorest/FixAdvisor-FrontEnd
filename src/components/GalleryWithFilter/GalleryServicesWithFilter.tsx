import { FC } from 'react'
import GalleryServices from '../GalleryServices/GalleryServices'
import { Service } from '../../models'
import SortFilter from '../SortFilter/SortFilter'

interface GalleryServicesWithFilterProps {
  services: Service[]
}

const GalleryServicesWithFilter: FC<GalleryServicesWithFilterProps> = ({ services }) => {
  return (
    <div className='flex flex-col gap-5 mt-10' >
      <SortFilter />
      <GalleryServices services={services}/>
    </div>
  )
}

export default GalleryServicesWithFilter
