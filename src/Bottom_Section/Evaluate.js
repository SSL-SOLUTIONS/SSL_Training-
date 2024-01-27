import React from "react";
import "../Bottom_Section/css/Evaluate.css";
import Payment from "./Payment";

function Evaluate() {
  return (
    <div>
      {/* /            <div className='containers mt-5'> */}
      <div className="container pt-5">
        <h2 className="mt-5 pt-5 black text-center ">
          Evaluate Candidates Quickly & Accurately
        </h2>
        <h5 className="text-center test">
          SSL Training’s scalable and secure platform gives you the power to
          deliver meaningful technical assessments that are tailored to your
          individual needs. With our AI-powered analytics, comprehensive
          reporting, and real-time tracking of progress, SSL Training is the
          perfect one-stop solution for your hiring process.
        </h5>
      </div>

      <div className="container-fluid evaluate-main">
        <div className="row">
          <div className="col-lg-4 tab">
            <div className="content border rounded text-center">
              <div className="mt-4 eveluate-image">
                <img src="https://testrabbit.co/wp-content/uploads/2023/05/easy-goal-setting.svg"></img>
              </div>
              <h3 className="mt-2">Casual Hiring</h3>
              <p className="m-4">
                It’s essential to hire as soon as possible. As a result, use our
                text-powered solutions to keep your prospects informed.
              </p>
            </div>
          </div>

          <div className="col-lg-4 tab">
            <div className="content border rounded text-center">
              <div className="mt-4 eveluate-image">
                <img src="https://testrabbit.co/wp-content/uploads/2023/05/personalized-tracking.svg"></img>
              </div>
              <h3 className="mt-3">Tech Skills Assessment</h3>
              <p className="m-4">
                Screen your applicants and extract real-time scores in order to
                reveal the strongest candidates for the technical
                <interview className=""></interview>
              </p>
            </div>
          </div>

          <div className="col-lg-4 tab">
            <div className="content border rounded text-center">
              <div className="mt-4 eveluate-image">
                <img src="https://testrabbit.co/wp-content/uploads/2023/05/actionable-insights.svg"></img>
              </div>
              <h3 className="mt-3">Live Tech Interviews</h3>
              <p className="m-4">
                Watch them code or invite them to join you. Assure they’re the
                right fit by recreating how you’d collaborate to accomplish it.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-1">
          <div className="col-lg-4 tab">
            <div className="content border rounded text-center">
              <div className="mt-4 eveluate-image">
                <img src="https://testrabbit.co/wp-content/uploads/2023/05/collaboration.svg"></img>
              </div>
              <h3 className="mt-3">Take-Home Projects</h3>
              <p className="m-4">
                Take a look at how someone approaches a project by giving them
                the opportunity to work on it in their free time.
              </p>
            </div>
          </div>

          <div className="col-lg-4 tab">
            <div className="content border rounded text-center">
              <div className="mt-4 eveluate-image">
                <img src="https://testrabbit.co/wp-content/uploads/2023/05/mobile-accessibility.svg"></img>
              </div>
              <h3 className="mt-3">Courses</h3>
              <p className="m-4">
                By providing a link to a test or take-home project at colleges,
                you may broaden your recruiting pool with new talent.
              </p>
            </div>
          </div>

          <div className="col-lg-4 tab">
            <div className="content border mb-5 rounded text-center">
              <div className="mt-4 eveluate-image">
                <img src="https://testrabbit.co/wp-content/uploads/2023/05/easy-goal-setting.svg"></img>
              </div>
              <h3 className="mt-3">Professional Learning</h3>
              <p className="m-4">
                You need a learning solution that lets your teams operate faster
                than their competitors while also maintaining high standards.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Payment />
    </div>

    // </div>
  );
}

export default Evaluate;
