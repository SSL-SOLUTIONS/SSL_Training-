import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import './PannelLinks.css'
const PannelLinks = () => {
  return (
    <>
      <Navbar />
      <div className="pannel-link-wrapper">
        <div className="pannel-links-container">
          <Link to="/adminpannel/courses-pannel">
            <button className="pannel-links-btn">Courses Pannel</button>
          </Link>
          <Link to="/adminpannel/quiz-pannel">
            <button className="pannel-links-btn">Quiz Pannel</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PannelLinks;
