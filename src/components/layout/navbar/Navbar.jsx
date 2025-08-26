import React from 'react'
import "./Navbar.css"
//import Carrito from '../../common/carrito/Carrito'
import Carrito from '../../common/cartWidget/cartWidget'
import { Link } from 'react-router-dom'
const Navbar = () => {
return (
    <nav className="navbar"> 
        <div className="lado-izq">
            <h1>Tienda de carteras</h1>
        </div> 
        <ul>
            <Link to="/">Inicio</Link>
            <Link to="/category/bolsos%20pequeños">Bolsos Pequeños</Link>
            <Link to="/category/bolso%20facultad">Bolso Facultad</Link>
            <Link to="/category/mochila">Mochila</Link>
        </ul>

        <div className="lado-derecho">
            <link rel="stylesheet" href= "../Carrito"/>
            <Carrito/>
        </div>
    </nav> 
)
}

export default Navbar
