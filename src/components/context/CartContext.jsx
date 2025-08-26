
import {createContext, useState} from 'react'
import React from 'react'

export const CartContext = createContext(); //contexto

const CartContextProvider = ({children}) => {

const [ cart,setCart ] = useState([]); 

    const addCart = (product) => {
        setCart([ ...cart, product]);
    };
    const removeById = (id) => {
        let arrayFiltrado = cart.filter(elemento => elemento.id !== id);
        setCart(arrayFiltrado);
    };

    const resetCart = () => {
        setCart([])};

    const getTotalAmount = () => {
        let total = cart.reduce ((acc, elemento) => 
        {return acc + elemento.price * elemento.cantidad}, 0);
        return total;
    };
    const getTotalQuanty = () => {
        let total = cart.reduce ((acc, elemento) => 
        {return acc + elemento.cantidad}, 0);
        return total;
    }
    return (
        <CartContext.Provider
            value={{
                cart,
                addCart,
                removeById,
                resetCart,
                getTotalAmount,
                getTotalQuanty,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
