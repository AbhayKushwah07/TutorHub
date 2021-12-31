import React, { useContext, useEffect, useRef, useState } from "react";
import Requestcontext from "../../context/request/Requestcontext";
import {Link} from "react-router-dom";
import "../Student/application.css";
const Request = () => {
  const R_context = useContext(Requestcontext);
  const { request, getTrequest,Updaterequest } = R_context;
  const a = {};
  const ref = useRef(null);
  const [profile, setprofile] = useState(a);

  const update=(id,status)=>{
Updaterequest(id,status)
window.location.reload(false)
  }
  const see = async (id) => {
  
    const response = await fetch(
      `http://localhost:5000/student/seestudentprofile/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );

    const json = await response.json();
  

     setprofile(json)
    ref.current.click();
   
     
  };

  useEffect(() => {
    getTrequest();
  });

  return (
      <>

<div className="detail">
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
                        {profile.s_name}
                      </div>
                      <div className="input-box" >
                        <span className="details">Gender</span>
                        {profile.s_gender}
                       
                      </div>

                      <div className="input-box">
                        <span className="details">Date of Birth</span>
                        {profile.s_dob}
                        
                      </div>
                      <div className="input-box">
                        <span className="details">Phone Number</span>
                        {profile.s_phone}
                       
                      </div>

                      <div className="input-box">
                        <span className="details">Address</span>
                          {profile.s_area}
                       
                      </div>
                      <div className="input-box">
                        <span className="details">City</span>
                        {profile.s_city}
                        
                      </div>
                      <div className="input-box">
                        <span className="details">State</span>
                        {profile.s_state}
                        
                      </div>
                      <div className="input-box">
                        <span className="details">Pincode</span>
                        {profile.s_pincode}
                        
                      </div>
                      <div className="input-box">
                        <span className="details">Class</span>
                        {profile.class}
                       
                      </div>
                      <div className="input-box">
                        <span className="details">School</span>
                        {profile.school}
                        
                      </div>
                      <div className="input-box" style={{ width: "100%" }}>
                        <span className="details">Father Name</span>
                        {profile.fathername}
                       
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
</div>

      <h2 id="head11">Request status</h2>
    <div className="Abox">

      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Student Email</th>
            <th>Profile</th>
            <th>       </th>
          </tr>
        </thead>
        <tbody>
          {request.map((c) => {
            return (
              <>
                <tr>
                  <td>{c.title}</td>
                  <td>{c.s_email}</td>

                  <td>
                   
                      <Link
                        to="/#"
                        onClick={() => {
                          see(c.s_email);
                        }}
                        >
                        view profile
                      </Link>
                   
                  </td>
                  <td>{c.status==="Sent"?(<p><i id="i11" onClick={()=>{update(c.courseid,"Accepted")}} style={{padding:"10px"}} className="fas fa-check"></i> <i id="i01"  onClick={()=>{update(c.courseid,"Rejected")}}  className="far fa-window-close"></i></p>):(c.status==="Accepted"?("Accepted"):"Rejected")}</td>
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

export default Request;
