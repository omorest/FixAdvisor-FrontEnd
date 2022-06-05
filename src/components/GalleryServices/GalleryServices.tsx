import { Service } from '../../models'
import CardService from '../CardService/CardService'

interface GalleryServicesProps {
  services: Service[]
}

const GalleryServices = ({ services }: GalleryServicesProps) => {
  return (
    <div className='flex gap-10'>
      {services.map((service, index) => <CardService service={service} key={index}/>)}
    </div>
  )
}

export default GalleryServices
