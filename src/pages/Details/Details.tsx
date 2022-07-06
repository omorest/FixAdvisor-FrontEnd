import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Provider, Service } from '../../models'
import { fetchProvider, fetchService } from '../../services'
import InfoProviderDetails from './components/InfoProviderDetails'
import InfoServiceDetails from './components/InfoServiceDetails'

const Details = () => {
  const { id } = useParams()
  const [provider, setProvider] = useState<Provider>()
  const [service, setService] = useState<Service>()

  useEffect(() => {
    const requestService = async () => {
      const serviceInfo = await fetchService(id)
      const providerInfo = await fetchProvider(serviceInfo.providerId)
      setService(serviceInfo)
      setProvider(providerInfo)
    }
    requestService()
  }, [id])

  return (
    <div className='flex justify-center gap-10 flex-wrap mt-10'>
      <InfoServiceDetails service={service!}/>
      <InfoProviderDetails provider={provider!}/>
    </div>
  )
}

export default Details
