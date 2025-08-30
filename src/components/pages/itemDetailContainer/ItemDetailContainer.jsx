// src/components/pages/itemDetailContainer/ItemDetailContainer.jsx

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "../../itemDetail/ItemDetail"
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../../services/firebase/firebaseConfig';
import { useCart } from '../../../context/CartContext';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    // 1. Traemos addItem Y TAMBIÉN isInCart del contexto
    const { addItem, isInCart } = useCart();

    useEffect(() => {
        setLoading(true);
        const docRef = doc(db, 'products', itemId);
        getDoc(docRef)
            .then(response => {
                if (response.exists()) {
                    const data = response.data();
                    const productAdapted = { ...data, id: response.id };
                    setProduct(productAdapted);
                } else {
                    console.log('No such document!');
                }
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    const handleOnAdd = (quantity) => {
        console.log("Producto a punto de ser agregado:", product); 
    if (product) {
        const item = {
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
            category: product.category // <-- ¡AÑADIMOS LA CATEGORÍA!
        };
        addItem(item, quantity);
    }
};

    return (
        <div>
            {loading ? (
                <h1>Cargando...</h1>
            ) : product ? (
                // 2. Le pasamos una nueva prop que indica si el item ya está en el carrito
                <ItemDetail {...product} onAdd={handleOnAdd} isItemInCart={isInCart(product.id)} />
            ) : (
                <h1>El producto no existe.</h1>
            )}
        </div>
    );
};

export default ItemDetailContainer;