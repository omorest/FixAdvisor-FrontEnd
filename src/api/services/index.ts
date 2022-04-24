import { Service } from './modelServices'

export const fetchServices = async () => {
  const data = await fetch('http://localhost:4000/api/services')
  const services: Service[] = await data.json()
  return services
}
