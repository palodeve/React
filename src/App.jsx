
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
        <Route path="/detalle/:productId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;