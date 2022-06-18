import { Service } from '../models'

const urlNewService = 'http://localhost:4000/api/services/new-service'

export const fetchServices = async () => {
  const data = await fetch('http://localhost:4000/api/services')
  const services: Service[] = await data.json()
  return services
}

export const fetchService = async (id: string | undefined) => {
  const data = await fetch(`http://localhost:4000/api/services/${id}`)
  const services: Service = await data.json()
  return services
}

export function fetchPostNewService (data: Service) {
  fetch(urlNewService, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
}
