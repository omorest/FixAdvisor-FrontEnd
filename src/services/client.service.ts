import { Client } from '../models'

const urlNewclient = 'http://localhost:4000/api/users/new-client'

export function fetchPostNewClient (data: Client) {
  fetch(urlNewclient, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
}
