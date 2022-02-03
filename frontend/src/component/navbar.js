import React from "react";

import { Link } from "react-router-dom";

const onclick = () => {
  localStorage.removeItem("token");
};

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            TutorHub
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            <Link
              className=" btn btn-outline-success "
              onClick={onclick}
              to="/"
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
