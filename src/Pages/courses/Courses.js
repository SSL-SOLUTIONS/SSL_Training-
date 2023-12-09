// Courses.js
import React, { useState, useEffect } from "react";
import "./Courses.css";
import Course from "../../Components/course/Course";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:8080/courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, []); // Empty dependency array to ensure it runs only once

  const filteredCourses = courses.filter((item) => {
    // Filter by category
    if (selectedCategory !== "All" && item.category !== selectedCategory) {
      return false;
    }
    // Filter by search term
    if (
      searchTerm &&
      !item.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    // Sort by price
    const priceA = a.price;
    const priceB = b.price;
    return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="search-categ">
        {/* Search and Sort Section */}
        <div className="search-sort-input">
          <label htmlFor="search">Search: </label>
          <input
            name="search"
            type="text"
            className="cat-search"
            placeholder="Search by title"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="search-sort-price">
          <label>Sort by Price:</label>
          <select value={sortOrder} onChange={handleSortChange}>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
        {/* Categories Section */}
        <div className="categories filter">
          <label>Filter by Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="All">All</option>
            <option value="development">Development</option>
            <option value="amazon">Amazon</option>
            <option value="google">Google</option>
            <option value="freelancing">Free Lancing</option>
            <option value="marketing">Digital Marketing</option>
            <option value="intelligence">Intelligence</option>
            <option value="microsoft">Microsoft</option>
            <option value="database">Database</option>
            <option value="photography">Photography</option>
            <option value="english">Writing</option>
            <option value="designing">Graphics Design</option>
          </select>
        </div>
      </div>

      {/* Display Courses */}
      <div className="container-grid">
        {sortedCourses.map((item) => (
          <Course
            key={item.id}
            id={item.id}
            img={item.image}
            title={item.title}
            desc={item.description}
            price={item.price}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Courses;
