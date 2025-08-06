import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../productsMock"; ///77 ppppp
import ItemDetail from "../../components/item/ItemDetail";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductById(productId).then(setProducto);
  }, [productId]);

  return (
    <div className="container mt-4">
      {producto ? <ItemDetail {...producto} /> : <p>Cargando producto...</p>}
    </div>
  );
};

export default ItemDetailContainer;