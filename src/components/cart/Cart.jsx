import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router';

const Cart = () => {
    const {cart, resetCart, removeById, getTotalAmout } = useContext(CartContext);

    let total = getTotalAmout();
    
    return (
        <div>
            <h1>productos delll carrito</h1>
            {cart.map ((product) =>  {
                return (
                    <div key={product.id} 
                    style={{
                        display: "flex", 
                        flexDirection: "column", alignItems: "center", 
                        border: "1px solid black", 
                        margin: "10px", 
                        padding: "10px", 
                        width: "200px"
                    }}
                    >
                        <h2>{product.title} </h2>
                        <p>x {product.cantidad}</p>
                        <button onClick={()=> removeById (product.id)}>eliminar</button>
                    </div>
                );
                })}
                <h4>total a pagar: {total}</h4>
                <button onClick={resetCart}>limpiar carrito.</button>
                {cart.length >= 1 && <Link to= "/carrito">Finalizar compra</Link>}
            </div>
            );
        };

    

export default Cart;
