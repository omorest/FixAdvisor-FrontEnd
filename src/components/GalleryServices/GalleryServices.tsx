import { User } from '../../context/UserContext'
import { Service } from '../../models'
import CardService from '../CardService/CardService'

interface GalleryServicesProps {
  services: Service[]
  favouriteServices?: string[]
  user: User
  onFavouriteService?: (service: string) => void
  onDeleteService?: (services: Service[]) => void
}

const GalleryServices = ({ services, favouriteServices, user, onFavouriteService, onDeleteService }: GalleryServicesProps) => {
  return (
    <div className='flex gap-10 flex-wrap'>
      {services.map((service) => <CardService service={service} favouriteServices={favouriteServices || []} user={user} onFavouriteService={onFavouriteService!} onDeleteService={onDeleteService} key={service.id}/>)}
    </div>
  )
}

export default GalleryServices
