import React, { useState } from "react";
import "./Login.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
const Login = () => {
    
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(true); 

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

 const handleSubmit = async (e) => {
   e.preventDefault();

   try {
    
     const res = await axios.post("http://localhost:8080/api/v1/user/login", {
       email: inputs.email,
       password: inputs.password
     });

    
     const response = res.data;

     
     if (response.success) {
       toast.success("Login successful 😊");
       navigate("/");
     } else {
       toast.error(response.message);
     }
   } catch (error) {
     console.log(error);
     toast.error("Something went wrong 😢");
   }
 };


  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    name="email" // Add name attribute
                    className="form-control form-control-lg"
                    value={inputs.email}
                    onChange={handleChange}
                  />
                  <label className="form-label" htmlFor="form1Example13">
                    Email address
                  </label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    name="password" // Add name attribute
                    className="form-control form-control-lg"
                    value={inputs.password}
                    onChange={handleChange}
                  />
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="form1Example3"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      Remember me
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-lg btn-block"
                >
                  Sign in
                </button>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <a
                  data-mdb-ripple-init
                  className="btn btn-primary btn-lg btn-block"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-facebook-f me-2"></i>Continue with
                  Facebook
                </a>
                <a
                  data-mdb-ripple-init
                  className="btn btn-primary btn-lg btn-block"
                  style={{ backgroundColor: "#55acee" }}
                  role="button"
                >
                  <i className="fab fa-twitter me-2"></i>Continue with Twitter
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
