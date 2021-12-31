import React from "react";
import {Link} from "react-router-dom";
import "./home.css";
const Homepage = () => {
  return (
    <>
      <div className="header">
        <h1>Tutor Hub</h1>
        <p>
          A <b>responsive</b> website.
        </p>
        <Link className="btn btn-success" to="/login" role="button">
          Get Started
        </Link>
      </div>

      <div></div>
    </>
  );
};

export default Homepage;
