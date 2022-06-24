import { Provider } from '../models'
import { URL_NEW_PROVIDER, URL_PROVIDERS } from './urls'

export function fetchPostNewProvider (data: Provider) {
  fetch(URL_NEW_PROVIDER, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
}

export const fetchProvider = async (providerId: string) => {
  const response = await fetch(`${URL_PROVIDERS}/${providerId}`)
  const data: Provider = await response.json()
  return data
}
