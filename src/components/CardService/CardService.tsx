import { FC } from 'react'
import { Badge, Box } from '@chakra-ui/react'
import { Service } from '../../models'
import { Link } from 'react-router-dom'
import { colorTypeProvider, optionsTypeServices } from '../../utils/typeServiceUtils'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { GoTrashcan } from 'react-icons/go'
import { GrEdit } from 'react-icons/gr'
import Stars from '../Stars/Stars'
import CarouselImages from '../CarouselImages/CarouselImages'
import { fetchDeleteService } from '../../services'

const DEFAULT_IMAGE = 'https://latarta.com.co/wp-content/uploads/2018/06/default-placeholder.png'

interface CardServiceProps {
  service: Service
  favouriteServices: string[]
  typeUser: null | 'Client' | 'Provider'
  onFavouriteService: (service: string) => void
  onDeleteService?: (services: Service[]) => void
}

const CardService: FC<CardServiceProps> = ({ service, favouriteServices, typeUser, onFavouriteService, onDeleteService }) => {
  const typeService: string = optionsTypeServices[service.typeService]
  const isFavourite = favouriteServices?.includes(service.id)

  const handleClickFavourite = (event: any) => {
    onFavouriteService(service.id)
    event.preventDefault()
  }

  const imagesServices = service?.urlsImagesService && service?.urlsImagesService?.length > 0 ? service?.urlsImagesService : [DEFAULT_IMAGE]
  const handleUpdate = (e: any) => {
    console.log('prueba')
    e.stopPropagation()
  }

  const handleDelete = async (e: any) => {
    const wantDelete = confirm('¿Quieres eliminar el servicio?')
    e.preventDefault()
    if (wantDelete) {
      const services = await fetchDeleteService(service)
      onDeleteService?.(services)
    }
  }

  return (
    <Link to={`/details/${service.id}`}>

      <Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden' className='hover:shadow-xl' backgroundColor='white' height={'100%'}>
        <Box p=''>
          <CarouselImages images={imagesServices} serviceId={service.id} autoPlay={false} infiniteLoop={false}/>
        </Box>
        <Box p='6' height={'30%'}>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme={colorTypeProvider[service.typeService]}>
              {typeService}
            </Badge>
          </Box>

          <Box
            mt='1'
            fontWeight='semibold'
            as='h3'
            lineHeight='tight'
            fontSize='xl'
          >
            {service.nameService}
          </Box>
          <Box
            mt='1'
            fontWeight=''
            as='h4'
            lineHeight='tight'
            fontSize='l'
            className='whitespace-nowrap overflow-hidden text-ellipsis'
          >
            {service.description}
          </Box>

          <div className='flex justify-between items-center mt-5'>
            <div className='w-[100%] text-s font-medium'>
              <Stars rate={service?.rate ?? 0} inLine={false} starDimension='20px' totalReviews={service?.totalReviews ?? 0}/>
            </div>
            { typeUser === 'Client'
              ? <div className='text-3xl'>
                {
                  isFavourite
                    ? <AiFillHeart onClick={handleClickFavourite} className='text-[#ff595e]'/>
                    : <AiOutlineHeart onClick={handleClickFavourite}/>
                }
              </div>
              : null
            }
            { typeUser === 'Provider'
              ? <div className='flex gap-3 text-xl'>
                <Link to='/editService' state={service.id} onClick={handleUpdate}>
                  <GrEdit />
                </Link>
                <GoTrashcan onClick={handleDelete}/>
              </div>
              : null
            }
          </div>
        </Box>
      </Box>
    </Link>
  )
}

export default CardService
