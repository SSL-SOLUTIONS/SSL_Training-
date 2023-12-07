// AdminCoursesPanel.js
import React from "react";
import { useNavigate } from "react-router-dom";
import AdminCoursesForm from "./AdminCoursesForm.js";
import Navbar from "../../Components/Navbar.js"
import Footer from "../../Components/Footer.js"


const AdminCoursesPanel = () => {
  const navigate = useNavigate();

  const handleAddCourse = async (newCourse) => {
    try {
      const response = await fetch("http://localhost:8080/courses", {
        method: "POST",
        body: newCourse,
      });

      if (response.ok) {
        // Course added successfully, update the state or trigger a fetch
        alert("Course added successfully");
        navigate('/courses');
      } else {
        // Handle error
        console.error("Failed to add course");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar/>
      <AdminCoursesForm onAddCourse={handleAddCourse}/>
      <Footer/>
    </div>
  );
};

export default AdminCoursesPanel;