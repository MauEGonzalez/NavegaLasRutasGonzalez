// src/components/pages/checkout/Checkout.jsx

import { useState } from 'react';
import { useCart } from '../../../context/CartContext';
import CheckoutForm from './CheckoutForm';
import styles from './Checkout.module.css';

// Importamos 'doc' para poder crear una referencia de orden
import { collection, getDocs, query, where, documentId, writeBatch, doc } from 'firebase/firestore';
import { db } from '../../../services/firebase/firebaseConfig';
import { Timestamp } from 'firebase/firestore';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, totalPrice, clearCart } = useCart();

    const handleCreateOrder = async (userData) => {
        console.log("Contenido del carrito al iniciar checkout:", cart);
    const ids = cart.map(prod => prod.id);
    console.log("IDs que se están enviando a Firestore:", ids);
    setLoading(true);

    try {
        const batch = writeBatch(db);
        const outOfStock = [];
        const ids = cart.map(prod => prod.id);
        const productsRef = collection(db, 'products');

        const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
        const { docs } = productsAddedFromFirestore;

        console.log("--- Verificando Stock ---");
        docs.forEach(document => {
            const dataDoc = document.data();
            const stockDb = dataDoc.stock;
            const productAddedToCart = cart.find(prod => prod.id === document.id);
            const prodQuantity = productAddedToCart?.quantity;

            // --- CONSOLE LOGS PARA DEPURAR ---
            console.log(`Producto: ${dataDoc.name}`);
            console.log(`Stock en DB: ${stockDb} (tipo: ${typeof stockDb})`);
            console.log(`Cantidad en Carrito: ${prodQuantity} (tipo: ${typeof prodQuantity})`);
            
            if (stockDb >= prodQuantity) {
                const newStock = stockDb - prodQuantity;
                console.log(`   -> OK. Nuevo stock será: ${newStock}`);
                batch.update(document.ref, { stock: newStock });
            } else {
                console.log(`   -> ¡ERROR! No hay stock suficiente.`);
                outOfStock.push({ id: document.id, ...dataDoc });
            }
        });
        console.log("--------------------------");

        if (outOfStock.length === 0) {
            // ... (el resto de la función se mantiene igual) ...
            const orderRef = doc(collection(db, 'orders'));
            const order = { buyer: userData, items: cart, total: totalPrice, date: Timestamp.fromDate(new Date()) };
            batch.set(orderRef, order);
            await batch.commit();
            clearCart();
            setOrderId(orderRef.id);
        } else {
            console.error('Hay productos que están fuera de stock:', outOfStock);
            alert(`Lo sentimos, los siguientes productos no tienen stock suficiente: ${outOfStock.map(p => p.name).join(', ')}`);
        }
    } catch (error) {
        console.error("Error al crear la orden: ", error);
        alert("Hubo un error al procesar su orden. Por favor, intente de nuevo.");
    } finally {
        setLoading(false);
    }
};

    if (loading) {
        return <h1 className={styles.infoText}>Se está generando su orden, por favor espere...</h1>;
    }

    if (orderId) {
        return <h1 className={styles.infoText}>¡Gracias por su compra! El ID de su orden es: <strong>{orderId}</strong></h1>;
    }
    
    if (cart.length === 0) {
        return <h1 className={styles.infoText}>No hay productos en el carrito para comprar.</h1>
    }

    return (
        <div className={styles.checkoutContainer}>
            <h1>Checkout</h1>
            <p>Complete el formulario para finalizar su compra.</p>
            <CheckoutForm onCreateOrder={handleCreateOrder} />
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
    );
};

export default Checkout;