import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from "../../../context/CartContext"
import styles from './cartWidget.module.css';

const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart" className={styles.cartWidget}>
      <FaShoppingCart size={24} />
      {totalQuantity > 0 && (
        <span className={styles.itemCount}>{totalQuantity}</span>
      )}
    </Link>
  );
};

export default CartWidget;  