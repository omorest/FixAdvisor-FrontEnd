import GalleryServicesWithFilter from '../../components/GalleryWithFilter/GalleryServicesWithFilter'
import Search from '../../components/Search/Search'

const Home = () => {
  return (
    <div className="flex flex-col">
      <Search className='mt-10'/>
      <GalleryServicesWithFilter className='mt-10'/>
    </div>
  )
}

export default Home
