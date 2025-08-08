import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsMock } from '../../../../productsMock';


const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
    const data = productsMock.find((p) => p.id === parseInt(itemId));
    setProduct(data);
  }, [itemId]);

    if (!product) return <p>Cargando...</p>;

return (
    <div className="product-detail">
        <img src={product.imageUrl} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.descrption}</p>
        <p>Precio: ${product.price}</p>
        <p>Stock: {product.stock}</p>
        <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;
