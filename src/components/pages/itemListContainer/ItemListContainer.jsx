import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from "../../common/itemList/ItemList"
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from "../../../services/firebase/firebaseConfig"

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products');

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data();
                    return { ...data, id: doc.id };
                });
                setProducts(productsAdapted);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [categoryId]);

    return (
        <div>
            {loading ? <h1>Cargando productos...</h1> : <ItemList products={products} />}
        </div>
    );
};

export default ItemListContainer;