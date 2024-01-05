// Import necessary modules
import React, { useState } from "react";
import "../SignUp/Style.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Function to store token securely in localStorage
const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Function to handle login and store the token
  const handleLogIn = async (e) => {
    e.preventDefault();

    if (!formData.email.trim()) {
      setErrors({ ...errors, email: "Email is required" });
      return;
    }

    if (!formData.password.trim()) {
      setErrors({ ...errors, password: "Password is required" });
      return;
    }

    try {
      const response = await axios.post(
        "/auth/login",
        formData
      );

      const { user, accessToken } = response.data;
      if (accessToken) {
        localStorage.setItem("token", accessToken); // Store token in localStorage
        setError("Logged In Successfully");
        navigate("/courses");
        window.location.reload();
      } else {
        setError("Can't login now");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred while processing your request.");
      }
    }
  };

  return (
    <div>
    <Navbar/>
      <div className="container-fluid" style={{marginBottom: "15px"}}>
        <div className="row">
          <div className="col-lg-6">
            <div className="sign-up-bg m-3 py-4 text-center">
              <img src="/login.png" className="mt-5 pt-3" alt="Img" />
            </div>
          </div>

          <div className="col-lg-1"></div>

          <div className="col-lg-5  mt-5 pt-5">
            <div className="heading-signup">
              <div className="power-cont">
                <span>Powered By: </span>
                <img className="power-img" src="/logo.png" alt="logo" />
              </div>
              <h4 className="mt-4 ml-3">
                <strong>
                  Welcome Back! <br></br>
                  Enter your credentials to access your account.
                </strong>
              </h4>
              <br></br>
            </div>
            <div className="signup">
              <form
                style={{ margin: "0px" }}
                onSubmit={handleLogIn}
                method="POST"
              >
                <h5>
                  <b>Email</b>
                  <span>*</span>
                </h5>
                <i className="fa-solid fa-user"></i>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />{" "}
                <br />
                <small className="text-danger">{errors.email}</small>
                <br></br>
                <br></br>
                <h5>
                  <b>Password</b>
                  <span>*</span>
                </h5>
                <i className="fa-solid fa-user"></i>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />{" "}
                <br />
                <small className="text-danger">{errors.password}</small>
                <div className="mix">
                  <button className="pricing-btn w-50 mt-4 ml-3" type="submit">
                    Login
                  </button>
                  <br></br>
                  <br></br>
                  <h5>
                    {error && <span style={{ color: "red" }}>{error}</span>}
                  </h5>
                  <h5>
                    Already have an account? <br />
                    <NavLink to="/SignUp">Sign Up</NavLink>
                  </h5>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
