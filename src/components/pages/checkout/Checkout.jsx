import React, { useContext,useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { db} from '../../../firebaseconf';
import { collection, addDoc, doc, updateDoc} from 'firebase/firestore';    


const Checkout = () => {

const {user, setUser} = useState ({
    nombre: "",
    telefono: "",
    mail: ""}); 

const {cart , getTotalAmount, resetCart} = useContext (CartContext);
const [ setOrderId] = useState (null);

const handleSubmit = (evento) => {
    evento.preventDefauly();
    console.log (user);

    let total = getTotalAmount();
    let objetoCompra = {
        items:cart,
        total: total,
        buyer: user,}


let ordersCollection = collection (db, "orders");
let res = addDoc (ordersCollection , objetoCompra)
res.then ((res) => {
    setOrderId (res.id);
    resetCart()}).catch (error => {alert ("error") 
        console.log (error);});

let productosCollection = collection (db, "products");
objetoCompra.items.forEach((product) => {
    let productRef = doc (productosCollection, product.id);
    updateDoc (productRef, {stock: product.stock - product.cantidad});
});


};

const handleChange = (evento) => {
    setUser ({
        ...user,
        [evento.target.name]: evento.target.value
    });
};

return (
    <div>
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='nombre' 
            name='nombre'
            onChange= {handleChange}/>
        <input 
            type="text" 
            placeholder='telefono' 
            name='telefono'
            onChange={handleChange}/>
        <input 
            type="text" 
            placeholder='mail' 
            name='mail'
            onChange={handleChange}/>
        <button>Enviar</button>

    </form>
    </div>
)
};

export default Checkout
