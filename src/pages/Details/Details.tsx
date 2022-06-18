import { Badge, Box, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const colorTypeProvider: any = {
  plumbing: 'blue',
  carpentry: 'yellow',
  brickwork: 'brown'
}

type OptionServices = {
  plumbing: string
  carpentry: string
  brickwork: string
}
const optionsTypeServices: OptionServices = {
  plumbing: 'Fontanería',
  carpentry: 'Carpintería',
  brickwork: 'Albañilería'
}

const Details = () => {
  const { id } = useParams()
  // const typeService: string = optionsTypeServices[service.typeService]
  return (
    <div className='flex justify-center'>
      <div className='bg-white p-10 flex flex-col gap-10 min-w-[80%] rounded-lg shadow-xl'>
        <Text className='font-bold text-3xl'>
          Nombre servicio
        </Text>
        <div>
          <div>Estrellas</div>
          <div>{5} valoraciones</div>
        </div>
        <Box display='flex' alignItems='baseline'>
          etiquetas
          {/* <Badge borderRadius='full' px='2' colorScheme={colorTypeProvider[service.typeService]}>
            {typeService}
          </Badge> */}
        </Box>
        <div>
          <Text className='font-bold text-2xl'>
            Fotos
          </Text>
        </div>
        <div>
          <Text className='font-bold text-2xl'>
          Sobre el servicio
          </Text>
        </div>
        <div>
          <Text className='font-bold text-2xl'>
          Opiniones
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Details
