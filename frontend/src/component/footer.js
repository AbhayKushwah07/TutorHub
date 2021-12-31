import React from "react";
import "./footer.css";
import {Link} from "react-router-dom";
const footer = () => {
  return (
    <div className="footer">
      <div className="main"> Change is the end result of all true learning.</div>

      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Tutor<span>Hub</span>
          </h3>

          <p className="footer-links">
            <h5>Founder</h5>
            <h6>Abhay Kushwah</h6>
            <h6>Priyam Jain</h6>
          </p>

          <p className="footer-company-name">Tutor Hub &copy; 2021</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Gwalior </span> INDIA(Madhya Pradesh)
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+91 8225095582</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <Link href="mailto:abhaykushwah07@gmail.com">tutorhub@gmail.com</Link>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            The purpose of “Tutor Finder” website is to assist the
            students/parents to find private tutors in an interactive manner.
          </p>

          <div className="footer-icons">
            <Link to="/#">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/#">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="/#">
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footer;
