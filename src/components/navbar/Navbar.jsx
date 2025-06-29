
import Carrito from '../carrito/Carrito'
import { GiCook } from "react-icons/gi";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>

      <div class="lado-izq">
        <h1>Cook and home<GiCook /></h1>
        <Carrito/>
        <h3>burbuja</h3>
      </div>  

      
          
    </div>
  )
}

export default Navbar
