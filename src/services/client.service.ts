import { Client } from '../models'
import { URL_CLIENTS, URL_NEW_CLIENT } from './urls'

export const fetchPostNewClient = (data: Client) => {
  fetch(URL_NEW_CLIENT, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
}

export const fetchClient = async (clientId: string) => {
  const response = await fetch(`${URL_CLIENTS}/${clientId}`)
  const data: Client = await response.json()
  return data
}
