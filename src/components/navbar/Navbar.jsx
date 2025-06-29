
import Carrito from '../carrito/Carrito'
import { GiCook } from "react-icons/gi";

const Navbar = () => {
  return (
    <div>
      <div class="lado-izq">
      <h2>Cook and home<GiCook /></h2>
      
        <ul>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="pages/productos.html">Productos</a></li>
        </ul>
      </div>
      <div class="lado-derecho">
          <Carrito/>
      </div>
    </div>
  )
}

export default Navbar
