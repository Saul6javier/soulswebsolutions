import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <header className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content__logo}>
          <img src={'../../../public/logo.jpg'} alt="" />
        </div>
        <nav className={styles.container__content__navbar}>
          <ul>
            <Link to="/">INICIO</Link>
            <li><Link to="/#proyectos">PROYECTOS</Link></li>
            <li><Link to="/#colaboradores">COLABORADORES</Link></li>
            {/*<Link to="/">VIDEOS</Link>*/}
            <Link to="/servicios">SERVICIOS</Link>
            
          </ul>
        </nav>
        <div className={styles.container__content__userOptions}>
        <Link to="/contacto">CONTACTANOS</Link>
        </div>
      </div>
    </header>
  );
};
