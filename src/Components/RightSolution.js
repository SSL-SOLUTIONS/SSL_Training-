import React from "react";
import "../Components/css/rightsolution.css";

function RightSolution() {
  return (
    <div>
      <div className="container">
        <div className="text-light right-bg-image mt-5">
          <div className="row">
            <div className="col-lg-6 col-md-11 mt-5">
              <div className="container mt-5">
                <h1 className="">
                  Right solutions for every step of your technical hiring
                  pipeline
                </h1>
                <p>
                  Start practicing your skills and land the job of your dreams.
                </p>
                <div className="right-input">
                  <input className="" type="email" placeholder="Your email" />{" "}
                  <br />
                  <br />
                  <button className="btn btn-primary">Subscribe</button>
                </div>
              </div>
            </div>

            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSolution;
