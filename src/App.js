import React, {useState, useEffect} from "react";
import "./App.css";

import Navbar from "./Components/Navbar";
import "./Components/css/navbar.css";
import Swift_Hiring from "./Bottom_Section/Swift_Hiring";
import "./Bottom_Section/css/swift_hiring.css";
import Footer from "./Components/Footer";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing.js";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
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
import AdminCoursesPanel from "./Pages/AdminCoursesPannel/AdminCoursesPannel";
import CourseDetails from "./Pages/CourseDetails/CourseDetails";
import { AuthProvider } from "./AuthContext/AuthContext";


function App() {
  const [user, setUser] = useState({
    role: "user",
  });

   useEffect(() => {
     const fetchUserDetails = async () => {
       try {
         const token = localStorage.getItem("token");

         if (!token) {
           return;
         }

         const response = await fetch("http://localhost:8080/auth/profile", {
           method: "GET",
           headers: {
             Authorization: `Bearer ${token}`,
           },
         });

         if (response.ok) {
           const userData = await response.json();
           setUser(userData.user);
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
          <Router>
            <Routes>
              {user.role !== undefined && (
                <Route path="navbar" element={<Navbar />} />
              )}
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

              <Route path="/courses" element={<Courses />} />
              <Route path="/Footer" element={<Footer />} />
              <Route path="/Signup" element={<SignUp />} />
              <Route path="/Login" element={<Login />} />
              <Route
                path="/admin-panel"
                element={
                  user && user.role === "admin" ? (
                    <AdminCoursesPanel />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route path="/courses/:courseId" element={<CourseDetails />} />
            </Routes>
          </Router>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
