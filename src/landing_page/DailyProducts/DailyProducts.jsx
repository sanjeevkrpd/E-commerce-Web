import axios from "axios";
import Hero from "./Hero";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../../Components/Card";
import './dailyProducts.css';
const DailyProducts = () => {
  const navigate = useNavigate();
  const [product, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/product/allDailyProducts"
      );
      const response = res.data;

      if (response.success) {
        toast.success(response.message);
        setProducts(response.data);

      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error");
      navigate("/");
    }
  };
   const handleCardClick = (productId) => {
   
     navigate(`/productInDetail/${productId}`);
   };


 function shortProductDes(des) {
   if (des.length > 15) {
     return des.substring(0, 15) + "..."; 
   }
   return des; 
 }

  useEffect(() => {
    getProducts();
  }, [0]);

  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          {product.map((product) => (

              <Card
                key={product._id}
                productId={product._id}
                productName={product.productName}
                productPrice={product.productPrice}
                productQuantity={product.productQuantity}
                productImage={product.productImage}
                productDescription={shortProductDes(product.productDescription)}
                onClick={() => handleCardClick(product._id)}
              />
          ))}
        </div>
      </div>
    </>
  );
};

export default DailyProducts;

