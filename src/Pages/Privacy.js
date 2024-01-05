import React from "react";
import { NavLink } from "react-router-dom";
import "../Pages/css/privacy.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Privacy() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid pb-5 bg-light">
        <div className="container">
          <div className="pt-5 policy-text text-center">
            <h1 className="black pt-5">PRIVACY POLICY</h1>
            <h5 className="mb-5">Last updated: 01 December, 2023</h5>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 privacy-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <NavLink to="/Privacy" className="active">
                About SSL Training
              </NavLink>
            </div>
            <div className="col-lg-2">
              <NavLink to="/InformationCollection">
                Information Collection
              </NavLink>
            </div>
            <div className="col-lg-2">
              <NavLink to="/InformationUsage">Information Usage</NavLink>
            </div>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h1 className=" black">About SSL Training</h1>
        <p className="evulate-text">
          Code together before you work together. See how candidates collaborate
          and communicate on real-life problems.
        </p>
      </div>
      <div className="container mb-5 pb-5 banner-1 pt-4 text-center">
        <img className="w-75" src="/screen4.jpg"></img>
      </div>

      <div
        className="container-fluid pb-5"
        style={{ backgroundColor: "#e7f8f1" }}
      >
        <div className="container mt-5">
          <div className="row">
            <div className="mt-5 col-lg-5">
              <div className="mt-5 inner-content">
                <h1 className="black font-weight-bolder ">
                  What does SSL Training do?
                </h1>
                <h4>
                  The SSL Training Evaluation Engine is a complete set of
                  services that will assist you in hiring the greatest
                  developers, evaluating programming expertise, and keeping them
                  engaged with challenging coding exercises, collaborative
                  pair-programming sessions, and gamified coding competitions.
                </h4>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="mt-5 col-lg-6">
              <div className="banner-1">
                <img src="img_02.png" className="w-100"></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5 mt-5 policy">
        <h1 className=" black">Privacy Policy</h1>
        <p className="my-text">
          Thank you for joining SSL Training. We at SSL Training (“SSL Training”, “we”, “us”) respect
          your privacy and want you to understand how we collect, use, and share
          data about you. This Privacy Policy covers our data collection
          practices and describes your rights regarding your personal data.
          Unless we link to a different policy or state otherwise, this Privacy
          Policy applies when you visit or use SSL Training websites, mobile
          applications, APIs, or related services (the “Services”). It also
          applies to prospective customers of our business and enterprise
          products. By using the Services, you agree to the terms of this
          Privacy Policy. You shouldn’t use the Services if you don’t agree with
          this Privacy Policy or any other agreement that governs your use of
          the Services.
        </p>

        <h1 className=" black">Information Collection</h1>
        <p className="my-text">
          We collect certain data from you directly, like information you enter
          yourself, data about your consumption of content, and data from
          third-party platforms you connect with SSL Training. We also collect some
          data automatically, like information about your device and what parts
          of our Services you interact with or spend time using. All data listed
          in this section is subject to the following processing activities:
          collecting, recording, structuring, storing, altering, retrieving,
          encrypting, pseudonymizing, erasing, combining, and transmitting.
        </p>
        <p className="my-text">
          We may collect different data from or about you depending on how you
          use the Services. Below are some examples to help you better
          understand the data we collect. When you create an account and use the
          Services, including through a third-party platform, we collect any
          data you provide directly
        </p>
        <h1 className=" black">Non-Identifiable or Aggregated Data</h1>
        <p className="my-text">
          When you access content, we collect certain data including which
          courses, assignments, labs, workspaces, and quizzes you’ve started and
          completed; content and subscription purchases and credits;
          subscriptions; completion certificates; your exchanges with
          instructors, teaching assistants, and other students; and essays,
          answers to questions, and other items submitted to satisfy course and
          related content requirements.
        </p>
        <p className="my-text">
          We use your data to do things like provide our Services, communicate
          with you, troubleshoot issues, secure against fraud and abuse, improve
          and update our Services, analyze how people use our Services, serve
          personalized advertising, and as required by law or necessary for
          safety and integrity. We retain your data for as long as it is needed
          to serve the purposes for which it was collected.
        </p>
        <br />
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
      </div>

      <Footer />
    </div>
  );
}

export default Privacy;
