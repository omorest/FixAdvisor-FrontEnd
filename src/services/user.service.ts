
const urlProviders = 'http://localhost:4000/api/users'

export const fetchUser = async (user: any) => {
  const response = await fetch(`${urlProviders}/${user.uid}`)
  const data = await response.json()
  return data
}
