import "./ItemListContainer.css"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { productsMock } from "../../../../productsMock";
import ProductCard from "../../product/ProductCard";
import { db } from "../../../firebaseconf";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";


export const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);


    //const fetchProducts = async () => {
     //   const data = categoryId
     //       ? productsMock.filter((p) => p.category.trim().toLowerCase() === categoryId.toLowerCase())
     //       : productsMock ;
     //   setProducts(data);
  //  };
  //  fetchProducts();
//}, [categoryId]);


useEffect(() => {
let productsCollection = collection(db, "products");

let consulta = productsCollection
    if (categoryId) {
        let filtrado = query(productsCollection, where("category", "==", categoryId));
        consulta = filtrado;
    }

let getProducts = getDocs(consulta);
getProducts.then ((res) => {
    let arrayBien = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    setProducts(arrayBien);
});
}, [categoryId]);



//const cargarProductos = () => {
 //   let productsCollection = collection(db, "products");
 //   productsMock.forEach (products => {
   //     addDoc (productsCollection, products)
    // });


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
