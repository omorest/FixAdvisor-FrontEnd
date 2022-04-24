import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'

function App () {
  return (
    <Container maxW='85%'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Container>
  )
}

export default App
