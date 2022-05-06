import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { fetchPostNewClient } from '../api/users/client'
import { auth } from './firebaseConfig'

interface UserAccount {
  id: string
  email: string
  name: string
  type: 'client' | 'provider'
}

export const createUser = (user: UserAccount, password: string) => {
  createUserWithEmailAndPassword(auth, user.email, password)
    .then((userCredential) => {
      const userFirebase = userCredential.user
      const dataUserClient: UserAccount = {
        id: userFirebase.uid,
        name: user.name,
        email: user.email,
        type: user.type
      }
      fetchPostNewClient(dataUserClient)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.error(errorCode, errorMessage)
    })
}

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

export const signOutUser = () => {
  signOut(auth).then(() => {
    console.log('Sign Out')
  }).catch((error) => {
    console.error(error)
  })
}
