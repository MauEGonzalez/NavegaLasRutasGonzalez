import ItemCount from '../../components/common/itemCount/ItemCount';
import styles from "./itemDetail.module.css";

const ItemDetail = ({ name, img, category, description, price, stock, onAdd }) => {

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
            
            <ItemCount stock={stock} onAdd={onAdd} />
          ) : (
            <p>¡No hay stock disponible!</p>
          )
        }
      </footer>
    </article>
  );
};

export default ItemDetail;