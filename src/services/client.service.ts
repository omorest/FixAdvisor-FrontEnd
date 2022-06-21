import { Client } from '../models'

const urlNewclient = 'http://localhost:4000/api/users/new-client'
const urlClients = 'http://localhost:4000/api/clients'

export const fetchPostNewClient = (data: Client) => {
  fetch(urlNewclient, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
}

export const fetchClient = async (clientId: string) => {
  const response = await fetch(`${urlClients}/${clientId}`)
  const data: Client = await response.json()
  return data
}
