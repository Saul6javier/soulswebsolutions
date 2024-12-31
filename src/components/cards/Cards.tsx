import React from 'react';
import styles from './Cards.module.scss';

const cardsData = [
  {
    id: 1,
    image: '../../../public/carrousel/car-wash.jpg',
    title: 'CARWASH APP',
    description: 'SISTEMA DE MARKETING Y ADMINISTRADOR DE CITAS PARA CARWAHS',
  },
  {
    id: 2,
    image: '../../../public/carrousel/hospitalapp.png',
    title: 'DOCTOR APP',
    description: 'SISTEMA PARA HOSPITAL O MEDICOS, ADMINISTRADOR DE CITAS Y SERVICIOS',
  },
  {
    id: 3,
    image: '../../../public/carrousel/clothingstoreapp.webp',
    title: 'STORE APP',
    description: 'SISTEMA DE VENTAS EN LINEA, ADMINISTRACION DE INVEMTARIO Y PEDIDOS, INTEGRACION DE SISTEMA DE PAGOS',
  },
  {
    id: 4,
    image: '../../../public/carrousel/food.jpg',
    title: 'RESTAURANT APP',
    description: 'SISTEMA PARA RESTAURANTE, ADMINISTRACION DE RESERVACIONES Y PUBLICIDAD DE RESTAURANTES',
  },
];

const Cards: React.FC = () => {
  return (
    <section className={styles.cardsContainer}>
    <h2>Proyectos</h2>
      <div className={styles.cardsContainer__cardsGrid}>
        {cardsData.map((card) => (
          <div key={card.id} className={styles.cardsContainer__cardsGrid__card}>
            <img className={styles.cardsContainer__cardsGrid__card__cardImage} src={card.image} alt={card.title} />
            <h3 className={styles.cardsContainer__cardsGrid__card__cardTitle}>{card.title}</h3>
            <p className={styles.cardsContainer__cardsGrid__card__cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
