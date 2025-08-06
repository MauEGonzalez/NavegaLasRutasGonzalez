import { useCart } from '../../../context/CartContext';
import styles from './cartItem.module.css';

const CartItem = ({ item }) => {
  const { removeItem, updateItemQuantity } = useCart();

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateItemQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrement = () => {
    updateItemQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className={styles.cartItem}>
      <img src={item.img} alt={item.name} className={styles.itemImg} />
      <div className={styles.itemDetails}>
        <h3>{item.name}</h3>
        <p>Precio: ${item.price.toFixed(2)}</p>
      </div>
      <div className={styles.itemControls}>
        <div className={styles.quantityControl}>
          <button onClick={handleDecrement}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <p className={styles.subtotal}>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
        <button onClick={() => removeItem(item.id)} className={styles.removeButton}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;