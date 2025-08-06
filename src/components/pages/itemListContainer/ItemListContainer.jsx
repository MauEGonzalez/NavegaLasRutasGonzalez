// En tu componente ItemListContainer.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from "../../../utils/api"
import ItemList from "../../itemList/ItemList"

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error('Ocurrió un error:', error);
            })
            .finally(() => {
                setLoading(false);
            });
            
    }, [categoryId]); // Se ejecuta cada vez que 'categoryId' cambia en la URL

    return (
        <div>
            {loading ? <h1>Cargando productos...</h1> : <ItemList products={products} />}
        </div>
    );
};

export default ItemListContainer;