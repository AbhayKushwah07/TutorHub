import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="sidebar2">
        <Link
          className="active"
          to="/studentdashboard"
          style={{ "font-size": "18px", align: "center" }}
        >
          Home
        </Link>
        <Link to="/student/profile">Edit Profile</Link>
        <Link to="/student/applications">Application Status</Link>
      </div>
    </>
  );
};
export default Navbar;
