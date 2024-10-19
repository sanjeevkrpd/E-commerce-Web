import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid offset-1">
          <Link className="navbar-brand active brand" to="/">
            <i className="fa-solid fa-shop"></i> E-Shopping
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button type="button" className="btn  position-relative">
              <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/checkout"
                >
                <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  1
                  {/* <span class="visually-hidden">unread messages</span> */}
                </span>
              </button>
            </li>

            {/* <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/checkout"
                >
                <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </li> */}
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
    <button className="btn btn-outline-success btn-sm" type="submit">
      Search
    </button>
  </form>
</li>

              <li className="nav-item ">
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
                  <i className="fa-solid fa-book-open-reader"></i> AboutUs
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
                      <i className="fa-solid fa-person"></i> Men&apos;s Collection
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/action2">
                      <i className="fa-solid fa-person-dress"></i> Women
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
                    <Link className="dropdown-item" to="/action3">
                      <i className="fa-brands fa-product-hunt"></i> Daily
                      Products
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                >
                  <i className="fa-solid fa-person-shelter"></i> Login
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="/register">
                  <i className="fa-solid fa-id-card"></i> SignUp
                </Link>
              </li>
              <li className="nav-item last">
                <Link className="nav-link active" to="/logout">
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
