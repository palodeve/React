
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import ItemListContainer from './components/pages/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/pages/itemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>404 | Página no encontrada</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
