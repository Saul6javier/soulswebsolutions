import React from 'react';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div>
        <div className={styles.container}>
          <div className={styles.container__content}>    
            <h1>Transforma tu negocio con soluciones digitales a medida</h1>
            <h2>Conectamos tu negocio con el futuro digital</h2>
            <form>
              <input
                type="text"
                placeholder="Busca algún software que se asemeje a tu solicitud"
              />
              <button type="submit">BUSCAR</button>
            </form>
          </div>
        </div>
        <div className={styles.container_degrade}>
          <div className={styles.container__content}>    
          </div>
        </div>
    </div>
  );
}
