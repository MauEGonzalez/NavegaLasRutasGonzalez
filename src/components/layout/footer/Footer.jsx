// src/components/layout/footer/Footer.jsx
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.links}>
          <h4>Navegación</h4>
          <Link to="/about-us">Quiénes Somos</Link>
          <Link to="/contact">Contáctanos</Link>
          {/* Puedes agregar más links aquí */}
        </div>
        <div className={styles.social}>
          <h4>Síguenos</h4>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
        <div className={styles.legal}>
          <p>&copy; 2025 FiguStore. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;