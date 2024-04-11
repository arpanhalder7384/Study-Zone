import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }} className="flex justify-center items-center h-screen w-screen">
      <div>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
        <p style={{ fontSize: "18px", marginBottom: "30px" }} >

          <h3>This project was created by Arpan Halder</h3>
          <br />

          Quickly use below links to navigate through all pages.
        </p>
        <ul style={{ listStyle: "none", padding: "0" }}>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/" style={{ color: "#87CEFA", textDecoration: "none" }}>
              EduviCoursesDetails
            </Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/eduvishop" style={{ color: "#87CEFA", textDecoration: "none" }}>
              EduviShop
            </Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/eduvicourses" style={{ color: "#87CEFA", textDecoration: "none" }}>
              EduviCourses
            </Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/eduvicoursespricing" style={{ color: "#87CEFA", textDecoration: "none" }}>
              EduviCoursesPricing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Home;
