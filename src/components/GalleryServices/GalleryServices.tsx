import { Service } from '../../api/services/modelServices'
import CardService from '../CardService/CardService'

interface GalleryServicesProps {
  services: Service[]
}

const GalleryServices = ({ services }: GalleryServicesProps) => {
  console.log(services)
  return (
    <div className='flex gap-10'>
      {services.map((service, index) => <CardService service={service} key={index}/>)}
    </div>
  )
}

export default GalleryServices
