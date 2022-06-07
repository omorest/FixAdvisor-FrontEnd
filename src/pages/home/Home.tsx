import GalleryServicesWithFilter from '../../components/GalleryWithFilter/GalleryServicesWithFilter'
import Search from '../../components/Search/Search'

const Home = () => {
  return (
    <div className="flex flex-col gap-[10px] mt-10">
      <div className='flex justify-center'>
        <Search />
      </div>
      <GalleryServicesWithFilter className='mt-10'/>
    </div>
  )
}

export default Home
