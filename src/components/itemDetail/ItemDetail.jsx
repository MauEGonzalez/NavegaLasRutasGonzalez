// src/components/pages/itemDetailContainer/ItemDetail.jsx

import ItemCount from "../common/itemCount/ItemCount"
import { Link } from 'react-router-dom'; // Importamos Link
import styles from './ItemDetail.module.css';

// 1. Recibimos la nueva prop 'isItemInCart'
const ItemDetail = ({ name, img, category, description, price, stock, onAdd, isItemInCart }) => {

  return (
    <article className={styles.itemDetail}>
      <header>
        <h2>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className={styles.itemImg} />
      </picture>
      <section className={styles.info}>
        <p><strong>Categoría:</strong> {category}</p>
        <p><strong>Descripción:</strong> {description}</p>
        <p className={styles.price}><strong>Precio:</strong> ${price}</p>
      </section>
      <footer className={styles.footer}>
        {
          stock > 0 ? (
            // 2. Usamos un ternario para decidir qué renderizar
            isItemInCart ? (
              <div className={styles.navigationButtons}>
                <Link to="/cart" className={styles.navButton}>Terminar Compra</Link>
                <Link to="/" className={styles.navButton}>Seguir Comprando</Link>
              </div>
            ) : (
              <ItemCount stock={stock} onAdd={onAdd} />
            )
          ) : (
            <p>¡No hay stock disponible!</p>
          )
        }
      </footer>
    </article>
  );
};

export default ItemDetail;