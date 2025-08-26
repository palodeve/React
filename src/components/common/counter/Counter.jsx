import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { useState } from 'react';

const Counter = ({product}) => { 
    const {addCart} = useContext(CartContext);

    const [contador, setContador] = useState(1);

    const sumar = () => {
        setContador(contador + 1);};


    const restar = () => {
        if (contador > 1){
            setContador(contador - 1)};};
        
    const agregarAlCarrito = () => {
        let productoConCantidad = {...product,cantidad: contador};
        addCart(productoConCantidad);  };
    
return (
        <div>
            <button onClick={restar} disabled={contador === 1}>restar</button>
            <button onClick={sumar} disabled={contador === product.stock}>sumar</button>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    );};

export default Counter;
