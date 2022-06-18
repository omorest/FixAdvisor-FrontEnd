import { FC } from 'react'
import { Badge, Box, Image } from '@chakra-ui/react'
import { Service } from '../../models'
import { Link } from 'react-router-dom'
import { colorTypeProvider, optionsTypeServices } from '../../utils/typeServiceUtils'

interface CardServiceProps {
  service: Service
}

const CardService: FC<CardServiceProps> = ({ service }) => {
  const typeService: string = optionsTypeServices[service.typeService]

  return (
    <Link to={`/details/${service.id}`}>

      <Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden' className='hover:shadow-xl'>
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
          >
            {service.description}
          </Box>

          <Box as='span' color='gray.600' fontSize='xs'>
          Rate: {service.rate}
          </Box>
        </Box>
      </Box>
    </Link>
  )
}

export default CardService
