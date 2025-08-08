import { Link } from 'react-router-dom';
import "./ProductCard.css"

const ProductCard = ({ product }) => {
return (
    <div className="product-card">
        <img src={product.imageUrl} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <Link to={`/item/${product.id}`}>Ver más</Link>
    </div>
  );
};

export default ProductCard;
