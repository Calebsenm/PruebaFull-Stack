import React from 'react';
import styles from '@/app/home.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Bienvenido</h1>
        <p> ¿Listo para explorar? Puedes colocar tus datos en la sección del formulario y descubrir toda la información disponible en la sección información. </p>
      </div>
    </main>
  );
}
