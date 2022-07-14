import { Service } from '../models'
import { URL_DELETE_SERVICE, URL_NEW_SERVICE, URL_SEARCH_SERVICE, URL_SERVICES, URL_SERVICES_PROVIDER, URL_UPDATE_SERVICE } from './urls'

export const fetchServices = async () => {
  const data = await fetch(URL_SERVICES)
  const services: Service[] = await data.json() as Service[]
  return services
}

export const fetchService = async (id: string | undefined) => {
  const data = await fetch(`${URL_SERVICES}/${id}`)
  const services: Service = await data.json()
  return services
}

export const fetchServicesProvider = async (providerId: string | undefined) => {
  const data = await fetch(`${URL_SERVICES_PROVIDER}/${providerId}`)
  const services: Service[] = await data.json()
  return services
}

export const fetchPostNewService = (data: Service) => {
  return fetch(URL_NEW_SERVICE, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
}

export const fetchSearchService = async (input: string) => {
  const data = await fetch(`${URL_SEARCH_SERVICE}/${input}`)
  const services: Service[] = await data.json()
  return services
}

export const fetchDeleteService = async (service: Service) => {
  return fetch(URL_DELETE_SERVICE, {
    method: 'DELETE',
    body: JSON.stringify(service),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  }).then(response => response.json())
    .then(json => json)
    .catch(err => console.log(err))
}

export const fetchUpdateService = async (service: Service) => {
  return fetch(URL_UPDATE_SERVICE, {
    method: 'PUT',
    body: JSON.stringify(service),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  }).then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
}
