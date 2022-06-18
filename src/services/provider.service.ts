import { Provider } from '../models'

const urlNewProvider = 'http://localhost:4000/api/providers/new-provider'
const urlProviders = 'http://localhost:4000/api/providers'

export function fetchPostNewProvider (data: Provider) {
  fetch(urlNewProvider, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
}

export const fetchProvider = async (providerId: string) => {
  const response = await fetch(`${urlProviders}/${providerId}`)
  const data: Provider = await response.json()
  return data
}
