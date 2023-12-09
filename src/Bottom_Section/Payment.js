import React from "react";
import "../Bottom_Section/css/payment.css";
import Still from "./Still";

function Payment() {
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="container main-payment text-center">
          <h1 className="black ">Payment Plans </h1>
        </div>
        <h5 className="text-center evulate-text font-weight-bold">
          Evaluate skill technical position, including software engineer,
          designer, project manager, marketer, data scientist, and QA.
        </h5>

        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10 text-center">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-5 payment-box text-uppercase">
                <div className="top-bg border">
                  <p className="text-light text-center">Hide</p>
                  <div className="content-wrapper">
                    <h6 className="text-right font-weight-bold mx-3 py-4 mt-5">
                      PRICE
                    </h6>
                    <h6 className="text-right invisible font-weight-bold py-2">
                      PRICE
                    </h6>
                    <div className="text-left">
                      <hr />
                      <li>USER</li>
                      <hr />
                      <li>NO. OF ATTEMPTS</li>
                      <hr />
                      <li>ADDITIONS</li>
                      <hr />
                      <li>NO. OF ASSESSMENTS</li>

                      <hr />

                      <li className="invisible">ADDITIONS</li>
                      <hr className="invisible" />
                      <li className="invisible">NO. OF ASSESSMENTS</li>
                      <li className="invisible mb-3">NO. OF ASSESSMENTS</li>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 payment-box">
                <div className="top-bg">
                  <p className="text-center text-light"> Basic</p>
                  <div className="content-wrapper border">
                    <h6 className="text-center font-weight-bold mx-3 py-4">
                      <i>$</i>
                      <span>100</span>/mon
                    </h6>
                    <div className="text-center">
                      <hr />
                      <li>1</li>
                      <hr />
                      <li>Upto 10 attempts per month</li>
                      <hr />
                      <li>$10 per additional attempt</li>
                      <hr />
                      <li>1000+ assessments</li>
                      <hr />
                      <li>Screen and Interview</li>
                      <hr />
                      <li className="mb-4">
                        <button className="btn btn-outline-primary py-2 w-50">
                          Buy Now
                        </button>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-5 payment-box text-uppercase">
                <div className="top-bg">
                  <p className="text-center text-light">
                    Pro Perfect for medium budge
                  </p>
                  <div className="content-wrapper special-border">
                    <h6 className="text-center font-weight-bold mx-3 py-4">
                      <i>$</i>
                      <span>250</span>/mon
                    </h6>
                    <hr />
                    <li>5</li>
                    <hr />
                    <li>Upto 25 attempts per month</li>
                    <hr />
                    <li>$10 per additional attempt</li>
                    <hr />
                    <li>2000+ assessments</li>
                    <hr />
                    <li>Screen and Interview</li>
                    <hr />
                    <li className="mb-4">
                      <button className="btn btn-primary py-2 w-50">
                        Buy now
                      </button>
                    </li>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-5 payment-box mb-5">
                <div className="top-bg">
                  <p className="text-center text-light"> Custom </p>
                  <div className="content-wrapper border">
                    <h6 className="contact text-center font-weight-bold mx-3 py-4">
                      Contact for Pricing
                    </h6>

                    <hr />
                    <li>Custom Number of Users</li>
                    <hr />
                    <li>Custom attempts per month</li>
                    <hr />
                    <li>—</li>
                    <hr />
                    <li>4000+ assessments</li>
                    <hr />
                    <li>Screen and Interview</li>
                    <hr />
                    <li className="mb-4">
                      <button className="btn btn-outline-primary w-50 py-2">
                        Contact Us
                      </button>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>

      <Still />
    </div>
  );
}

export default Payment;
