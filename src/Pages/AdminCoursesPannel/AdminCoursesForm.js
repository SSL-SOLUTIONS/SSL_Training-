// AdminCoursesForm.js
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AdminCoursesForm = ({ onAddCourse }) => {
  const [course, setCourse] = useState({
    title: "",
    image: null,
    description: "",
    price: "",
    category: "",
    duration: "",
    skillLevel: "",
    objectives: "",
    scope: "",
    benefits: "",
    videoUrl: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // Handle file input separately
    if (type === "file") {
      setCourse((prevCourse) => ({
        ...prevCourse,
        [name]: e.target.files[0], // Use the first file for simplicity
      }));
    } else {
      setCourse((prevCourse) => ({
        ...prevCourse,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form data before adding the course
    if (
      !course.title ||
      !course.image ||
      !course.description ||
      !course.price ||
      !course.category ||
      !course.scope ||
      !course.duration ||
      !course.skillLevel ||
      !course.benefits ||
      !course.objectives ||
      !course.videoUrl
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Create FormData to handle file upload
    const formData = new FormData();
    formData.append("title", course.title);
    formData.append("image", course.image);
    formData.append("description", course.description);
    formData.append("price", course.price);
    formData.append("category", course.category);
    formData.append("duration", course.duration);
    formData.append("videoUrl", course.videoUrl);
    formData.append("benefits", course.benefits);
    formData.append("objectives", course.objectives);
    formData.append("scope", course.scope);
    formData.append("skillLevel", course.skillLevel);

    // Pass the new course to the parent component
    onAddCourse(formData);

    // Reset the form
    setCourse({
      title: "",
      image: null,
      description: "",
      price: "",
      category: "",
      duration: "",
      skillLevel: "",
      objectives: "",
      scope: "",
      benefits: "",
      videoUrl: "",
    });
  };

  return (
    <div className="container mb-5 mt-5">
      <h2>Add New Course</h2>
      <Form onSubmit={handleSubmit} style={{margin: "0px"}}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label className="fw-bolder">Title:</Form.Label>
          <Form.Control
            type="text"
            name="title"
            className="border-success"
            value={course.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label className="fw-bolder">Description: </Form.Label>
          <Form.Control
            name="description"
            className="border-success"
            type="text"
            value={course.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label className="fw-bolder">Price: </Form.Label>
          <Form.Control
            type="number"
            name="price"
            className="border-success"
            value={course.price}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label className="fw-bolder">Category:</Form.Label>
          <Form.Control
            type="text"
            name="category"
            className="border-success"
            value={course.category}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label className="fw-bolder">Image Upload:</Form.Label>
          <Form.Control
            type="file"
            name="image"
            className="border-success"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDuration">
          <Form.Label className="fw-bolder">Duration:</Form.Label>
          <Form.Control
            type="text"
            name="duration"
            className="border-success"
            value={course.duration}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicSkillLevel">
          <Form.Label className="fw-bolder">Skill level:</Form.Label>
          <Form.Control
            type="text"
            value={course.skillLevel}
            className="border-success"
            name="skillLevel"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTextArea">
          <Form.Label className="fw-bolder">Objectives:</Form.Label>
          <textarea
            name="objectives"
            className="form-control text-break border-success"
            id="exampleFormControlTextarea1"
            rows="3"
            value={course.objectives}
            onChange={handleChange}
          ></textarea>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicScope">
          <Form.Label className="fw-bolder">Scope:</Form.Label>
          <textarea
            name="scope"
            className="form-control text-break border-success"
            id="exampleFormControlTextarea2"
            rows="3"
            onChange={handleChange}
            value={course.scope}
          ></textarea>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicBenefits">
          <Form.Label className="fw-bolder">Benefits:</Form.Label>
          <textarea
            name="benefits"
            className="form-control text-break border-success"
            id="exampleFormControlTextarea3"
            rows="3"
            value={course.benefits}
            onChange={handleChange}
          ></textarea>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicURL">
          <Form.Label className="fw-bolder">Video URL:</Form.Label>
          <Form.Control
            className="border-success"
            type="text"
            name="videoUrl"
            onChange={handleChange}
            value={course.videoUrl}
          />
        </Form.Group>
        <Button
          style={{
            backgroundColor: "rgb(18, 135, 111)",
            border: "1px solid #12876F",
          }}
          type="submit"
          className="pl-5 pr-5 pt-3 pb-3"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AdminCoursesForm;
