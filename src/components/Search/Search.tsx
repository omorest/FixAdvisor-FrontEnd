import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const Search = () => {
  return (
    <div className='w-[50%]'>
      <InputGroup size='md'>
        <InputLeftElement
          pointerEvents='none'
        >
          <SearchIcon color='#1f2937' />
        </InputLeftElement>
        <Input placeholder='Buscar un servicio' variant='flushed' color='#1f2937' _placeholder={{ color: 'inherit' }} focusBorderColor='#1f2937' borderColor='#171923'/>
      </InputGroup>
    </div>

  )
}

export default Search
