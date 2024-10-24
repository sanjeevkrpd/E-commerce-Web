/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import "./card.css";
import { useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
const Card = ({
  productName,
  productPrice,
  productQuantity,
  productImage,
  productDescription,
  productId,
  onClick
}) => {
  const [cartItems, setCartItems] = useState([]);

   const handleBuy = ()=>{
      
   }


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
    <div
      className="card bg-light"
      style={{ width: "23rem", height: "100%", cursor: "pointer" }}
      id={productId}
      onClick={onClick}
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
             onClick={handleBuy}
              // to={`/checkout?productId=${productId}`}
              className="col btn btn-grey shadow"
              style={{ marginRight: "10px" }}
            >
              Buy Now
            </Link>
            <Link
              className="col btn btn-grey shadow"
              onClick={(e) => {
                e.stopPropagation();
                addToCart({
                  productName,
                  productPrice,
                  productImage,
                  productDescription,
                  productId
                });
              }}
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
