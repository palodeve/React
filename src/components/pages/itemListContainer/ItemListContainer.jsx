import "./ItemListContainer.css"


import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { productsMock } from "../../../../productsMock";
import ProductCard from "../../product/ProductCard";

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

useEffect(() => {
    const fetchProducts = async () => {
        const data = categoryId
            ? productsMock.filter((p) => p.category.trim().toLowerCase() === categoryId.toLowerCase())
            : productsMock ;
        setProducts(data);
    };

    fetchProducts();
}, [categoryId]);

    return (
        <div>
        <h2>{categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}</h2>
        <div className="product-list">
            {products.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </div>
    );
    };

export default ItemListContainer;
