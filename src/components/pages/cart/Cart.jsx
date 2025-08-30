import { useState, useEffect } from "react";
import { useCart } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import ItemList from "../../common/itemList/ItemList";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConfig";
import styles from "./cart.module.css";

const Cart = () => {
  const { cart, clearCart, totalPrice } = useCart();
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    setLoading(true);
    const fetchRecommended = async () => {
        const productsRef = collection(db, 'products');
        
        try {
           
            if (cart.length > 0) {
                const cartIds = cart.map(item => item.id);
                const firstItemCategory = cart[0].category;

                
                let q = query(productsRef, where('category', '==', firstItemCategory), limit(8));
                let response = await getDocs(q);
                let productsAdapted = response.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                let filteredRecommended = productsAdapted.filter(prod => !cartIds.includes(prod.id));

                
                if (filteredRecommended.length > 0) {
                    setRecommended(filteredRecommended.slice(0, 4));
                } else {
                    console.log("No se encontraron relacionados, buscando aleatorios...");
                    q = query(productsRef, limit(8));
                    response = await getDocs(q);
                    productsAdapted = response.docs.map(doc => ({ ...doc.data(), id: doc.id }));

                    
                    const shuffled = productsAdapted.sort(() => 0.5 - Math.random());
                    setRecommended(shuffled.slice(0, 4));
                }
            } else {
                
                const q = query(productsRef, limit(8));
                const response = await getDocs(q);
                const productsAdapted = response.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                const shuffled = productsAdapted.sort(() => 0.5 - Math.random());
                setRecommended(shuffled.slice(0, 4));
            }
        } catch (error) {
            console.error("Error fetching recommended products:", error);
        } finally {
            setLoading(false);
        }
    };

    fetchRecommended();
}, [cart]);
  const renderRecommendations = () => (
    <div className={styles.recommendations}>
      <h2>
        {cart.length > 0
          ? "Agrega estos productos a tu compra"
          : "Te recomendamos ver estos productos"}
      </h2>
      {loading ? (
        <p>Cargando recomendaciones...</p>
      ) : recommended.length > 0 ? (
        <ItemList products={recommended} />
      ) : (
        <p>No hay productos para recomendar en este momento.</p>
      )}
    </div>
  );

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h1>No hay items en el carrito</h1>
        <Link to="/" className={styles.linkHome}>
          Ver productos
        </Link>
        {renderRecommendations()}
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Tu Carrito</h1>
      <div className={styles.cartItemsList}>
        {cart.map((prod) => (
          <CartItem key={prod.id} item={prod} />
        ))}
      </div>
      <div className={styles.cartSummary}>
        <h2>Total de la compra: ${totalPrice.toFixed(2)}</h2>
        <div className={styles.cartActions}>
          <button onClick={() => clearCart()} className={styles.clearButton}>
            Vaciar Carrito
          </button>
          <Link to="/checkout" className={styles.checkoutButton}>
            Finalizar Compra
          </Link>
        </div>
      </div>
      {renderRecommendations()}
    </div>
  );
};

export default Cart;
