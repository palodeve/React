import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import ItemDetail from "../../components/item/ItemDetail";
import { getProductById } from "../../../../productsMock";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductById (productId).then(setProducto);
  }, [productId]);

  return (
    <div className="container mt-4">
      {producto && <p>Cargando producto...</p>}
    </div>
  );
};

export default ItemDetailContainer;