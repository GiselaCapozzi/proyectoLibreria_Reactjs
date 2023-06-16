import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import books from '../../data/imagenCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import style from './Carousel.module.css';

const CarouselImage = () => {

  const [libros, setLibros] = useState(books)

  return (
    <Carousel 
      autoPlay={true} 
      infiniteLoop={true} 
      showArrows={true}
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
    >
      {
        libros.map(libro => (
          <div key={libro.id}>
            <img src={libro.portada} alt={libro.id} className={`${style.imagen_carousel}`} />
          </div>
        ))

      }
    </Carousel>
  )
}

export default CarouselImage