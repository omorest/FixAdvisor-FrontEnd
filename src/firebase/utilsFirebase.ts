import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { Client, Provider } from '../models'
import { fetchPostNewClient, fetchPostNewProvider } from '../services'
import { auth } from './firebaseConfig'

export const signInUser = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      console.log(user)
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
        email: user.email
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
        id: userFirebase.uid,
        name: user.name,
        company: user.company,
        email: user.email
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
