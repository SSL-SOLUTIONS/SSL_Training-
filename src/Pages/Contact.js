import React from "react";
import "../Pages/css/contact.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-5 pt-5">
          <div className="col-lg-6">
            <h1>Contact Us</h1>

            <div className="col-lg-12 contact-bg">
              <div className="container contact-content">
                <div className="d-flex mt-2">
                  <i className="fa-solid fa-phone mt-1"></i>
                  <h4 className="ml-4">
                    <strong>Phone</strong>
                  </h4>
                </div>
                <p className="ml-5">+92-311-4767758</p>
              </div>
            </div>

            <div className="col-lg-12 mt-3 contact-bg">
              <div className="container contact-content">
                <div className="d-flex mt-2">
                  <i className="fa-solid fa-location-dot mt-1"></i>
                  <h4 className="ml-4">
                    <strong>Address</strong>
                  </h4>
                </div>
                <p className="ml-5">
                  Office # 303, 3rd Floor, Landmark Plaza, Jail road, Lahore.
                </p>
              </div>
            </div>

            <div className="col-lg-12 mt-3 contact-bg">
              <div className="container contact-content">
                <div className="d-flex mt-2">
                  <i className="fa-solid fa-envelope mt-1"></i>
                  <h4 className="ml-4">
                    <strong>Email</strong>
                  </h4>
                </div>
                <p className="ml-5">contact@ssltraining.com</p>
              </div>
            </div>

            <div className="col-lg-12 mb-5 mt-3 contact-bg">
              <div className="container contact-content">
                <div className="d-flex mt-2">
                  <i className="fa-solid fa-user mt-1"></i>
                  <h4 className="ml-4">
                    <strong>Managed By</strong>
                  </h4>
                </div>
                <p className="ml-5">SSL Solutions Agency L.L.C.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 banner-1 ">
            <img src="contact-img.jpg" className="contact-image w-100"></img>
          </div>
        </div>
      </div>
      <div className="container pt-5 mt-5 text-center">
        <h1>We’d love to hear from You</h1>
        <h4>
          content of a page when looking at its layout. It is a long established
          fact that a reader will be distracted by the readable
        </h4>
        <img src="/contact-banner-1.png" className="w-100" />
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
