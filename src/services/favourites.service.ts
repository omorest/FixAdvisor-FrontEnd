
const urlfavourites = 'http://localhost:4000/api/favourites'

type fetchPostFavouriteServiceResponse = {
  favouriteServices: string[]
}

export const fetchFavourites = async (clientId: string) => {
  const response = await fetch(`${urlfavourites}/${clientId}`)
  const data = await response.json()
  return data
}

export const fetchPostFavouriteService = async (clientId: string, serviceId: string): Promise<fetchPostFavouriteServiceResponse> => {
  return fetch(`${urlfavourites}/${clientId}-${serviceId}`, {
    method: 'POST'
  })
    .then(response => response.json())
    .then(json => json)
    .catch(err => console.log(err))
}
