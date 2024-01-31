import React from "react";
import "../Bottom_Section/css/question.css";
import RightSolution from "../Components/RightSolution";

const Question = () => {
  return (
    <div className="container-fluid question-bg">
      <div className="container question-wrapper text-center mt-5 mb-5">
        <h1 className="pt-5 black">Frequently asked questions</h1>
        <h5 className="color mb-3">
          Discover answers to various questions in our extensive FAQs section.
        </h5>
      </div>
      <section className="btc-accordion">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="accordion" id="accordionExample">
                {/* Question 1 */}
                <div className="card bg-light">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="according-icon btn text-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What is SSL Training?
                      </button>
                      <i
                        className="fas fa-chevron-down float-right"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      ></i>
                    </h5>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body text-dark">
                      SSL Trainings makes the learning process easy and
                      rewarding for both companies and developers.
                    </div>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="card bg-light">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button
                        className="according-icon btn text-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        Is it possible to apply online for admission?
                      </button>
                      <i
                        className="fas fa-chevron-down float-right"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      ></i>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body text-dark">
                      Yes, it is possible for a candidate can apply for a
                      particular course online. Visit the Official Website here,
                      you can find the details and online application form. The
                      procedure makes it easy for the candidate outside Lahore
                      to register for a particular course and start learning.
                    </div>
                  </div>
                </div>

                {/* Question 3 */}
                <div className="card bg-light">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="according-icon btn text-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        What can cause the rejection of an admission
                        application?
                      </button>
                      <i
                        className="fas fa-chevron-down float-right"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      ></i>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body text-dark">
                      SSL training has the right to accept or reject the
                      admission application to any of its courses. The rejection
                      usually occurs if the candidate does not fulfill the
                      admission requirement or is not up to the selection
                      criteria for a particular course.
                    </div>
                  </div>
                </div>

                {/* Question 4 */}
                <div className="card bg-light">
                  <div className="card-header" id="headingFour">
                    <h5 className="mb-0">
                      <button
                        className="according-icon btn text-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="true"
                        aria-controls="collapseFour"
                      >
                        Is it possible to freeze my course?
                      </button>
                      <i
                        className="fas fa-chevron-down float-right"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      ></i>
                    </h5>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body text-dark">
                      Yes, the candidate can freeze the course, but in this
                      context, he or she has to pay the full fee for that
                      particular course. Moreover, this option can be opted only
                      within 7 days from the beginning of the classes.
                    </div>
                  </div>
                </div>

                {/* Question 5 */}
                <div className="card bg-light">
                  <div className="card-header" id="headingFive">
                    <h5 className="mb-0">
                      <button
                        className="according-icon btn text-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="true"
                        aria-controls="collapseFive"
                      >
                        How can I pay through JazzCash?
                      </button>
                      <i
                        className="fas fa-chevron-down float-right"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      ></i>
                    </h5>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body text-dark">
                      Using JazzCash, you can pay through below 3 options:{" "}
                      <br /> • Mobile Account <br /> • Voucher Payment <br /> •
                      Credit / Debit card
                    </div>
                  </div>
                </div>

                {/* Question 6 */}
                <div className="card bg-light">
                  <div className="card-header" id="headingSix">
                    <h5 className="mb-0">
                      <button
                        className="according-icon btn text-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseSix"
                        aria-expanded="true"
                        aria-controls="collapseSix"
                      >
                        Is there any priority for admission?
                      </button>
                      <i
                        className="fas fa-chevron-down float-right"
                        data-toggle="collapse"
                        data-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      ></i>
                    </h5>
                  </div>
                  <div
                    id="collapseSix"
                    className="collapse"
                    aria-labelledby="headingSix"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body text-dark">
                      SSL Trainings does not prioritize admissions on any
                      standard. All the programs are first-come, first-serve
                      basis. Once all the seats are filled, we will not take any
                      further enrolments.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RightSolution />
    </div>
  );
};

export default Question;
