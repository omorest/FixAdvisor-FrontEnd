import './App.css'
import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import NewServicePage from './pages/NewServicePage/NewServicePage'
import { User, UserContext } from './context/UserContext'
import { useState } from 'react'

function App () {
  const [user, setUser] = useState<User>(null)

  const setUserContext = (user: User) => setUser(user)

  return (
    <Container maxW='85%'>
      <UserContext.Provider value={{ user, setUserContext }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/new-service' element={<NewServicePage />} />
        </Routes>
      </UserContext.Provider>
    </Container>
  )
}

export default App
