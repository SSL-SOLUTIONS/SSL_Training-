// Course.js
import React from "react";
import "./Course.css";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";

const Course = (props) => {
  const ratingChanged = (newRating) => {};
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/courses/${props.id}`);
  };

  return (
    <div className="container-course" onClick={handleClick}>
      <div className="course-image-cont">
        <img
          className="image-img"
          src={`http://localhost:8080/uploads/courses/${props.img}`}
          alt="img"
        />
      </div>
      <div className="course-text">
        <h4>{props.title}</h4>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={22}
          activeColor="#ffd700"
        />
        <h6 style={{ fontWeight: "bolder" }}>Rs. {props.price} </h6>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Course;
