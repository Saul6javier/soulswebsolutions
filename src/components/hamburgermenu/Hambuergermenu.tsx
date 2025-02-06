import { useState } from "react";
import styles from './Hamburgermenu.module.scss';
import { Link } from 'react-router-dom';

export default function HamburgerMenu ()  {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <button 
        className={`${styles.hamburger} ${isOpen ? styles.open : styles.close}`} 
        onClick={toggleMenu}
      >
        <img
            src={isOpen ? '/icon/cruz.svg' : '/icon/menu-hamburguesa.svg'}
            alt="menu"
        />
      </button>
      <nav className={`${styles.menu} ${isOpen ? styles.show : ""}`}>
        <ul>
            
            <li onClick={toggleMenu}><Link to="/">INICIO</Link></li>
            <li onClick={toggleMenu}><Link to="/#proyectos">PROYECTOS</Link></li>
            <li onClick={toggleMenu}><Link to="/#colaboradores">COLABORADORES</Link></li>
            {/*<Link to="/">VIDEOS</Link>*/}
            <li onClick={toggleMenu}><Link to="/servicios">SERVICIOS</Link></li>
            <li onClick={toggleMenu}><Link to="/contacto">CONTACTANOS</Link></li>
        </ul>
      </nav>
    </div>
  );
};

