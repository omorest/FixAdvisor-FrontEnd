import { Input } from '@chakra-ui/react'
import { FC } from 'react'

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
