// AdminCoursesPanel.js
import React from "react";
import { useNavigate } from "react-router-dom";
import AdminCoursesForm from "./AdminCoursesForm.js";
import Navbar from "../../Components/Navbar.js"
import Footer from "../../Components/Footer.js"
import axios from "axios";


const AdminCoursesPanel = () => {
  const navigate = useNavigate();

  const handleAddCourse = async (newCourse) => {
    try {
      const response = await axios.post(
        "/courses",
        newCourse
      );

      if (response.status === 200) {
        // Course added successfully, update the state or trigger a fetch
        alert("Course added successfully");
        navigate("/courses");
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