import { Select, Text } from '@chakra-ui/react'
import { FC } from 'react'

interface SortFilterProps {
  onSortServices: (typeSort: string) => void
}
const SortFilter: FC<SortFilterProps> = ({ onSortServices }) => {
  return (
    <div className='flex items-center gap-3'>
      <Text>Ordenar por:</Text>
      <div className='w-[20%]'>
        <Select placeholder='Elegir'
          variant='flushed'
          color='#0E141B'
          _placeholder={{ color: 'inherit' }}
          focusBorderColor='#0E141B'
          onChange={(e) => onSortServices(e.target.value)}>
          <option value='nameService'>Nombre</option>
          <option value='rate'>Valoraciones</option>
          <option value='typeService'>Tipo de trabajo</option>
        </Select>
      </div>
    </div>
  )
}

export default SortFilter
