
const urlLoginUsers = 'http://localhost:4000/api/users'

export const fetchUser = async (userId: any) => {
  const response = await fetch(`${urlLoginUsers}/${userId}`)
  const data = await response.json()
  return data
}
