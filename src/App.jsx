
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import ItemListContainer from './components/pages/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/pages/itemDetailContainer/ItemDetailContainer';
import CartContextProvider from './components/context/CartContext';
import Cart from './components/cart/Cart';
import Checkout from './components/pages/checkout/Checkout';


function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth/login" element={<h2>login</h2>} />
          <Route path="/auth/register" element={<h2>registro</h2>} />
          <Route path="*" element={<h2>404 | Página no encontrada</h2>} />
        
        
        
        
        </Routes>
      </CartContextProvider>  
      <Footer />
    </BrowserRouter>
  );
}

export default App;
