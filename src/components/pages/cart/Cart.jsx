import { useCart } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem"; 
import styles from './cart.module.css'; 

const Cart = () => {
    const { cart, clearCart, totalPrice } = useCart();

    if (cart.length === 0) {
        return (
            <div className={styles.emptyCart}>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className={styles.linkHome}>Ver productos</Link>
            </div>
        )
    }

    return (
        <div className={styles.cartContainer}>
            <h1 className={styles.cartTitle}>Tu Carrito</h1>
            <div className={styles.cartItemsList}>
                {cart.map(prod => (
                    <CartItem key={prod.id} item={prod} />
                ))}
            </div>
            <div className={styles.cartSummary}>
                <h2>Total de la compra: ${totalPrice.toFixed(2)}</h2>
                <div className={styles.cartActions}>
                    <button onClick={() => clearCart()} className={styles.clearButton}>Vaciar Carrito</button>
                    <Link to='/checkout' className={styles.checkoutButton}>
                        Finalizar Compra
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;