import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; 
import { logout } from "../redux/Features/AuthSlice"; 
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { login } from "../redux/Features/AuthSlice";
import {useNavigate} from 'react-router-dom';
const Navbar = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const { isLogged, user } = useSelector((state) => state.auth); 


  const handleLogout = () => {
    dispatch(logout()); 
  };
   const token = localStorage.getItem("token");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const verifyUser = async () => {
      try {
       
        if (token) {
          const response = await axios.post(
            "http://localhost:8080/api/v1/user/verifyUser",
            null,
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          );

          if (response.data.success) {
            toast.success("User Verified Successfully. 😊")
            const { user } = response.data;

            dispatch(login({ user, token }));
          }

          localStorage.clear("token");
          localStorage.clear("user");
        }
      } catch (error) {
        console.error("Verification error:", error);
      }
    };


 
  useEffect(() => {
    
    if(!isLogged && token){
        verifyUser();
    }
  
  }, [isLogged, token, verifyUser]);

  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid offset-1">
          <Link className="navbar-brand active brand" to="/">
            <i className="fa-solid fa-shop"></i> E-Shopping
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button type="button" className="btn position-relative">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/checkout"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {/* handle the cart */}
                </span>
              </button>
            </li>
          </ul>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto"></ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item d-flex align-items-center">
                <form className="d-flex" role="search">
                  <input
                    className="form-control form-control-sm me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-success btn-sm"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  <i className="fa-solid fa-house"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  <i className="fa-solid fa-book-open-reader"></i> About Us
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle active"
                  to="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-list"></i> Category
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/action1">
                      <i className="fa-solid fa-person"></i> Men&apos;s
                      Collection
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/action2">
                      <i className="fa-solid fa-person-dress"></i> Women&apos;s
                      Collection
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/action3">
                      <i className="fa-solid fa-mobile-screen-button"></i>{" "}
                      Mobile Phones
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/dailyProducts">
                      <i className="fa-brands fa-product-hunt"></i> Daily
                      Products
                    </Link>
                  </li>
                </ul>
              </li>

              {isLogged ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active">
                      <i className="fa-solid fa-user"></i> {user}{" "}
                      {/* Adjust based on your user object */}
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link active" onClick={handleLogout}>
                      <i className="fa-solid fa-right-from-bracket"></i> Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/login"
                    >
                      <i className="fa-solid fa-person-shelter"></i> Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link active" to="/register">
                      <i className="fa-solid fa-id-card"></i> Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
