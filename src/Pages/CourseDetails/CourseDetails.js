import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Axios from "axios";
import "./CourseDetails.css";
import { FaRegClock } from "react-icons/fa6";
import { SiLevelsdotfyi } from "react-icons/si";

const CourseDetails = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [courseDetails, setCourseDetails] = useState({
    title: "",
    duration: "",
    skillLevel: "",
    objectives: "",
    scope: "",
    benefits: "",
    videoUrl: "",
  });

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await Axios.get(
          `http://localhost:8080/courses/${courseId}`
        );
        const fetchedCourseDetails = response.data;
        setCourseDetails(fetchedCourseDetails);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  const handleClick = ()=>{
    navigate('/contact')
  }
  return (
    <>
      <Navbar />
      <div className="course-details-container">
        <div className="course-hero-section">
          <div className="hero-left">
            <div className="hero-text">
              <h2>{courseDetails.title}</h2>
              <h5>{courseDetails.description}</h5> <br />
              <span>
                {" "}
                <FaRegClock className="hero-icon" />
                Duration: {courseDetails.duration}
              </span>
              <span>
                <SiLevelsdotfyi className="hero-icon" />
                Skill Level: {courseDetails.skillLevel}
              </span>
              <br /> <br />
              <button onClick={handleClick} className="hero-btn">
                Book Now
              </button>
            </div>{" "}
          </div>
          <div className="hero-right">
            <iframe
              title="Course Video"
              width="560"
              height="315"
              src={courseDetails.videoUrl}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="course-details-section">
          <h4>Course Description:</h4>
          <h1>{courseDetails.title}</h1>
          <div className="details-sections">
            <br /> <h3>Why is this course helpful?</h3> <br />
            <p>{courseDetails.objectives}</p>
          </div>
          <div className="details-sections">
            <br /> <h3>Objectives of this course</h3> <br />
            <p>{courseDetails.objectives}</p>
          </div>
          <div className="details-sections">
            <br /> <h3>Scope of the course</h3> <br />
            <p>{courseDetails.scope}</p>
          </div>
          <div className="details-sections">
            <br /> <h3>Benefits</h3> <br />
            <p>{courseDetails.benefits}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseDetails;
