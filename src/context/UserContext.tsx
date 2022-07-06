import { createContext } from 'react'
import { Client, Provider } from '../models'

export type User = null | Client | Provider;

export type UserContextValue = {
  user: User;
  setUserContext: (user: User) => void;
};

export const UserContext = createContext<UserContextValue>({
  user: null,
  setUserContext: (user: User) => {}
})
