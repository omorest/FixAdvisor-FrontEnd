import { Select, Text } from '@chakra-ui/react'

const SortFilter = () => {
  return (
    <div className='flex items-center gap-3'>
      <Text>Ordenar por:</Text>
      <div className='w-[20%]'>
        <Select placeholder=''
          variant='flushed'
          color='#0E141B'
          _placeholder={{ color: 'inherit' }}
          focusBorderColor='#0E141B'
          onChange={(e) => console.log(e.target.value)}>
          <option value='name'>Nombre</option>
          <option value='rate'>Valoraciones</option>
          <option value='type'>Tipo de trabajo</option>
        </Select>
      </div>
    </div>
  )
}

export default SortFilter
