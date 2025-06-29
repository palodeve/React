import Footer from "./components/footer/Footer";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Navbar from "./components/navbar/Navbar";

function App() {
  

  return ( 
  <div>
    <Navbar/>
    <ItemListContainer mensaje="Hola user!"/>
    <Footer/>
  </div>
    
  )
}  


export default App;
