import { URL_FAVOURITES } from './urls'

type fetchPostFavouriteServiceResponse = {
  favouriteServices: string[]
}

export const fetchFavourites = async (clientId: string) => {
  const response = await fetch(`${URL_FAVOURITES}/${clientId}`)
  const data = await response.json()
  return data
}

export const fetchPostFavouriteService = async (clientId: string, serviceId: string): Promise<fetchPostFavouriteServiceResponse> => {
  return fetch(`${URL_FAVOURITES}/${clientId}-${serviceId}`, {
    method: 'POST'
  })
    .then(response => response.json())
    .then(json => json)
    .catch(err => console.log(err))
}
