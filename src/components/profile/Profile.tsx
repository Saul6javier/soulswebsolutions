import React from 'react';
import styles from './Profile.module.scss';

export default function Profile() {
  return (
    <div>
        <div className={styles.container}>
          <div className={styles.container__content}>    
            <div className={styles.container__content__boxcenter}>  
                <h3>BIENVENIDOS</h3>
                <h1>SOUL'S WEB SOLUTIONS</h1>
                <p> somos un equipo apasionado por la tecnología y la innovación digital. Nos especializamos en ofrecer soluciones tecnológicas personalizadas 
                    para ayudar a nuestros clientes a alcanzar sus objetivos en el mundo digital. Nuestro enfoque se centra en entender tus necesidades y transformar 
                    tus ideas en realidad, combinando creatividad, funcionalidad y diseño.
                </p>
                <button
                  onClick={() =>
                    window.open(`https://wa.me/${6643945360}?text=${encodeURIComponent("Hola, podria brindarme mas informacion")}`, "_blank")
                  }
                >
                  WhatsApp
                </button>
            </div>
          </div>
        </div>
    </div>
  );
}
