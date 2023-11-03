import React from 'react';
import '../Bottom_Section/css/question.css';
import RightSolution from '../Components/RightSolution';

const Question = () => {
    return (
        <div className='container-fluid question-bg'>
            <div className='container question-wrapper text-center mt-5'>
                <h1 className='pt-5 black my-font'>Frequently asked questions</h1>
                <h5 className='color'>Discover answers to various questions in our extensive FAQs section.</h5>
            </div>
            <section className="btc-accordion">
                <div className="container">
                    <br />
                    <div className="row">
                        <div className="col-md-12">
                            <div className="accordion" id="accordionExample">
                                <div className="card bg-light">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <button className='according-icon btn text-dark'>
                                                What is SSL Training?
                                            </button>
                                            <i className="accordion-icon btn fas fa-angle-down float-right" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"></i>

                                        </h5>
                                    </div>
                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div className="card-body text-dark">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Id velit ut tortor pretium viverra suspendisse potenti nullam ac.
                                        </div>
                                    </div>
                                </div>

                                <div className="card bg-light">
                                    <div className="card-header" id="headingTwo">
                                        <h5 className="mb-0">
                                            <button className="accordion-icon btn">
                                                What type of candidates does SSL Training target?
                                            </button>
                                            <i className="accordion-icon btn mt-1 accordion-icon btn fas fa-angle-down float-right" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"></i>

                                        </h5>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div className="card-body text-dark">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Id velit ut tortor pretium viverra suspendisse potenti nullam ac.
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-light">
                                    <div className="card-header" id="headingThree">
                                        <h5 className="mb-0">
                                            <button className="accordion-icon btn" >
                                                Does SSL Training offer any support services?
                                            </button>
                                            <i className="accordion-icon btn mt-1 fas fa-angle-down float-right" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"></i>

                                        </h5>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div className="card-body text-dark">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Id velit ut tortor pretium viverra suspendisse potenti nullam ac.
                                        </div>
                                    </div>
                                </div>

                                <div className="card bg-light">
                                    <div className="card-header" id="headingFour">
                                        <h5 className="mb-0">
                                            <button className="accordion-icon btn" >
                                                How does SSL Training make hiring more efficient?
                                            </button>
                                            <i className="accordion-icon btn mt-1 fas fa-angle-down float-right" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree"></i>

                                        </h5>
                                    </div>
                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                        <div className="card-body text-dark">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Id velit ut tortor pretium viverra suspendisse potenti nullam ac.
                                        </div>
                                    </div>
                                </div>

                                <div className="card bg-light">
                                    <div className="card-header" id="headingFive">
                                        <h5 className="mb-0">
                                            <button className="accordion-icon btn" >
                                                How can SSL Training help me find the best talent for my company?
                                            </button>
                                            <i className="accordion-icon btn mt-1 fas fa-angle-down float-right" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree"></i>

                                        </h5>
                                    </div>
                                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                        <div className="card-body text-dark">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Id velit ut tortor pretium viverra suspendisse potenti nullam ac.
                                        </div>
                                    </div>
                                </div>

                                <div className="card bg-light">
                                    <div className="card-header" id="headingSix">
                                        <h5 className="mb-0">
                                            <button className="accordion-icon btn" >
                                                What kind of questions am I expected to answer?
                                            </button>
                                            <i className="accordion-icon btn mt-1 fas fa-angle-down float-right" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree"></i>

                                        </h5>
                                    </div>
                                    <div id="collapseSix" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div className="card-body text-dark">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Id velit ut tortor pretium viverra suspendisse potenti nullam ac.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <RightSolution/>
        </div>
    );
}

export default Question;
