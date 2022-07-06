import { FC } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useNavigate } from 'react-router-dom'

interface CarouselImagesProps {
  images?: string[]
  serviceId?: string
  autoPlay?: boolean
  infiniteLoop?: boolean
}

const CarouselImages: FC<CarouselImagesProps> = ({ images, serviceId, autoPlay = true, infiniteLoop = true }) => {
  const navigate = useNavigate()

  const handleClick = (e: any) => e.preventDefault()

  return (
    <div onClick={handleClick}>
      <Carousel
        autoPlay={autoPlay}
        infiniteLoop={infiniteLoop}
        interval={4000}
        showThumbs={false}
        dynamicHeight={false}
        transitionTime={500}
        className='max-w-[900px] w-[100%] '
        onClickItem={() => navigate(`/details/${serviceId}`)}>

        {
          images?.map((image: string, index: number) =>
            <div key={index} className='w-[100%] '>
              <img
                alt="perro"
                src={image}
                className='object-cover h-[400px] w-[500px] rounded-lg'
              />
            </div>
          )
        }
      </Carousel>
    </div>
  )
}

export default CarouselImages
