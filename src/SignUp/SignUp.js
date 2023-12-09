import React, { useState, useEffect } from "react";
import "../SignUp/Style.css";
import { NavLink, useNavigate } from "react-router-dom";
import Axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Name: "",
    city: "",
    experience: 0,
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    filename: null,
  });

  const [errors, setErrors] = useState({});
  const [fileUrl, setFileUrl] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [serverErrors, setServerErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setServerErrors({ ...serverErrors, [e.target.name]: "" });
  };

   const validateForm = () => {
     const newErrors = {};

     if (!formData.Name.trim()) {
       newErrors.Name = "Name is required";
     }

     if (!formData.city.trim()) {
       newErrors.city = "City is required";
     }

     if (
       !formData.experience ||
       isNaN(parseInt(formData.experience)) ||
       parseInt(formData.experience) < 0
     ) {
       newErrors.experience =
         "Experience should be a non-negative number (not 0)";
     }

     if (!formData.phone.trim()) {
       newErrors.phone = "Phone is required";
     }

     if (
       !formData.email.trim() ||
       !/^\S+@\S+\.\S+$/.test(formData.email.trim())
     ) {
       newErrors.email = "Invalid email";
     }

     if (formData.password.length < 8) {
       newErrors.password = "Password must be at least 8 characters long";
     }

     if (formData.password !== formData.confirmPassword) {
       newErrors.confirmPassword = "Passwords do not match";
     }

     return newErrors;
   };

   useEffect(() => {
     const newErrors = validateForm();
     setErrors(newErrors);
   }, [formData]);


  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData({ ...formData, filename: file });

      const reader = new FileReader();
      reader.onload = () => {
        const fileType = file.type;

        if (fileType.startsWith("image/")) {
          setFileUrl(reader.result);
          setPdfUrl(null);
        } else if (fileType === "application/pdf") {
          setFileUrl(null);
          setPdfUrl(reader.result);
        } else {
          setErrors({
            ...errors,
            filename: "Unsupported file type. Please upload an image or PDF.",
          });
          setFileUrl(null);
          setPdfUrl(null);
        }
      };

      reader.readAsDataURL(file);
    }
  };

   const handleSignUp = async (e) => {
     e.preventDefault();
     console.log("Start of handleSignUp");

     const newErrors = validateForm();
       console.log("Validation Errors:", newErrors);
     setErrors(newErrors);

     if (Object.keys(newErrors).length > 0) {
       console.log("Validation failed");
       return;
     }

     const formDataToSubmit = new FormData();
     formDataToSubmit.append("Name", formData.Name);
     formDataToSubmit.append("city", formData.city);
     formDataToSubmit.append("experience", formData.experience);
     formDataToSubmit.append("phone", formData.phone);
     formDataToSubmit.append("email", formData.email);
     formDataToSubmit.append("password", formData.password);
     formDataToSubmit.append("confirmPassword", formData.confirmPassword);
     formDataToSubmit.append("filename", formData.filename);

     try {
       console.log("Before Axios.post");
       console.log("Form Data to Submit:", formDataToSubmit);
       const response = await Axios.post(
         "http://localhost:8080/auth/signup",
         formDataToSubmit,
         {
           headers: {
             "Content-Type": "multipart/form-data",
           },
         }
       );
       console.log("After Axios.post");
       console.log("Server Response:", response);

       const { token, refreshToken, message, field } = response.data;

       if (token) {
         // Signup successful
         localStorage.setItem("token", token);
         navigate("/login");
         console.log("SignUp Successful", response);
       } else {
         // Handle server errors
         setServerErrors({ [field]: message });
       }
     } catch (error) {
       // Handle Axios errors
       if (error.response) {
          const { message, field } = error.response.data;
          console.log("Server error details:", { message, field });

        if (field === "email" && message === "Email is already registered") {
          setServerErrors({ email: "Email is already in use" });
        } else {
          setServerErrors({ [field]: message });
        }
       } else if (error.request) {
         // The request was made but no response was received
         console.log("No response received from the server");
       } else {
         // Something happened in setting up the request that triggered an Error
         console.error("Error setting up the request", error.message);
       }

       // Log the entire Axios error for debugging
       console.error("SignUp Error", error);
     }
   };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="sign-up-bg m-3 py-4 text-center">
              <img src="/login.png" className="mt-5 pt-3" alt="img"></img>
            </div>
          </div>

          <div className="col-lg-1"></div>

          <div className="col-lg-5  mt-5 pt-5">
            <div className="heading-signup">
              <h2>Sign Up</h2>
              <h6>
                <strong>Please Fill in Your personal Details Below:</strong>
              </h6>{" "}
              <br></br>
            </div>
            <div className="signup">
              <form
                onSubmit={handleSignUp}
                method="POST"
                encType="multipart/form-data"
                action="http://localhost:8080/auth/signup"
              >
                <h5>
                  <b>Name</b>
                  <span>*</span>
                </h5>
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                />
                <br />
                <small className="text-danger">{errors.Name}</small>
                <br></br>
                <br></br>
                <h6>
                  <b>City</b>
                  <span>*</span>
                </h6>
                <i className="fa-solid fa-location-dot"></i>
                <input
                  type="text"
                  placeholder="Enter Your City"
                  name="city"
                  onChange={handleChange}
                  value={formData.city}
                />
                <br />
                <small className="text-danger">{errors.city}</small>
                <br></br>
                <br></br>
                <h5>
                  <b>Experience</b>
                  <span>*</span>
                </h5>
                <i className="fa-regular fa-calendar"></i>
                <input
                  type="number"
                  placeholder="Enter Your Experience"
                  name="experience"
                  onChange={handleChange}
                  value={formData.experience}
                />
                <br />
                <small className="text-danger">{errors.experience}</small>
                <br></br>
                <br></br>
                <h5>
                  <b>Phone</b>
                  <span>*</span>
                </h5>
                <i className="fa-solid fa-phone-volume"></i>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <br />
                <small className="text-danger">{errors.phone}</small>
                <br></br>
                <br></br>
                <h5>
                  <b>Email</b>
                  <span>*</span>
                </h5>
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="Email"
                  placeholder="Enter Phone Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <br />
                <small className="text-danger">{errors.email}</small>
                <br></br>
                <br></br>
                <h5>
                  <b>Password</b>
                  <span>*</span>
                </h5>
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  placeholder="Enter Phone Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />{" "}
                <br />
                <small className="text-danger">{errors.password}</small>
                <br></br>
                <br></br>
                <h5>
                  <b>Confirm Password</b>
                  <span>*</span>
                </h5>
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />{" "}
                <br />
                <small className="text-danger">{errors.confirmPassword}</small>
                <br></br>
                <br></br>
                <h5>
                  <b>Upload Your Resume (PDF only)</b>
                  <span>*</span>
                </h5>
                <input
                  className="border-0"
                  type="file"
                  name="filename"
                  onChange={handleFileChange}
                />{" "}
                <br />
                <small className="text-danger">
                  {serverErrors.email || errors.email}
                </small>
                <br></br>
                <br></br>
                <div className="mix">
                  <div>
                    {(fileUrl || pdfUrl) && (
                      <div>
                        {fileUrl && (
                          <div>
                            <h5>Uploaded Image:</h5>
                            <img
                              src={fileUrl}
                              alt="Uploaded Image"
                              style={{ maxWidth: "100%", maxHeight: "600px" }}
                            />
                          </div>
                        )}
                        {pdfUrl && (
                          <div>
                            <h5>Uploaded PDF :</h5>
                            <iframe
                              title="PDF Viewer"
                              src={pdfUrl}
                              width="100%"
                              height="600px"
                            ></iframe>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <button className="pricing-btn w-50 ml-3" type="submit">
                    SignUp
                  </button>
                  <br></br>
                  <br></br>
                  <h5>
                    Already have an account?
                    <NavLink to="/Login">Login</NavLink>
                  </h5>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
