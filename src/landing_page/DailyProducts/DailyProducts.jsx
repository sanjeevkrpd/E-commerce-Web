import axios from "axios";
import Hero from "./Hero";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../../Components/Card";

const DailyProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/product/allDailyProducts"
      );
      const response = res.data;

      if (response.success) {
        toast.success(response.message);
        console.log(response.data);
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

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{marginTop : "10%"}}>
      <Hero />
      <div className="container">
        <div className="row g-3 mb-2">
          {" "}
       
          {products.length > 0 ? (
            products.map((product) => (
              <div className="col-4" key={product._id}>
                {" "}
                {/* Set to col-4 for three columns */}
                <Card
                  productId = {product._id}
                  productName={product.productName}
                  productPrice={product.productPrice}
                  productQuantity={product.productQuantity}
                  productImage={product.productImage}
                  productDescription={product.productDescription}
                />
              </div>
            ))
          ) : (
            <div className="col-12">No products available.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyProducts;
