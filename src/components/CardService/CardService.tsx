import { FC } from 'react'
import { Badge, Box, Image } from '@chakra-ui/react'
import { Service } from '../../models'
import { Link } from 'react-router-dom'
import { colorTypeProvider, optionsTypeServices } from '../../utils/typeServiceUtils'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import Stars from '../Stars/Stars'

interface CardServiceProps {
  service: Service
  favouriteServices: string[]
  typeUser: null | 'Client' | 'Provider'
  onFavouriteService: (service: string) => void
}

const CardService: FC<CardServiceProps> = ({ service, favouriteServices, typeUser, onFavouriteService }) => {
  const typeService: string = optionsTypeServices[service.typeService]
  const isFavourite = favouriteServices?.includes(service.id)

  const handleClickFavourite = (event: any) => {
    onFavouriteService(service.id)
    event.preventDefault()
  }

  return (
    <Link to={`/details/${service.id}`}>

      <Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden' className='hover:shadow-xl' backgroundColor='white'>
        <Image boxSize='xs' objectFit='cover' src={service.urlsImagesService && (service.urlsImagesService[0] || 'https://latarta.com.co/wp-content/uploads/2018/06/default-placeholder.png')} alt={'image'} />
        <Box p='6'>
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
          </div>
        </Box>
      </Box>
    </Link>
  )
}

export default CardService
