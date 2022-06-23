import { FC } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

interface CarouselImagesProps {
  images: string[]
}

const CarouselImages: FC<CarouselImagesProps> = ({ images }) => {
  return (

    <Carousel autoPlay infiniteLoop interval={4000} showThumbs={false} dynamicHeight={false} transitionTime={500} className='max-w-[900px]'>
      {
        images.map((image: string, index: number) =>
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
  )
}

export default CarouselImages
