import React from "react";
import "../Pages/css/about.css";
import CountUp from "react-countup";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5 about-bg">
        <div className="row">
          <div className="col-lg-5 mt-5 about-main">
            <h1 className="black about-heading">What does SSL Training do?</h1>
            <p>
              SSL Trainings makes the learning process easy and rewarding
              for both companies and developers. Business owners, startups and
              enterprises can hire pre-vetted US-based remote tech talent across
              100+ skills in 24 hours through our channel. We also provide a
              secure payment system, allowing for smooth transactions between
              companies and developers.
            </p>
          </div>
          <div className="col-lg-2"></div>
          <div className="mt-5 col-lg-5 banner-1">
            <img className="w-100" src="/About/about-1.png"></img>
          </div>
        </div>
      </div>

      {/* Card Start */}
      <div className="container about-test mt-5 text-center">
        <h1 className="mt-5 black">About SSL Training</h1>
        <h4>
          Code together before you work together. See how candidates collaborate
          and communicate on real-life problems.
        </h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row mt-5">
              <div className="col-lg-4 col-md-6">
                <div className="py-5 bg-light shadow-md p-3 mb-5 bg-white rounded card mb-5 w-100 text-center">
                  <div className="about-card-img">
                    <img src="https://testrabbit.co/wp-content/uploads/2023/06/array.svg"></img>
                  </div>
                  <div className="card-body py-3">
                    <h3 className="black">100+ In-Demand Skills</h3>
                    <p className="">
                      Endless Possibilities: Work as remote web developers
                      proficient in Node, Rails, iOS, Android, DevOps, Java,
                      React, ML, PHP/Laravel, Angular, Python, and more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="py-5 card bg-light shadow-md p-3 mb-5 bg-white rounded mb-5 w-100 text-center">
                  <div className="about-card-img">
                    <img src="https://testrabbit.co/wp-content/uploads/2023/06/array.svg"></img>
                  </div>
                  <div className="card-body py-3">
                    <h3 className="black">Accelerate Your Career</h3>
                    <p className="">
                      Experience rapid growth as you tackle intricate technical
                      and business challenges utilizing our cutting-edge tech
                      stack. Your journey to unprecedented professional
                      development starts here.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="py-5 card shadow-md p-3 mb-5 bg-white rounded bg-light mb-5 w-100 text-center">
                  <div className="about-card-img">
                    <img src="https://testrabbit.co/wp-content/uploads/2023/06/array.svg"></img>
                  </div>
                  <div className="card-body py-3">
                    <h3 className="black">Easy Goal Setting</h3>
                    <p className="">
                      Quickly and easily set achievable goals with clear
                      objectives and deadlines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mb-5 about-1-bg">
        <div className="text-light container bg-set">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6">
              <h1>
                <CountUp
                  duration={2}
                  className="counter text-light"
                  end={100}
                />
                +
              </h1>
              <h5>Current Clients</h5>
            </div>
            <div className="col-lg-3 col-md-6">
              <h1>
                <CountUp
                  duration={2}
                  className="counter text-light"
                  end={200}
                />
                +
              </h1>
              <h5>Completed Projects</h5>
            </div>
            <div className="col-lg-3 col-md-6">
              <h1>
                <CountUp duration={2} className="counter text-light" end={10} />
                /m
              </h1>
              <h5>Transactions</h5>
            </div>
            <div className="col-lg-3 col-md-6">
              <h1>
                <CountUp
                  duration={2}
                  className="counter text-light"
                  end={600}
                />
                +
              </h1>
              <h5>Happy Clients</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5 pb-5 info-bg bg-light">
        <div className="container info">
          <h1 className="black pt-5 ">About the Product</h1>
          <h5>
            Thank you for joining SSL Training. We at SSL Training (“SSL
            Training”, “we”, “us”) respect your privacy and want you to
            understand how we collect, use, and share data about you. This
            Privacy Policy covers our data collection practices and describes
            your rights regarding your personal data. Unless we link to a
            different policy or state otherwise, this Privacy Policy applies
            when you visit or use SSL Training websites, mobile applications,
            APIs, or related services (the “Services”). It also applies to
            prospective customers of our business and enterprise products. By
            using the Services, you agree to the terms of this Privacy Policy.
            You shouldn’t use the Services if you don’t agree with this Privacy
            Policy or any other agreement that governs your use of the Services.
          </h5>
          <div className="about-info pt-5">
            <h1 className="black ">Information Collection</h1>
            <h5>
              We collect certain data from you directly, like information you
              enter yourself, data about your consumption of content, and data
              from third-party platforms you connect with SSL Training. We also
              collect some data automatically, like information about your
              device and what parts of our Services you interact with or spend
              time using. All data listed in this section is subject to the
              following processing activities: collecting, recording,
              structuring, storing, altering, retrieving, encrypting,
              pseudonymizing, erasing, combining, and transmitting.
            </h5>
          </div>
        </div>
        <div className="container about-info-image mt-5 mb-5">
          <img
            src="https://testrabbit.co/wp-content/uploads/2023/06/Image.jpg"
            className="w-100"
          ></img>
        </div>
        <div className="container info-heading">
          <h1 className=" black">Non-Identifiable or Aggregated Data</h1>
          <p className="my-text">
            When you access content, we collect certain data including which
            courses, assignments, labs, workspaces, and quizzes you’ve started
            and completed; content and subscription purchases and credits;
            subscriptions; completion certificates; your exchanges with
            instructors, teaching assistants, and other students; and essays,
            answers to questions, and other items submitted to satisfy course
            and related content requirements.
          </p>
          <p className="my-text">
            We use your data to do things like provide our Services, communicate
            with you, troubleshoot issues, secure against fraud and abuse,
            improve and update our Services, analyze how people use our
            Services, serve personalized advertising, and as required by law or
            necessary for safety and integrity. We retain your data for as long
            as it is needed to serve the purposes for which it was collected.
          </p>
          <h2 className="black">Contact SSL Trainings</h2>
          <p className="my-text">
            <a
              href="https://www.google.com/maps/place/SSL+SOLUTIONS/@31.5349517,74.3462811,19z/data=!3m1!4b1!4m6!3m5!1s0x391905d3e3ae6b77:0x157a2f53f97b67c6!8m2!3d31.5349506!4d74.3469248!16s%2Fg%2F11lpw1_rd4?entry=ttu"
              target="_blank"
              className="info-hover"
            >
              {" "}
              Office 303, 3rd Floor, Landmark Plaza Jail Road, Lahore
            </a>{" "}
            <br></br>
            <span></span>
          </p>
          <p className="my-text">
            Telephone:{" "}
            <a href="tel:+923114767758" className="info-hover">
              +92-311-4767758
            </a>
            <br /> <br />
            <span>
              Email:{" "}
              <a href="mailto:contact@ssltraining.com" className="info-hover">
                contact@ssltraining.com
              </a>
            </span>
          </p>
          <br></br>
          <Link to="/contact">
            {" "}
            <button className="contact-btn">Connect SSL Training</button>
          </Link>
        </div>
      </div>

      <div className="container text-center companies pb-5 pt-5">
        <h1 className=" black">Companies we work with</h1>
        <p className="companies-about">
          Trusted by over 15,000 companies and millions of learners around the
          world
        </p>
        <div className="companies-img mt-5">
          <img
            className="w-75"
            src="https://testrabbit.co/wp-content/uploads/2023/06/Logos.jpg"
          ></img>
        </div>
      </div>

      <div className="container text-center companies pb-5 pt-5">
        <h1 className=" black">Integrations</h1>
        <p className="companies-about">
          Our platform empowers thousands of companies to operate their
          platforms seamlessly. They stand in support of us, and they express
          their confidence without hesitation.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="p-2 bg-light rounded-card inte-card mb-5">
              <div className="container about-card-img d-flex">
                <img src="https://testrabbit.co/wp-content/uploads/2023/06/fb-icon.svg"></img>
                <h2 className="mt-3 mx-2">
                  <span className="social-heading">FaceBook</span> <br></br>{" "}
                  <span className="text-muted social">Social</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="p-2 bg-light rounded-card inte-card mb-5">
              <div className="container about-card-img d-flex">
                <img src="https://testrabbit.co/wp-content/uploads/2023/06/twitter-icon.svg"></img>
                <h2 className="mt-3 mx-2">
                  <span className="social-heading">Twitter</span>
                  <br></br> <span className="text-muted social">Social</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="p-2 bg-light rounded-card inte-card mb-5">
              <div className="container about-card-img d-flex">
                <img src="https://testrabbit.co/wp-content/uploads/2023/06/youtube-icon.svg"></img>
                <h2 className="mt-3 mx-2">
                  <span className="social-heading">Youtube</span> <br></br>{" "}
                  <span className="text-muted social">Social</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
