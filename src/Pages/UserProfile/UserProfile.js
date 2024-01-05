import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState(null);

  const [userData, setUserData] = useState({
    Name: "",
    city: "",
    experience: "",
    phone: "",
    email: "",
    about: "",
    profilePicture: null,
  });

  const [successMessage, setSuccessMessage] = useState(null);

  // Handle image change
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    // Handle file input separately
    if (type === "file") {
      setProfilePicture(e.target.files[0]);
    } else {
      // Handle other input types
      setUserData((prevUserData) => ({
        ...prevUserData,
        [name]: value,
      }));
    }
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      Object.entries(userData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // Get the token from local storage
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "/auth/update-profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSuccessMessage("Profile updated successfully");

      setTimeout(() => {
        setSuccessMessage(null);
      }, 1000);
    } catch (error) {
      console.error("Error updating profile", error);
    }
  };

  const navigateHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/auth/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUserData(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <Navbar />
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}
      <div className="user-cont container">
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile">
                    <div className="user-avatar">
                      <img
                        id="user-profile-image"
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="User Profile"
                      />
                    </div>
                    <h5 className="user-name">{userData.Name}</h5>
                    <h6 className="user-email text-dark">{userData.email}</h6>
                  </div>
                  <div className="about">
                    <h5 style={{ color: "rgb(6 44 36)", fontSize: "1.35rem" }}>
                      About
                    </h5>
                    <p>{userData.about}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6
                      className="mb-2 "
                      style={{ color: "rgb(6 44 36)", fontSize: "1.35rem" }}
                    >
                      Personal Details
                    </h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="Name">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Name"
                        placeholder="Enter full name"
                        name="Name"
                        value={userData.Name}
                        onChange={(e) => handleChange(e, "Name")}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter email ID"
                        value={userData.email}
                        onChange={(e) => handleChange(e, "email")}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        name="phone"
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone number"
                        value={userData.phone}
                        onChange={(e) => handleChange(e, "phone")}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="experience">Experience (years)</label>
                      <input
                        type="number"
                        name="experience"
                        className="form-control"
                        id="experience"
                        placeholder="Experience in years"
                        value={userData.experience}
                        onChange={(e) => handleChange(e, "experience")}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="about">About</label>
                      <input
                        type="text"
                        className="form-control"
                        id="about"
                        name="about"
                        placeholder="Describe yourself..."
                        value={userData.about}
                        onChange={(e) => handleChange(e, "about")}
                      />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6
                      className="mt-3 mb-2"
                      style={{ color: "rgb(6 44 36)", fontSize: "1.35rem" }}
                    >
                      Address
                    </h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="city" className="ml-3">
                        City
                      </label>
                      <input
                        type="name"
                        className="form-control ml-3"
                        id="city"
                        name="city"
                        placeholder="Enter City"
                        value={userData.city}
                        onChange={(e) => handleChange(e, "city")}
                      />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right">
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-secondary"
                        onClick={navigateHome}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="ml-3 btn btn-primary"
                        onClick={handleUpdate}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
