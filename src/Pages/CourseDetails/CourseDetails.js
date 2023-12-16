// CourseDetails.js
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
    instructorName: "",
    instructorDescription: "",
    instructorImage: "",
  });
  const [moreCourses, setMoreCourses] = useState([]);

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

    const fetchMoreCourses = async () => {
      try {
        const response = await Axios.get(
          `http://localhost:8080/courses/more/${courseId}`
        );
        const fetchedMoreCourses = response.data;
        setMoreCourses(fetchedMoreCourses);
      } catch (error) {
        console.error("Error fetching more courses:", error);
      }
    };

    fetchCourseDetails();
    fetchMoreCourses();
  }, [courseId]);

  const handleClick = () => {
    // Check if the user is authenticated
    const token = localStorage.getItem("token");

    // If the token is not present, redirect to the login page
    if (!token) {
      navigate("/login");
    }
  };
  const handleCourseClick = (courseId) => {
    // Redirect to the details page of the clicked course
    navigate(`/courses/${courseId}`);
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

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
              src={`https://www.youtube.com/embed/${courseDetails.videoUrl}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Top Companies */}
        <div className="top-companies">
          <div className="container-fluid bg-light py-3">
            <div className="row">
              <div className="col-12">
                <div className="slider-content">
                  <div className="swiper-container">
                    <h4>Top companies offer this course to their employees</h4>
                    <span>
                      This course was selected for our collection of top-rated
                      courses trusted by businesses worldwide.
                    </span>
                    <div className="swiper-wrapperr d-flex ">
                      <div className="swiper-slide">
                        <div className="slide-image ">
                          <img
                            className="slide-img img-fluid"
                            src="https://letsremotify.com/wp-content/uploads/2023/08/livewire.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="slide-image">
                          <img
                            className="slide-img img-fluid"
                            src="https://letsremotify.com/wp-content/uploads/2023/08/eduleaf-1.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="slide-image">
                          <img
                            className="slide-img img-fluid"
                            src="https://letsremotify.com/wp-content/uploads/2023/08/redrover.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="image-slide">
                          <div className="slide-image">
                            <img
                              className="slide-img img-fluid"
                              src="https://letsremotify.com/wp-content/uploads/2023/08/showgizmo.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="slide-image">
                          <img
                            className="slide-img img-fluid"
                            src="https://letsremotify.com/wp-content/uploads/2023/08/context.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="slide-image">
                          <img
                            className="slide-img img-fluid"
                            src="https://letsremotify.com/wp-content/uploads/2023/08/smarter-sorting.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="slide-image">
                          <img
                            className="slide-img img-fluid"
                            src="https://letsremotify.com/wp-content/uploads/2023/08/zooppa.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="slide-image">
                          <img
                            className="slide-img img-fluid"
                            src="https://letsremotify.com/wp-content/uploads/2023/08/intellirent.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="slide-image">
                          <img
                            className="slide-img img-fluid"
                            src="https://letsremotify.com/wp-content/uploads/2023/08/kudo.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="course-details-section">
          <h4>Course Content:</h4>
          <h2 className="ml-3">{courseDetails.title}</h2>
          <div className="details-sections">
            <h3>Why is this course helpful?</h3> <br />
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

      <div className="course-instructor-cont">
        <div className="inst-img">
          <img
            src={`http://localhost:8080/uploads/courses/${courseDetails.instructorImage}`}
            alt=""
          />
          <h4>{courseDetails.instructorName}</h4>
        </div>
        <div className="inst-txt">
          <h3>Course Instructor:</h3> <br />
          <p>{courseDetails.instructorDescription}</p>
        </div>
      </div>

      {/* Additional Courses Section */}
      <div className="additional-courses-section">
        <h3>More Courses Offered:</h3>
        <div className="additional-courses-list">
          {moreCourses.map((course) => (
            <div
              className="course-more"
              key={course.id}
              onClick={() => handleCourseClick(course.id)}
            >
              <div className="img">
                <img
                  className="image-img"
                  src={`http://localhost:8080/uploads/courses/${course.image}`}
                  alt="img"
                />
              </div>
              <div className="more-course-txt">
                <h5>{course.title}</h5>
                <span>
                  <b>Rs. </b>
                  {course.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseDetails;
