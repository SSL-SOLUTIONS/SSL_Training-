import React, { useState } from 'react'
import '../Pages/css/pricing.css'
import RightSolution from '../Components/RightSolution'
import CarouselCard from '../Components/CarouselCard'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Pricing() {

    return (
        <div>
            <Navbar/>
            <div className='container-fluid pricing bg-light'>

                <div className='container main-payment text-center'>
                    <h1 className='black my-font pt-5'>Coding Interview Platform</h1>
                    <p className='text-center evulate-text'>
                        Join our talent network of the world’s best talent to experience full-time, long-term remote work with effective compensation and career growth opportunities.
                    </p>
                </div>

                <div className='row'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-10 text-center'>
                        <div className='row justify-content-center'>
                            <div className='col-lg-3 col-md-5 payment-box text-uppercase'>

                                <div className='top-bg border'>
                                    <p className='text-light text-center'>Hide</p>
                                    <div className='content-wrapper'>
                                        <h6 className='text-right font-weight-bold mx-3 py-4 mt-5'>PRICE</h6>
                                        <h6 className='text-right invisible font-weight-bold py-2'>PRICE</h6>
                                        <div className='text-left'>

                                            <hr />
                                            <li>USER</li>
                                            <hr />
                                            <li>NO. OF ATTEMPTS</li>
                                            <hr />
                                            <li>ADDITIONS</li>
                                            <hr />
                                            <li>NO. OF ASSESSMENTS</li>

                                            <hr />

                                            <li className='invisible'>ADDITIONS</li>
                                            <hr className='invisible' />
                                            <li className='invisible'>NO. OF ASSESSMENTS</li>
                                            <li className='invisible mb-3'>NO. OF ASSESSMENTS</li>

                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className='col-lg-3 col-md-5 payment-box'>
                                <div className='top-bg'>
                                    <p className='text-center text-light'> Basic</p>
                                    <div className='content-wrapper border'>
                                        <h6 className='text-center font-weight-bold mx-3 py-4'><i>$</i><span>100</span>/mon</h6>
                                        <div className='text-center'>
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
                                            <li className='mb-4'>
                                                <button className='btn btn-outline-primary py-2 w-50'>Buy Now</button>
                                            </li>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-5 payment-box text-uppercase'>
                                <div className='top-bg'>
                                    <p className='text-center text-light'>Pro Perfect for medium budge</p>
                                    <div className='content-wrapper special-border'>
                                        <h6 className='text-center font-weight-bold mx-3 py-4'><i>$</i><span>250</span>/mon</h6>
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
                                        <li className='mb-4'>
                                            <button className='btn btn-primary py-2 w-50'>Buy now</button>
                                        </li>
                                    </div>
                                </div>

                            </div>
                            <div className='col-lg-3 col-md-5 payment-box mb-5'>
                                <div className='top-bg'>
                                    <p className='text-center text-light'> Custom </p>
                                    <div className='content-wrapper border'>
                                        <h6 className='contact text-center font-weight-bold mx-3 py-4'>Contact for Pricing</h6>

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
                                        <li className='mb-4'>
                                            <button className='btn btn-outline-primary w-50 py-2'>Contact Us</button>
                                        </li>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='col-lg-1'></div>
                </div>

            </div>

            <div className='container-fluid pt-5 pb-5 mt-5 bg-light'>
                <div className='pt-5 container text-center'>
                    <h1 className='my-font black'>Still Evaluating? Try it out!</h1>
                    <p className='evulate-text '>
                        letsremotify makes the remote hiring process easy and rewarding for both companies and developers. Business owners, startups and enterprises can hire pre-vetted US-based remote tech talent across 100+ skills.
                    </p>
                    <button className='pricing-btn mb-5'>Start a free Trial</button>
                </div>
            </div>


            <div className='container-fluid pt-5 pb-5'>
                <div className='pt-5 container text-center'>
                    <h1 className='my-font black'>Compare Plans</h1>
                    <p className='evulate-text '>
                        Our impact on the world is visible through strong presence, and specialization to assist our highly-skilled talent community in the growing market.
                    </p>
                </div>
            </div>

            <div className='container-fluid bg-light'>
                <div className='container pb-5 text-center pt-5'>
                    <h1 className='black pt-5 my-font'>What Clients Say!</h1>
                    <h4>
                        Error voluptate adipisci. Quas a delectus optio ut. Non consequatur voluptatem quia rerum cum similique enim.
                    </h4>
                    <CarouselCard />
                </div>
            </div>


            <div className='container-fluid pt-5 pb-5'>
                <div className='pt-5 container text-center'>
                    <h1 className='my-font black'>Frequently asked Questions</h1>
                    <p className='evulate-text '>
                        Explore the following FAQs to attain relevant information concerning different aspects of our company, products and services. Feel free to contact us for further information.
                    </p>
                </div>
            </div>

            <div className='container'>
                <div id="accordion">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">

                                <button class="btn btn-link text-decoration-none my-color">
                                    Your Title Goes Here
                                </button>
                                <i className='fa-solid fa-caret-up caret' data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"></i>

                            </h5>
                        </div>

                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-link text-decoration-none collapsed my-color">
                                    Your Title Goes Here
                                </button>
                                <i className='fa-solid fa-caret-up caret' data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"></i>

                            </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <RightSolution />
            <Footer/>
        </div>
    )
}

export default Pricing
