import React from 'react';
import styles from './Servicios.module.scss';

export default function Servicios() {
  const servicios = [
    {
      titulo: "Desarrollo de Páginas Web Personalizadas",
      descripcion: "Diseñamos y desarrollamos sitios web modernos, funcionales y adaptados a tus necesidades.",
      id: "paginasweb"
    },
    {
      titulo: "Desarrollo de Sistemas a Medida",
      descripcion: "Creamos soluciones tecnológicas únicas y adaptadas a las necesidades específicas de tu negocio o proyecto.",
      id: "sistemasamedida"
    },
    {
      titulo: "Desarrollo de Tiendas en Línea",
      descripcion: "Creamos plataformas de comercio electrónico modernas, seguras y escalables para impulsar tus ventas en línea.",
      id: "tiendasenlinea"
    },
    {
      titulo: "Marketing Digital",
      descripcion: "Potenciamos tu presencia en línea mediante estrategias personalizadas de marketing digital que maximizan tu alcance y resultados.",
      id: "marketingdigital"
    },
    {
        titulo: "SEO (Optimización para Motores de Búsqueda)",
        descripcion: "Mejora la posición de tu sitio web en los motores de búsqueda con estrategias de SEO que atraen tráfico orgánico y aumentan tu visibilidad en línea.",
        id: "seo"
    },
    {
        titulo: "Hosting y Dominios",
        descripcion: "Proporcionamos soluciones completas de hosting y registro de dominios para garantizar que tu sitio web esté siempre accesible, seguro y rápido.",
        id: "hostingdominios"
    },
    {
        titulo: "Soporte Técnico y Mantenimiento",
        descripcion: "Brindamos soporte técnico y mantenimiento continuo para asegurar que tu sitio web o aplicación esté siempre funcionando de manera óptima, con actualizaciones, corrección de errores y mejoras constantes.",
        id: "soporte"
    },
    {
        titulo: "Automatización de Procesos",
        descripcion: "Ofrezco soluciones de automatización que optimizan tareas repetitivas y procesos manuales, ayudando a las empresas a ahorrar tiempo, reducir errores y mejorar la productividad. Desde la automatización de flujos de trabajo hasta la integración de sistemas, hago que tus procesos funcionen de manera más eficiente.",
        id: "automatizacion"
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <h2 className={styles.title}>Servicios que Ofrecemos</h2>
        <div className={styles.serviciosList}>
          {servicios.map((servicio, index) => (
            <div key={index} id={servicio.id} className={styles.servicio}>
              <h3 className={styles.servicioTitulo}>{servicio.titulo}</h3>
              <p className={styles.servicioDescripcion}>{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
