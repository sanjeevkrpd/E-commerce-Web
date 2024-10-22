/* eslint-disable no-unused-vars */

import { Link, useNavigate } from 'react-router-dom';
import './card.css';
import { useState , useEffect} from 'react';
const Card = ({
  // eslint-disable-next-line react/prop-types
  productName,
  // eslint-disable-next-line react/prop-types
  productPrice,
  // eslint-disable-next-line react/prop-types
  productQuantity,
  // eslint-disable-next-line react/prop-types
  productImage,
  // eslint-disable-next-line react/prop-types
  productDescription,
  // eslint-disable-next-line react/prop-types
  productId,
  // eslint-disable-next-line react/prop-types
  onClick
}) => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    console.log("Added to cart:", product);
  };

  return (
    <>
      <div
        className="card bg-light"
        style={{ width: "23rem", height: "100%" }}
        id={productId}
      >
        <img
          src={productImage}
          className="card-img-top"
          alt={productName}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{productName}</h5>
          <p
            className="card-text"
            style={{
              flexGrow: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical"
            }}
          >
            {productDescription}
          </p>
          <div className="mt-auto container">
            <div className="row">
              <Link
                to={`/checkout?productId=${productId}`}
                className="col btn btn-grey shadow"
                style={{ marginRight: "10px" }}
                
              >
                Buy Now
              </Link>
              <Link
                className="col btn btn-grey shadow"
                onClick={() =>
                  addToCart({
                    productName,
                    productPrice,
                    productImage,
                    productDescription,
                    productId
                  })
                }
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;






//  <div className="card" style={{ width: "100%", height: "500px" }}>
//       {" "}
//       {/* Set a fixed height */}
//       {productImage ? (
//         <img
//           src={productImage}
//           className="card-img-top"
//           alt={productName}
//           style={{ height: "200px", objectFit: "cover" }}
//         />
//       ) : (
//         <div
//           className="card-img-top"
//           style={{
//             height: "200px",
//             backgroundColor: "#f0f0f0",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center"
//           }}
//         >
//           <p>No Image Available</p>
//         </div>
//       )}
//       <div className="card-body">
//         <h5 className="card-title">{productName}</h5>
//         <p className="card-text">{productDescription}</p>
//       </div>
//       <ul className="list-group list-group-flush">
//         <li className="list-group-item">${productPrice}</li>
//         <li className="list-group-item">Quantity: {productQuantity}</li>
//       </ul>
//       <div className="card-body">
//         <Link to={`/checkout?id=${productId}`} className="card-link">
//           Buy Now
//         </Link>
//         <Link to="/addToCart" className="card-link">
//           Add to Cart
//         </Link>
//       </div>
//     </div>