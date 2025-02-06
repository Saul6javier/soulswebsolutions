import React from 'react';
import styles from './Cards.module.scss';

const cardsData = [
  {
    id: 1,
    image: '/carrousel/car-wash.jpg',
    title: 'AutoShine',
    description: 'Aplicacion web para autolavado',
  },
  {
    id: 2,
    image: '/carrousel/hospitalapp.png',
    title: 'MediTech',
    description: 'Aplicacion web para hospital',
  },
  {
    id: 3,
    image: '/carrousel/clothingstoreapp.webp',
    title: 'ExpressBuy',
    description: 'Tienda en linea, Ecommerce',
  },
  {
    id: 4,
    image: '/carrousel/food.jpg',
    title: 'ElFestín',
    description: 'Pagina promocional de restaurante',
  },
]; 

  export default function Cards() {  
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        {cardsData.map((card) => (
          <div key={card.id} className={styles.container__content__box}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button>
              <img src="/icon/descarga-de-archivos.svg" alt="Descargar" />
              <span>Descargar Documento</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
