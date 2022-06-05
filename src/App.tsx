import './App.css'
import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import NewServicePage from './pages/NewServicePage/NewServicePage'

function App () {
  return (
    <Container maxW='85%'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/new-service' element={<NewServicePage />} />
      </Routes>
    </Container>
  )
}

export default App
