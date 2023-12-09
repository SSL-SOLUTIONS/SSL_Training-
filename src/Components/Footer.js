import React from "react";
import "../Components/css/footer.css";

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
                <h5>+92-311-4767758</h5>
                <h5>contact@ssltraining.com</h5>
              </div>
            </div>

            <div className="mt-5 col-lg-3 col-md-6">
              <div className="footer-number">
                <h5>Information</h5>
                <li>Quick Links</li>
                <li>Product</li>
              </div>
            </div>

            <div className="mt-5 col-lg-3 col-md-6">
              <div className="footer-number">
                <h5 className="invisible">Information</h5>
                <li>Company</li>
                <li>Lift Media</li>
              </div>
            </div>

            <div className="mt-5 col-lg-3 col-md-6">
              <div className="footer-number">
                {/* <h5 className='invisible'>Information</h5> */}
                <h5>Subscribe</h5>
                <div className="d-flex mb-5 align-items-center">
                  <input type="text" placeholder="Your Email" />
                  <div className="send-btn">
                    <i class="fa-solid fa-arrow-right py-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="container">
          <div class="row mt-5">
            <div className="col-lg-4">
              <ul class="social-network social-circle">
                {/* <li><a href="#" class="icoRss" title="Rss"><i class="fa fa-rss"></i></a></li> */}
                <li>
                  <a
                    href="https://www.facebook.com/sslsolution.net"
                    class="icoFacebook"
                    title="Facebook"
                  >
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                {/* <li><a href="#" class="icoGoogle" title="Google +"><i class="fa fa-google-plus"></i></a></li> */}
                <li>
                  <a
                    href="https://www.linkedin.com/in/ssl-solutions-72374621b/?originalSubdomain=pk"
                    class="icoLinkedin"
                    title="Linkedin"
                  >
                    <i class="fa-brands fa-linkedin-in"></i>
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
