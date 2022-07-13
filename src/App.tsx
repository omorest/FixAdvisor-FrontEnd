import './App.css'
import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import NewServicePage from './pages/NewServicePage/NewServicePage'
import { User, UserContext } from './context/UserContext'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home'
import Details from './pages/Details/Details'
import Favourites from './pages/Favorurites/Favourites'
import Profile from './pages/Profile/Profile'
import EditService from './pages/EditService/EditService'

function App () {
  const [user, setUser] = useState<User>(null)

  useEffect(() => {
    const item = localStorage.getItem('user')
    if (item) {
      const user = JSON.parse(localStorage.getItem('user') ?? '')
      setUserContext(user)
    }
  }, [])

  const setUserContext = (user: User) => {
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  }

  return (
    <UserContext.Provider value={{ user, setUserContext }}>
      <Container maxW='100%' padding={0} backgroundColor='#f9fafb' >
        <Navbar />
        <div className='flex justify-center'>
          <div className='w-[80%]'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/new-service' element={<NewServicePage />} />
              <Route path='/favourites/' element={<Favourites />} />
              <Route path='/details/:id/' element={<Details />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/editService' element={<EditService />} />
            </Routes>
          </div>
        </div>
      </Container>
    </UserContext.Provider>
  )
}

export default App
