import React from "react";
import Hire from "./Hire";

function TestRabbit() {
  return (
    <div>
      <div className="container">
        <div className="main-section pb-5">
          <h1 className="mt-5 text-center">
            SSL Training is a go-to platform to streamline your tech recruiting
            process
          </h1>
          <div className="container mt-5">
            <h4 className="font-weight-lighter">
              Generate technical tests for talent in 1 minute
            </h4>
            <a href="" className="text-decoration-none font-italic text-muted">
              Learn More
            </a>{" "}
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div className="container text-center test-img-1">
            <img src="/test-1.jpg" className="w-75"></img>
          </div>
        </div>

        <div className="main-section pb-5">
          <div className="container mt-5">
            <h4 className="font-weight-lighter">
              Treat Candidates with Creative Assessments
            </h4>
            <a href="" className="text-decoration-none font-italic text-muted">
              Learn More
            </a>{" "}
            <i class="fa-solid fa-arrow-right"></i>
            <div className="container text-center test-img-1">
              <img src="/screen_2.jpg" className="w-75"></img>
            </div>
          </div>
        </div>

        <div className="main-section pb-5">
          <div className="container mt-5">
            <h4 className="font-weight-lighter">
              Choose the skilled candidates for hire
            </h4>
            <a href="" className="text-decoration-none font-italic text-muted">
              Learn More
            </a>{" "}
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div className="container text-center test-img-1">
            <img src="/screen3.jpg" className="w-75"></img>
          </div>
        </div>
        <div className="main-section pb-5 pb-5">
          <div className="container mt-5">
            <h4 className="font-weight-lighter">
              Code collectively before working together. Evaluate candidates to
              collaborate and communicate
            </h4>
            <a href="" className="text-decoration-none font-italic text-muted">
              Learn More
            </a>{" "}
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div className="text-center test-img-1">
            <img src="/screen4.jpg" className="w-75"></img>
          </div>
        </div>
      </div>
      <Hire />
    </div>
  );
}

export default TestRabbit;
