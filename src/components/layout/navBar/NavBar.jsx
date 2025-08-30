import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../../common/cartWidget/CartWidget'; 
import styles from "./navBar.module.css"

const NavBar = () => {
  return (
    <nav className={styles.navBar}>

      <Link to='/' className={styles.brand}>
        <h3>FiguStore</h3>
      </Link>

      <div className={styles.categories}>
        <NavLink to='/category/Anime' className={({ isActive }) => isActive ? styles.activeLink : ''}>
          Anime
        </NavLink>
        <NavLink to='/category/Marvel' className={({ isActive }) => isActive ? styles.activeLink : ''}>
          Marvel
        </NavLink>
        <NavLink to='/category/DC Comics' className={({ isActive }) => isActive ? styles.activeLink : ''}>
          DC Comics
        </NavLink>
      </div>

      <CartWidget />
    </nav>
  );
};

export default NavBar;