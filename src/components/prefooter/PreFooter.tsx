import React from 'react';
import styles from './PreFooter.module.scss';
import { Link } from 'react-router-dom';
 
export default function PreFooter() {
  return (
    <section className={styles.container}>
      <div className={styles.container__content}>

        <div className={styles.container__content__preFooterSection}>
          <h3>Servicios</h3>
          <ul>
            <li><Link to="/servicios#paginasweb">Desarrollo de Páginas Web Personalizadas</Link></li>
            <li><Link to="/servicios#sistemasamedida">Desarrollo de Sistemas a Medida</Link></li>
            <li><Link to="/servicios#tiendasenlinea">Desarrollo de Tiendas en Línea</Link></li>
            <li><Link to="/servicios#marketingdigital">Marketing Digital</Link></li>
            <li><Link to="/servicios#seo">SEO (Optimización para Motores de Búsqueda)</Link></li>
            <li><Link to="/servicios#hostingdominios">Hosting y Dominios</Link></li>
            <li><Link to="/servicios#soporte">Soporte Técnico y Mantenimiento</Link></li>
            <li><Link to="/servicios#automatizacion">Automatización de Procesos</Link></li>
          </ul>
        </div>

        <div className={styles.container__content__preFooterSection}>
          <h3>Información</h3>
          <ul>
            <li><a href="#">Precios</a></li>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">Vender contenido</a></li>
            <li><a href="#">Manual de marca</a></li>
            <li><a href="#">Tendencias de búsqueda</a></li>
          </ul>
        </div>

        <div className={styles.container__content__preFooterSection}>
          <div>
            <h3>Terminos</h3>
            <ul>
              <li><a href="#">Terminos de uso</a></li>
              <li><a href="#">Acuerdos de licencias</a></li>
              <li><a href="#">Politicas de privacidad</a></li>
              <li><a href="#">Información de copyright</a></li>
            </ul>
          </div>
          <div>
            <h3>Soporte</h3>
            <ul>
              <li><a href="#">Preguntas</a></li>
              <Link to="/contacto">contactanos</Link>
            </ul>
          </div>
        </div>

        <div className={styles.container__content__preFooterSection}>
          <h3>Redes Sociales</h3>
          <ul>
            <li><a href="https://www.facebook.com/profile.php?id=61571089566319"><img src={'../../../public/icon/facebook.svg'} alt="" /></a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};