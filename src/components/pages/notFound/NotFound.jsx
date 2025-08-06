import { Link } from 'react-router-dom';
import styles from './notFound.module.css'; 

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h2 className={styles.errorCode}>404</h2>
      <p className={styles.title}>¡Oops! Página no encontrada</p>
      <p className={styles.message}>
        Parece que te has perdido en el universo de las figuras. La página que buscas no existe o ha sido movida a otra galaxia.
      </p>
      <Link to="/" className={styles.homeButton}>
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;