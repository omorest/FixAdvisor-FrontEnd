import { FC } from 'react'
import { Input } from '@chakra-ui/react'

interface SearchProps {
  className?: string
}

const Search: FC<SearchProps> = ({ className }) => {
  return (
    <div className={className}>
      <Input placeholder='Search a provider' />
    </div>
  )
}

export default Search
