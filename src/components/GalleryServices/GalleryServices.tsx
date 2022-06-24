import { Service } from '../../models'
import CardService from '../CardService/CardService'

interface GalleryServicesProps {
  services: Service[]
  favouriteServices?: string[]
  typeUser: null | 'Client' | 'Provider'
  onFavouriteService?: (service: string) => void
}

const GalleryServices = ({ services, favouriteServices, typeUser, onFavouriteService }: GalleryServicesProps) => {
  return (
    <div className='flex gap-10'>
      {services.map((service) => <CardService service={service} favouriteServices={favouriteServices || []} typeUser={typeUser} onFavouriteService={onFavouriteService!} key={service.id}/>)}
    </div>
  )
}

export default GalleryServices
