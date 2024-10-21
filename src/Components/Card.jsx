
import { Link } from 'react-router-dom';
import './card.css'

const Card = ({
  productName,
  productPrice,
  productQuantity,
  productImage,
  productDescription
}) => {
  return (
    <div className="card" style={{ width: "100%", height: "500px" }}> {/* Set a fixed height */}
      {productImage ? (
        <img src={productImage} className="card-img-top" alt={productName} style={{ height: "200px", objectFit: "cover" }} />
      ) : (
        <div className="card-img-top" style={{ height: "200px", backgroundColor: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p>No Image Available</p>
        </div>
      )}
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">{productDescription}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">${productPrice}</li>
        <li className="list-group-item">Quantity: {productQuantity}</li>
       
      </ul>
      <div className="card-body">
        <Link to='/checkout'  className="card-link">Buy Now</Link>
        <Link to='/addToCart' className="card-link">Add to Cart</Link>
      </div>
    </div>
  );
};

export default Card;
