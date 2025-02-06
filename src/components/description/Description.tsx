import React from 'react';
import styles from './Description.module.scss';

  export default function Description() {  
    return (
        <div>
            <div className={styles.container}>
              <div className={styles.container__content}>
              <div className={styles.container__content__boxleft}>
                <img src="/img/mundo.jpg" alt=""/>
              </div>
              <div className={styles.container__content__boxright}>
                <h1>¿Tienes una idea?</h1>
                <p>En souls web solutions te ayudamos en hacer realidad tus sueños</p>
                <button onClick={() => window.open("https://wa.me/526643945360?text=Hola,%20quiero%20más%20información", "_blank")}>
                    <img src="/icon/whatsapp.svg" alt="WhatsApp" />
                    <span>WhatsApp</span>
                </button>
              </div>
              </div>
            </div>
        </div>
      );
    }
