import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { FC, useState } from 'react'

interface SearchProps {
  onSearch: (value: string) => void
}

const Search: FC<SearchProps> = ({ onSearch }) => {
  const [inputSearch, setInputSearch] = useState<string>('')

  const handleSubmit = (e: any) => {
    onSearch(inputSearch)
    e.preventDefault()
  }

  const handleChange = (e: any) => {
    onSearch(e.target.value)
    setInputSearch(e.target.value)
  }
  return (
    <div className='w-[50%]'>
      <form onSubmit={handleSubmit}>
        <InputGroup size='md'>
          <InputLeftElement
            pointerEvents='none'
          >
            <SearchIcon color='#1f2937' />
          </InputLeftElement>
          <Input placeholder='Buscar un servicio' variant='flushed' color='#1f2937' _placeholder={{ color: 'inherit' }} focusBorderColor='#1f2937' borderColor='#171923' onChange={handleChange} />
        </InputGroup>
      </form>
    </div>

  )
}

export default Search
