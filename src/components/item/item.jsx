import { Link } from 'react-router-dom';
import styles from './Item.module.css';

const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className={styles.cardItem}>
            <picture>
                <img src={img} alt={name} className={styles.itemImg}/>
            </picture>
            <section className={styles.cardInfo}>
                <h2 className={styles.itemTitle}>{name}</h2>
                <p className={styles.itemPrice}>${price}</p>
                <p className={styles.itemStock}>Stock: {stock} unidades</p>
            </section>
            <Link to={`/item/${id}`} className={styles.detailButton}>Ver detalle</Link>
        </article>
    );
};

export default Item;