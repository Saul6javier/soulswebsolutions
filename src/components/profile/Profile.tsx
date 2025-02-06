import styles from './Profile.module.scss';

export default function Profile() {
  return (
    <div>
        <div className={styles.container}>
          <div className={styles.container__content}>
          <div className={styles.container__content__boxleft}>
            <h1>Souls web solutions</h1>
            <p>Innovamos, creamos, transformamos: tu visión, nuestro código</p>
              <button onClick={() => window.open("https://wa.me/526643945360?text=Hola,%20quiero%20más%20información", "_blank")}>
                <img src="/icon/whatsapp.svg" alt="WhatsApp" />
                <span>WhatsApp</span>
              </button>
          </div>
          <div className={styles.container__content__boxright}>
            <img src="/img/laptop.jpg" alt=""/>
          </div>
          </div>
        </div>
    </div>
  );
}
