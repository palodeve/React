import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../../firebaseconf';
import ProductCard from '../../product/ProductCard';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const productsCollection = collection(db, "products");
        let consulta;

        if (categoryId) {
            consulta = query(productsCollection, where("category", "==", categoryId));
        } else {
            consulta = productsCollection;
        }

        getDocs(consulta)
            .then((res) => {
                const arrayProductos = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(arrayProductos);
            })
            .catch((error) => {
                console.error("Error al obtener los documentos:", error);
            });

    }, [categoryId]);

    return (
        <>
            <h2 className="title-category">{categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}</h2>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

export default ItemListContainer;