import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { productsMock } from '../../../../productsMock';
import {CartContext} from '../../context/CartContext';
import Counter from '../../common/counter/Counter';
import { db } from '../../../firebaseconf';
import { doc, getDoc, collection } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);
    const {addCart} = useContext (CartContext);


    useEffect(() => {
      let productsCollection = collection(db, "products");
      let refDoc = doc(productsCollection, itemId);
      getDoc(refDoc).then((res) => setProduct({ id: res.id, ...res.data() }));
      }, [itemId]);


    //  const data = productsMock.find((p) => p.id === parseInt(itemId));
  //    setProduct(data);
  //  }, [itemId]);

if (!product) return <p>Cargando...</p>;
return (
    <div className="product-detail">
        <img src={product.imageUrl} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.descrption}</p>
        <p>Precio: ${product.price}</p>
        <p>Stock: {product.stock}</p>
        <Counter product= {product}/>
        <button onClick={ () => {
          addCart(product);
        }}>Agregar al carrito</button>
    </div>
  );
}; 

export default ItemDetailContainer;