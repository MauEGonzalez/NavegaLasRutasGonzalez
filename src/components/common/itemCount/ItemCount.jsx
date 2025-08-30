
import { useState } from 'react';
import styles from './itemCount.module.css';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.counter}>
      <div className={styles.controls}>
        <button className={styles.button} onClick={decrement}>-</button>
        <h4 className={styles.number}>{quantity}</h4>
        <button className={styles.button} onClick={increment}>+</button>
      </div>
      <div>
        <button 
          className={styles.buttonAdd} 
          onClick={() => onAdd(quantity)} 
          disabled={stock === 0}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;