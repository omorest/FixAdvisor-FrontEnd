import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { fetchPostNewClient } from '../api/users/client'
import { UserClient } from '../api/users/client/modelClient'
import { auth } from './firebaseConfig'

interface UserAccount {
  email: string
  password: string
  name: string
  type: 'client' | 'provider'
}

interface UserAuthSignIn {
  email: string
  password: string
}

export const createUser = (user: UserAccount) => {
  createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
    // Signed in
      // const userFirebase = userCredential.user
      const dataUserClient: UserClient = {
        name: user.name,
        email: user.email,
        type: user.type
      }
      fetchPostNewClient(dataUserClient)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    // ..
    })
}

export const signInUser = ({ email, password }: UserAuthSignIn) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user
      console.log(user)
    // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
}

export const signOutUser = () => {
  signOut(auth).then(() => {
  // Sign-out successful.
    console.log('Sign Out')
  }).catch((error) => {
  // An error happened.
    console.log(error)
  })
}
