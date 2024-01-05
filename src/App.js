import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./Components/Navbar";
import "./Components/css/navbar.css";
import Swift_Hiring from "./Bottom_Section/Swift_Hiring";
import "./Bottom_Section/css/swift_hiring.css";
import Footer from "./Components/Footer";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing.js";
import { Route, Routes, Navigate } from "react-router-dom";
import Privacy from "./Pages/Privacy";
import Contact from "./Pages/Contact";

import InformationCollection from "./Pages/PrivacyPolicyPages/InformationCollection";
import InformationUsage from "./Pages/PrivacyPolicyPages/InformationUsage";

import Category1 from "./Pages/BlogCategory/Category1";
import Category2 from "./Pages/BlogCategory/Category2";
import Category3 from "./Pages/BlogCategory/Category3";
import Uncategorized from "./Pages/BlogCategory/Uncategorized";
import SignUp from "./SignUp/SignUp";
import Login from "./SignUp/Login";
import Courses from "./Pages/courses/Courses";
import Quiz from "./Pages/Quiz/Quiz";
import AdminCoursesPanel from "./Pages/AdminCoursesPannel/AdminCoursesPannel";
import CourseDetails from "./Pages/CourseDetails/CourseDetails";
import { AuthProvider } from "./AuthContext/AuthContext";
import PannelLinks from "./Pages/PannelLinks/PannelLinks";
import QuizForm from "./Pages/Quiz/Form/QuizForm";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Demo from "./Pages/Demo/Demo";
import axios from "axios";

function App() {
  const [user, setUser] = useState({
    role: "user",
  });
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          return;
        }

        const response = await axios.get("/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setUser(response.data.user);
        } else if (response.status === 403) {
          console.log("Access Forbidden:", response.statusText);
        } else {
          console.error("Failed to fetch user details");
        }
      } catch (error) {
        console.error("Error fetching user details:", error.message);
      }
    };

    fetchUserDetails();
  }, []);
  return (
    <>
      <AuthProvider user={user}>
        <div className="main">
          {/* Restrict navbar links to user's role */}
          <Routes>
            {user.role !== undefined && (
              <Route path="navbar" element={<Navbar />} />
            )}
            <Route path="/Footer" element={<Footer />} />
            <Route path="/" element={<Swift_Hiring />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/InformationCollection"
              element={<InformationCollection />}
            />
            <Route path="/InformationUsage" element={<InformationUsage />} />

            <Route path="/Category1" element={<Category1 />} />
            <Route path="/Category2" element={<Category2 />} />
            <Route path="/Category3" element={<Category3 />} />
            <Route path="/Uncategorized" element={<Uncategorized />} />

            {/* Courses */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />

            {/* Quiz Pannel */}
            <Route
              path="/adminpannel/quiz-pannel"
              element={
                user && user.role === "admin" ? (
                  <QuizForm />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            {/* Courses Pannel */}
            <Route
              path="/adminpannel/courses-pannel"
              element={
                user && user.role === "admin" ? (
                  <AdminCoursesPanel />
                ) : (
                  <Navigate to="/" />
                )
              }
            />

            {/* Quiz Page */}
            <Route path="/quiz" element={<Quiz />} />

            {/* SIGNUP & LOGIn */}
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />

            {/*  PANNEL LINKS*/}
            <Route
              path="/adminpanel"
              element={
                user && user.role === "admin" ? (
                  <PannelLinks />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route path="/request-demo" element={<Demo />} />

            {/* User Profile page */}
            <Route
              path="/user-profile"
              element={
                user && token ? <UserProfile /> : <Navigate to="/login" />
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
