import React from "react";
import "./TeacherStyle.css";
import { Link } from "react-router-dom";
export const Teacherhome = () => {
  return (
    <>
      <div className="sidebar3">
        <Link
          className="active"
          to="/teacherdashboard"
          style={{ "font-size": "18px", "text-align": "center" }}
        >
          Home
        </Link>
        <Link to="/teacher/profile">Profile</Link>
        <Link to="/teacher/requests">Requests</Link>
        <Link to="/teacher/addcourse">Add Courses</Link>
      </div>
    </>
  );
};
export default Teacherhome;
