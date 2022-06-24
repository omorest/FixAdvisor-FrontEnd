import { URL_USERS } from './urls'

export const fetchUser = async (userId: any) => {
  const response = await fetch(`${URL_USERS}/${userId}`)
  const data = await response.json()
  return data
}
