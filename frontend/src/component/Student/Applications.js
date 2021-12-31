import React, { useContext, useEffect, useRef, useState } from "react";
import Requestcontext from "../../context/request/Requestcontext";
import {Link} from "react-router-dom";
import "./application.css";
const Applications = () => {
  const R_context = useContext(Requestcontext);
  const { request, getSrequest,deleterequest } = R_context;
  const a = {
    "t_name": "",
  "t_email": "a",
  "t_password": "",
  "t_phone": "",
  "t_city": "",
  "t_state": " ",
  "t_area": "",
  "t_pincode": "0",
  "exp": "",
  "description": "",
  "t_dob": "",
  "qualification": "",
  "t_gender": ""
  };
  const ref = useRef(null);
  const [profile, setprofile] = useState(a);
  const see = async (id) => {
    const response = await fetch(
      `http://localhost:5000/teacher/seeteacherprofile/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );

    const json = await response.json();

    setprofile(json);
    ref.current.click();
  };


  const Delete=(id)=>{
    deleterequest(id)
    window.location.reload(false)
  }

  useEffect(() => {
    getSrequest();
  });

  return (
    <>
    
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      ></button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{ width: "90vh" }}>
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Profile
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="settle">
                  <form action="#">
                    <div className="user-details">
                      <div className="input-box">
                        <span className="details">Full name</span>
                        {profile.t_name}
                      </div>
                      <div className="input-box">
                        <span className="details">Gender</span>
                        {profile.t_gender}
                      </div>

                      <div className="input-box">
                        <span className="details">Date of Birth</span>
                        {profile.t_dob}
                      </div>
                      <div className="input-box">
                        <span className="details">Phone Number</span>
                        {profile.t_phone}
                      </div>

                      <div className="input-box">
                        <span className="details">Address</span>
                        {profile.t_area}
                      </div>
                      <div className="input-box">
                        <span className="details">City</span>
                        {profile.t_city}
                      </div>
                      <div className="input-box">
                        <span className="details">State</span>
                        {profile.t_state}
                      </div>
                      <div className="input-box">
                        <span className="details">Pincode</span>
                        {profile.t_pincode}
                      </div>
                      <div className="input-box">
                        <span className="details">Experience(in years)</span>
                        {profile.exp}
                      </div>
                      <div className="input-box">
                        <span className="details">Qualification</span>
                        {profile.qualification}
                      </div>
                      <div className="input-box" style={{ width: "100%" }}>
                        <span className="details">Description</span>
                        {profile.description}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 id="head11">Applications status</h2>
      <div className="Abox">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>Course Title</th>
              <th>Teacher Email</th>
              <th>Status</th>
              <th>Teacher Contact</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {request.map((c) => {
              return (
                <>
                  <tr>
                    <td>{c.title}</td>
                    <td>{c.t_email}</td>
                    <td>{c.status}</td>

                    <td>
                      {c.status === "Accepted" ? (
                        <Link
                          to="/#"
                          onClick={() => {
                            see(c.t_email);
                          }}
                        >
                          view profile
                        </Link>
                      ) : (
                        "Hidden"
                      )}
                    </td>
                    <td>
                      <i id="i01" onClick={()=>{Delete(c.courseid)}} className="far fa-window-close"></i>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Applications;
