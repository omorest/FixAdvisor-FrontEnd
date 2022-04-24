import GalleryServicesWithFilter from '../../components/GalleryWithFilter/GalleryServicesWithFilter'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'

const Home = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Search className='mt-10'/>
      <GalleryServicesWithFilter className='mt-10'/>
    </div>
  )
}

export default Home
