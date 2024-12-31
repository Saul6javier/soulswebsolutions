import React, { useState } from 'react';
import styles from './Carrusel.module.scss';

const images = [
  '../../../public/carrousel/proyectomarketing.webp',
  '../../../public/carrousel/medicalpage.webp',
  '../../../public/carrousel/proyectosinmoviliarios.png',
  '../../../public/carrousel/ventaproductos.png',
  '../../../public/carrousel/landingpagecursos.jpg',
  '../../../public/carrousel/restorantpage.webp',
  '../../../public/carrousel/shoppage.jpg',
  '../../../public/carrousel/goldshoppage.jpg',
];

export default function Carousel() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleImages = 4; // Número de imágenes visibles al mismo tiempo

  const goToPrevious = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? images.length - visibleImages : prevIndex - 1
    );
  };

  const goToNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + visibleImages >= images.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button onClick={goToPrevious} className={styles.carousel__arrow}>&lt;</button>
      <div className={styles.carousel__carouselContent}>
        {images.slice(startIndex, startIndex + visibleImages).map((image, index) => (
          <div key={index} className={styles.carousel__carouselContent__carouselItem}>
            <img src={image} alt={`Slide ${startIndex + index + 1}`} />
          </div>
        ))}
      </div>
      <button onClick={goToNext} className={styles.carousel__arrow}>&gt;</button>
    </div>
  );
}
