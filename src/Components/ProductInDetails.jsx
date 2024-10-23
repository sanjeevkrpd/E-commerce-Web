import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ProductInDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({}); 
  let [count , setCount] = useState(1);
const { isLogged, user } = useSelector((state) => state.auth);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
const handleDecrement = () => {
  setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
};

  const getProductsById = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/product/${productId}`
      );
      const response = res.data;

      if (response.success) {
        toast.success(response.message);
        setProduct(response.product); 
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
    if (productId) {
      getProductsById();
    }
  }, [productId]);

  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                {product.productImage && (
                  <Link
                    data-fslightbox="mygalley"
                    className="rounded-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-type="image"
                    to={product.productImage}
                  >
                    <img
                      style={{
                        maxWidth: "100%",
                        maxHeight: "40vh",
                        margin: "auto"
                      }}
                      className="rounded-4 fit"
                      src={product.productImage}
                      alt="Main Product"
                    />
                  </Link>
                )}
              </div>
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">
                  {product.productName} <br />
                </h4>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span className="ms-1">4.5</span>
                  </div>
                  <span className="text-muted">
                    <i className="fas fa-shopping-basket fa-sm mx-1"></i>154
                    orders
                  </span>
                  <span className="text-success ms-2">In stock</span>
                </div>

                <div className="mb-3">
                  <span className="h5">₹{product.productPrice}</span>
                  <span className="text-muted"> per KG</span>
                </div>

                <p>{product.productDescription}</p>
                <div className="row">
                  <dt className="col-3">Type:</dt>
                  <dd className="col-9">Regular</dd>

                  <dt className="col-3">Color</dt>
                  <dd className="col-9">Brown</dd>

                  <dt className="col-3">Date</dt>
                  <dd className="col-9">{product.date}</dd>

                  <dt className="col-3">Brand</dt>
                  <dd className="col-9">Kisan's Bazar</dd>
                </div>

                <hr />
                <div className="row mb-4">
                  {/* <div className="col-md-4 col-6">
                    <label className="mb-2">Size</label>
                    <select
                      className="form-select border border-secondary"
                      style={{ height: "35px" }}
                    >
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div> */}
                  <div className="col-md-12 col-6 mb-3">
                    <label className="mb-2 d-block">Quantity</label>
                    <div
                      className="input-group mb-3"
                      style={{ width: " 170px" }}
                    >
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon1"
                        data-mdb-ripple-color="dark"
                        onClick={handleDecrement}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <input
                        type="text"
                        className="form-control text-center border border-secondary"
                        placeholder="0"
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                        value={count}
                      />
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon2"
                        data-mdb-ripple-color="dark"
                        onClick={handleIncrement}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <Link className="btn btn-warning shadow-0 "> Buy now </Link>
                <Link className="btn btn-primary shadow-0 offset-1">
                  {" "}
                  <i className="me-1 fa fa-shopping-basket"></i> Add to cart{" "}
                </Link>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* <section className="bg-light border-top py-4">
        <div className="container">
          <div className="row gx-4">
            <div className="col-lg-8 mb-4">
              <div className="border rounded-2 px-3 py-2 bg-white"></div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ProductInDetails;
