import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/api";
import ItemDetail from "../itemDetail/ItemDetail";
import { useCart } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  const { addItem } = useCart();

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  const handleOnAdd = (quantity) => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
    };
    addItem(item, quantity);
    console.log(`Agregaste ${quantity} de ${product.name}`);
  };

  return (
    <div>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <ItemDetail {...product} onAdd={handleOnAdd} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
