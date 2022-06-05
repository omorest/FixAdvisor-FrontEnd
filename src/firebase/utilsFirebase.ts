import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { User } from '../context/UserContext'
import { Client, Provider } from '../models'
import { fetchClient, fetchPostNewClient, fetchPostNewProvider, fetchProvider } from '../services'
import { auth } from './firebaseConfig'

export const signInUser = (email: string, password: string, typeUser: string, setUserContext: (user: User) => void) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      if (typeUser === 'Client') {
        fetchClient(user.uid).then((client) => setUserContext(client))
      } else if (typeUser === 'Provider') {
        fetchProvider(user.uid).then((provider) => setUserContext(provider))
      }
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.error(errorCode, errorMessage)
    })
}

export const createUserClient = (user: Client, password: string) => {
  createUserWithEmailAndPassword(auth, user.email, password)
    .then((userCredential) => {
      const userFirebase = userCredential.user
      const dataUserClient: Client = {
        id: userFirebase.uid,
        name: user.name,
        email: user.email,
        type: 'Client'
      }
      fetchPostNewClient(dataUserClient)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.error(errorCode, errorMessage)
    })
}

export const createUserProvider = (user: Provider, password: string) => {
  createUserWithEmailAndPassword(auth, user.email, password)
    .then((userCredential) => {
      const userFirebase = userCredential.user
      const dataUserClient: Provider = {
        ...user,
        id: userFirebase.uid,
        type: 'Provider'
      }
      fetchPostNewProvider(dataUserClient)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.error(errorCode, errorMessage)
    })
}

export const signOutUser = () => {
  signOut(auth).then(() => {
    console.log('Sign Out')
  }).catch((error) => {
    console.error(error)
  })
}
