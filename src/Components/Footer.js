import React from "react";
import "../Components/css/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container-fluid footer-bg h-100">
        <div className="container footer-content">
          <div className="row text-white">
            <div className="mt-5 col-lg-3 col-md-6">
              <div className="footer-logo">
                <img className="mt-2" src="/logo-white.png"></img>
              </div>
              <div className="footer-number-1">
                <h5>
                  <a href="tel:+923114767758">+92-311-4767758</a>
                </h5>
                <h5>
                  <a href="mailto:contact@ssltraining.com">
                    contact@ssltraining.com
                  </a>
                </h5>
              </div>
            </div>

            <div className="mt-5 col-lg-3 col-md-6">
              <div className="footer-number">
                <h5>Information</h5>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/courses">Products</Link>
                </li>
              </div>
            </div>

            <div className="mt-5 col-lg-3 col-md-6">
              <div className="footer-number">
                <h5 className="invisible">Information</h5>
                <li>
                  <Link to="privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </div>
            </div>

            <div className="mt-5 col-lg-3 col-md-6">
              <div className="footer-number">
                {/* <h5 className='invisible'>Information</h5> */}
                <h5>Subscribe</h5>
                <div className="d-flex mb-5 align-items-center">
                  <input type="text" placeholder="Your Email" />
                  <div className="send-btn">
                    <i className="fa-solid fa-arrow-right py-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4">
              <ul className="social-network social-circle">
                {/* <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-rss"></i></a></li> */}
                <li>
                  <a
                    href="https://www.facebook.com/sslsolution.net"
                    className="icoFacebook"
                    title="Facebook"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                {/* <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li> */}
                <li>
                  <a
                    href="https://www.linkedin.com/in/ssl-solutions-72374621b/?originalSubdomain=pk"
                    className="icoLinkedin"
                    title="Linkedin"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="power-container col-lg-4 col-md-6 by">
              <h5 className="text-light">
                Powered By{" "}
                <span>
                  <img className="powered-img" src="/sslsolution.png"></img>
                </span>
              </h5>
            </div>
            <div className="col-lg-4 col-md-6">
              <p className="text-light text-right mt-3">
                © 2023 SSL TRAINING - All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
