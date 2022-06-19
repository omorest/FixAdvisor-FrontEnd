const urlfavourites = 'http://localhost:4000/api/favourites'

export const fetchFavourites = async (clientId: string) => {
  const response = await fetch(`${urlfavourites}/${clientId}`)
  const data = await response.json()
  return data
}
