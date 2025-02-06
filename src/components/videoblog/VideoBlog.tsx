// VideoPlayer.js
import styles from './VideoBlog.module.scss';

export default function VideoBlog ({ videoSrc, videoTitle }:any) {
  return (
    <div className={styles.videoContainer}>
      <h2>{videoTitle}</h2>
      <video controls className={styles.video}>
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta el formato de video.
      </video>
    </div>
  );
};
