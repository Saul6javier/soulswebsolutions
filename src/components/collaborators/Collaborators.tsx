import styles from './Collaborators.module.scss';

export default function Collaborators() {    
  const images = [
    '/colaborators/css.svg',
    '/colaborators/expressjs_dark.svg',
    '/colaborators/firebase-wordmark.svg',
    '/colaborators/html5.svg',
    '/colaborators/java.svg',
    '/colaborators/javascript.svg',
    '/colaborators/json.svg',
    '/colaborators/laravel.svg',
    '/colaborators/mongodb-wordmark.svg',
    '/colaborators/netlify.svg',
    '/colaborators/paypal-wordmark.svg',
    '/colaborators/php_dark.svg',
    '/colaborators/postgresql.svg',
    '/colaborators/python.svg',
    '/colaborators/bootstrap.svg',
    '/colaborators/react_wordmark_dark.svg',
    '/colaborators/sql-server.svg',
    '/colaborators/tailwindcss-wordmark-dark.svg',
    '/colaborators/typescript.svg',
    '/colaborators/vitejs.svg'
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        {duplicatedImages.map((image, index) => (
          <div key={index} className={styles.container__content__box}>
            <img src={image} alt="Collaborator" />
          </div>
        ))}
      </div>
    </div>
  );
}
