import React from "react";
import { NavLink } from "react-router-dom";
import "../css/blog.css";
import RightSolution from "../../Components/RightSolution";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

function Category1() {
  return (
    <div>
      <Navbar />
      <div className="containerr-fluid pt-5 contact-bg">
        <div className="container mb-5 pb-5 text-center">
          <h1 className="black pt-5">Coding Interview Platform</h1>
          <h6 className="blog-para">
            Join our talent network of the world’s best talent to experience
            full-time, long-term remote work with effective compensation and
            career growth opportunities.
          </h6>
          <div className="blog-search justify-content-center mt-3 d-flex">
            <input type="text" placeholder="Search by Title"></input>
            <select className="blog-search">
              <option disabled aria-hidden="true">
                ALL Category
              </option>
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
              <option>Category 4</option>
            </select>
            <div className="search-btn">
              <button className="">Search</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container blog-item py-2">
        <div className="row pt-3">
          <div className="col-lg-1">
            <li>
              <NavLink to="/blog">All</NavLink>
            </li>
          </div>
          <div className="col-lg-2">
            <li>
              <NavLink to="/Category1">Category 1</NavLink>
            </li>
          </div>
          <div className="col-lg-2">
            <li>
              <NavLink to="/Category2">Category 2</NavLink>
            </li>
          </div>
          <div className="col-lg-2">
            <li>
              <NavLink to="/Category3">Category 3</NavLink>
            </li>
          </div>
          <div className="col-lg-2">
            <li>
              <NavLink to="/Uncategorized">Uncategorized</NavLink>
            </li>
          </div>

          <div className="col-lg-3"></div>
        </div>
      </div>

      <div className="container">
        <hr />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 card-set">
            <div className="card bg-white">
              <img
                src="http://testrabbit.co/wp-content/uploads/2023/05/unsplash_NWcH4mbPRZg.jpg"
                className="w-100 rounded-0 h-100"
              ></img>
              <div className="container">
                <h3 className="mt-3">Breaking News</h3>
                <p className="mt-3 blog-set">
                  <i className="fa-solid fa-user ml-2 mr-1"></i>Ali,{" "}
                  <span className="text-center">
                    <i className="fa-solid fa-calendar-days ml-5 mr-1"></i> May 2023
                  </span>
                </p>
                <hr></hr>
                <p>
                  SSL Trainings makes the learning process easy and
                  rewarding for both companies and developers. Business owners,
                  startups and enterprises can hire pre-vetted US-based remote
                  tech talent across 100+ skills in…
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 card-set">
            <div className="card bg-white">
              <img
                src="http://testrabbit.co/wp-content/uploads/2023/05/unsplash_NWcH4mbPRZg.jpg"
                className="w-100 rounded-0 h-100"
              ></img>
              <div className="container">
                <h3 className="mt-3">Breaking News</h3>
                <p className="mt-3 blog-set">
                  <i className="fa-solid fa-user ml-2 mr-1"></i>Ali,{" "}
                  <span className="text-center">
                    <i className="fa-solid fa-calendar-days ml-5 mr-1"></i> May 2023
                  </span>
                </p>
                <hr></hr>
                <p>
                  SSL Trainings makes the learning process easy and
                  rewarding for both companies and developers. Business owners,
                  startups and enterprises can hire pre-vetted US-based remote
                  tech talent across 100+ skills in…
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 card-set mb-4">
            <div className="card bg-white">
              <img
                src="http://testrabbit.co/wp-content/uploads/2023/05/unsplash_NWcH4mbPRZg.jpg"
                className="w-100 rounded-0 h-100"
              ></img>
              <div className="container">
                <h3 className="mt-3">Breaking News</h3>
                <p className="mt-3 blog-set">
                  <i className="fa-solid fa-user ml-2 mr-1"></i>Ali,{" "}
                  <span className="text-center">
                    <i className="fa-solid fa-calendar-days ml-5 mr-1"></i> May 2023
                  </span>
                </p>
                <hr></hr>
                <p>
                  SSL Trainings makes the learning process easy and
                  rewarding for both companies and developers. Business owners,
                  startups and enterprises can hire pre-vetted US-based remote
                  tech talent across 100+ skills in…
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 card-set">
            <div className="card bg-white">
              <img
                src="http://testrabbit.co/wp-content/uploads/2023/05/unsplash_NWcH4mbPRZg.jpg"
                className="w-100 rounded-0 h-100"
              ></img>
              <div className="container">
                <h3 className="mt-3">Breaking News</h3>
                <p className="mt-3 blog-set">
                  <i className="fa-solid fa-user ml-2 mr-1"></i>Ali,{" "}
                  <span className="text-center">
                    <i className="fa-solid fa-calendar-days ml-5 mr-1"></i> May 2023
                  </span>
                </p>
                <hr></hr>
                <p>
                  SSL Trainings makes the learning process easy and
                  rewarding for both companies and developers. Business owners,
                  startups and enterprises can hire pre-vetted US-based remote
                  tech talent across 100+ skills in…
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RightSolution />

      <Footer />
    </div>
  );
}

export default Category1;
