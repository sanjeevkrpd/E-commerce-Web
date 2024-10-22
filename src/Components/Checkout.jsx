import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const Checkout = () => {
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

 
  const getProductIdFromQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get("id"); 
  };


  const fetchProduct = async (productId) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/product/getProductById${productId}`
      ); 
      const response = res.data;

      if (response.success) {
        setProduct(response.data);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch product details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const productId = getProductIdFromQuery();
    if (productId) {
      fetchProduct(productId);
    } else {
      toast.error("Product ID not found.");
      setLoading(false);
    }
  }, [location]);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="container">
      {product ? (
        <div className="checkout-product">
          <h1>{product.productName}</h1>
          <img src={product.productImage} alt={product.productName} />
          <p>{product.productDescription}</p>
          <p>Price: ${product.productPrice}</p>
          <p>Quantity Available: {product.productQuantity}</p>
          {/* Add your checkout logic here */}
        </div>
      ) : (
        <div>No product found.</div>
      )}
    </div>
  );
};

export default Checkout;
