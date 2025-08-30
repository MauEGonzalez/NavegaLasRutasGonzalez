// src/components/pages/aboutUs/AboutUs.jsx
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.header}>
        <h1>Nuestra Pasión, Tu Colección</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          [Image of a modern storefront for collectibles]
        </div>
        <div className={styles.textContainer}>
          <h2>La Historia de FiguStore</h2>
          <p>
            FiguStore nació de una pasión compartida por el increíble mundo de las figuras de colección. Lo que comenzó como un pequeño hobby entre amigos, rápidamente se convirtió en una misión: crear un espacio donde coleccionistas, tanto nuevos como veteranos, pudieran encontrar esas piezas únicas que le dan vida a sus estanterías.
          </p>
          <p>
            Creemos que cada figura cuenta una historia y representa un pedazo de los universos que tanto amamos. Por eso, seleccionamos cuidadosamente cada producto, asegurando su autenticidad y calidad. Nuestro objetivo es ser más que una tienda; queremos ser una comunidad para todos los que comparten este entusiasmo.
          </p>
          <p>
            Gracias por ser parte de nuestra historia. ¡Feliz coleccionismo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;