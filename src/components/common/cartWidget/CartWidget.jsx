import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import "./CartWidget.css"
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


export const CartWidget = () => {
    const { getTotalQuanty} = useContext(CartContext);
    let total = getTotalQuanty();

    return (
        <link style= {{color : write}} to= "../Cart"> //nose
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "20px",
                }}>

            <div className="ImgCar">
                <IoCartOutline />

                <div style={ {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#f0f0f0",
                color: "#333",
            }}>
                {total}
            </div>
            </div>
            </div>
        </link>

    );
};

export default CartWidget;



