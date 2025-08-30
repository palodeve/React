import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import "./CartWidget.css"
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
    const { getTotalQuanty} = useContext(CartContext);
    let total = getTotalQuanty();

    return ( 
        <>
          <Link className='je' to= "src/components/cart/Cart.jsx"> 
                <div>
                    {total}
                </div>
            </Link>
</>
    );
};

export default CartWidget;



