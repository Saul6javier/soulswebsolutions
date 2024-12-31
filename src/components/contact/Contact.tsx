import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.scss';

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null); // Define el tipo correcto para el formulario

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario.

    if (!form.current) {
      console.error("El formulario no está definido.");
      return;
    }

    emailjs
      .sendForm(
        'service_9jzst0d', // Reemplaza con tu Service ID
        'template_c5tspmm', // Reemplaza con tu Template ID
        form.current,
        'wiywe_BKVlqkYzw2U' // Reemplaza con tu Public Key
      )
      .then(
        (result) => {
          alert('Correo enviado exitosamente');
          console.log(result.text);
        },
        (error) => {
          alert('Hubo un error al enviar el correo');
          console.error(error.text);
        }
      );

    form.current.reset(); // Limpia el formulario después de enviarlo.
  };

  return (
    <div className={styles.container}>
      <img src={'../../../public/logo.jpg'} alt="" />
      <div className={styles.container__content}>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Nombre completo" required />
          <input type="email" name="email" placeholder="Correo Electrónico" required />
          <input type="text" name="phone" placeholder="Teléfono" />
          <textarea
            name="message"
            className={styles.customTextarea}
            placeholder="Descripción de la solicitud"
            required
          ></textarea>
          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </div>
  );
}
