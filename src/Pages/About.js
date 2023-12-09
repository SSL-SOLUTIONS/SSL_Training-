import React from "react";
import "../Pages/css/about.css";
import CountUp from "react-countup";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function About() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5 about-bg">
        <div className="row">
          <div className="col-lg-5 mt-5 about-main">
            <h1 className="black about-heading">What does SSL Training do?</h1>
            <p>
              SSL Solutions makes the remote hiring process easy and rewarding
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
                    <h3 className="black">Easy Goal Setting</h3>
                    <p className="">
                      Quickly and easily set achievable goals with clear
                      objectives and deadlines.
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
                    <h3 className="black">Easy Goal Setting</h3>
                    <p className="">
                      Quickly and easily set achievable goals with clear
                      objectives and deadlines.
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
                <CountUp duration={2} className="counter text-light" end={6} />
              </h1>
              <h5>Happy Clients</h5>
            </div>
            <div className="col-lg-3 col-md-6">
              <h1>
                <CountUp duration={2} className="counter text-light" end={11} />
              </h1>
              <h5>Completed Projects</h5>
            </div>
            <div className="col-lg-3 col-md-6">
              <h1>
                <CountUp duration={2} className="counter text-light" end={7} />
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
              </h1>
              <h5>Happy Clients</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5 pb-5 info-bg bg-light">
        <div className="container info">
          <h1 className="black pt-5 ">About the Product</h1>
          <h4>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using is that it has a more-or-less normal distribution of
            letters, as opposed to using ‘Content here, content here’, making it
            look like readable English. Many desktop publishing packages and web
            page editors now use as their default model text, and a search for
            ‘’ will uncover many web sites still in their infancy.
          </h4>
          <div className="about-info pt-5">
            <h1 className="black ">Information Collection</h1>
            <h4>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using is that it has a more-or-less normal distribution
              of letters, as opposed to using ‘Content here, content here’,
              making it look like readable English. Many desktop publishing
              packages and web page editors now use as their default model text,
              and a search for ‘’ will uncover many web sites still in their
              infancy.
            </h4>
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
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using is that it has a more-or-less normal distribution of
            letters, as opposed to using ‘Content here, content here’, making it
            look like readable English. Many desktop publishing packages and web
            page editors now use as their default model text, and a search for
            ‘’ will uncover many web sites still in their infancy.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using is that it has a more-or-less normal distribution of
            letters, as opposed to using ‘Content here, content here’, making it
            look like readable English. Many desktop publishing packages and web
            page editors now use as their default model text, and a search for
            ‘’ will uncover many web sites still in their infancy.
          </p>
          <h2 className="black contacting">Contacting letsremotify</h2>
          <p>
            You may address any questions or concerns about letsremotify Privacy
            Policy or data handling policies of this Service to
            support@sslsoltution.com by email or letter, as follows:
          </p>
          <br></br>
          <p>
            Address: Office # 303, 3rd Floor, Landmark Plaza, Jail road,
            Lahore., <br></br>
          </p>
          <p>
            Telephone: <span className="info-hover">+92-311-4767758</span>{" "}
            <br></br>{" "}
            <span>
              Email: <span className="info-hover">contact@ssltraining.com</span>
            </span>
          </p>
          <br></br>
          <button className="contact-btn">Connect SSL Solution</button>
        </div>
      </div>

      <div className="container text-center companies pb-5 pt-5">
        <h1 className=" black">Companies we work with</h1>
        <p className="companies-about">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using is that it has a more-or-less normal distribution of letters, as
          opposed.
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
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using is that it has a more-or-less normal distribution of letters, as
          opposed.
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
              <div className="card-body">
                <h3 className="black">Easy Goal Setting</h3>
                <p className="">
                  dolor sit amet, consectetur adipiscing elit. Proin consectetur
                  justo quis euismod vehicula. Quisque diam dui, imperdiet{" "}
                  <br />
                  <br />
                  <a href="">View integrations</a>
                </p>
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
              <div className="card-body">
                <h3 className="black">Easy Goal Setting</h3>
                <p className="">
                  dolor sit amet, consectetur adipiscing elit. Proin consectetur
                  justo quis euismod vehicula. Quisque diam dui, imperdiet{" "}
                  <br />
                  <br />
                  <a href="">View integrations</a>
                </p>
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
              <div className="card-body">
                <h3 className="black">Easy Goal Setting</h3>
                <p className="">
                  dolor sit amet, consectetur adipiscing elit. Proin consectetur
                  justo quis euismod vehicula. Quisque diam dui, imperdiet{" "}
                  <br />
                  <br />
                  <a href="">View integrations</a>
                </p>
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
