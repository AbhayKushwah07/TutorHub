import React, { useContext, useEffect, useRef, useState } from "react";

import Coursecontext from "../../context/course/Coursecontext";
import "./sd.css";
export const Courses = () => {
  const context = useContext(Coursecontext);
  const { course, getteachercourse, deleteCourse, Updatecourse } = context;

  useEffect(() => {
    getteachercourse();
  });

  const [ecourse, esetcourse] = useState({
    title: "",
    location: "",
    subject: "",
    Class: "",
    timing: "",
    duration: "",
    mode: "",
    fixfee: 0,
    varfee: 0,
    description: "",
    id: "",
    t_name: "",
  });
  const onClick = async (e) => {
    if (window.confirm("Do you realy want to delete this course")) {
      await deleteCourse(e);

      window.location.reload(false);
    }
  };
  const update = () => {
    Updatecourse(ecourse);
    window.location.reload(false);
  };

  const ref = useRef(null);
  const updatecourse = (curcourse) => {
    ref.current.click();

    esetcourse({
      id: curcourse.courseid,
      title: curcourse.title,
      location: curcourse.location,
      subject: curcourse.subject,
      Class: curcourse.class,
      timing: curcourse.timing,
      duration: curcourse.duration,
      mode: curcourse.mode,
      fixfee: curcourse.fixfee,
      varfee: curcourse.varfee,
      description: curcourse.description,
      t_name: curcourse.t_name,
    });
  };
  const onChange = async (e) => {
    esetcourse({ ...ecourse, [e.target.name]: e.target.value });
  };
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
                Edit
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
                        <span className="details">Course Title</span>
                        <input
                          type="text"
                          onChange={onChange}
                          value={ecourse.title}
                          name="title"
                          placeholder=" Enter your Course Title"
                          required
                        />
                      </div>

                      <div className="input-box">
                        <span className="details">Location</span>
                        <input
                          type="text"
                          value={ecourse.location}
                          placeholder=" Enter Course ID"
                          onChange={onChange}
                          name="location"
                          required
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Class</span>
                        <select
                          className="form-select form-select-lg"
                          style={{ border: "1px solid#2691d9" }}
                          onChange={onChange}
                          name="Class"
                        >
                          <option>6th</option>
                          <option>7th</option>
                          <option>8th</option>
                          <option>9th</option>
                          <option>10th</option>
                          <option>11th</option>
                          <option>12th</option>
                          <option style={{ display: "none" }} selected>
                            {ecourse.Class}
                          </option>
                        </select>
                      </div>
                      <div className="input-box">
                        <span className="details">Subject</span>
                        <input
                          type="text"
                          value={ecourse.subject}
                          placeholder=" Enter Subjects"
                          onChange={onChange}
                          name="subject"
                          required
                        />
                      </div>

                      <div className="input-box">
                        <span className="details">Timing</span>
                        <input
                          type="text"
                          value={ecourse.timing}
                          placeholder=" Enter timing"
                          onChange={onChange}
                          name="timing"
                          required
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Duration</span>
                        <input
                          type="Text"
                          value={ecourse.duration}
                          placeholder="Duration (in Hours)"
                          onChange={onChange}
                          name="duration"
                          required
                        />
                      </div>
                      <div
                        className="custom-select"
                        style={{ width: "300px", "font-weight": "500" }}
                      >
                        <span className="Mode">Mode of Teaching</span>
                        <select
                          className="form-select form-select-lg"
                          style={{ border: "1px solid#2691d9" }}
                          onChange={onChange}
                          name="mode"
                        >
                          <option style={{ display: "none" }} selected>
                            {ecourse.mode}
                          </option>
                          <option>Public</option>
                          <option>Private</option>
                          <option>Online</option>
                        </select>
                      </div>
                      <div className="input-box">
                        <span className="details">Fixed Fee</span>
                        <input
                          type="number"
                          min="0"
                          placeholder="(in INR)"
                          value={ecourse.fixfee}
                          onChange={onChange}
                          name="fixfee"
                          required
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Charges/Km</span>
                        <input
                          type="number"
                          min="0"
                          placeholder="(in INR)"
                          value={ecourse.varfee}
                          onChange={onChange}
                          name="varfee"
                          required
                        />
                        *fill none if this course is not private
                      </div>

                      <div className="input-box" style={{ width: "100%" }}>
                        <span className="details">Description</span>
                        <textarea
                          onChange={onChange}
                          value={ecourse.description}
                          name="description"
                          placeholder="Write about course.."
                          style={{
                            height: "70px",
                            width: "100%",
                            "border-color": "#2691d9",
                            "border-radius": "5px",
                          }}
                        ></textarea>
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
              <button
                type="submit"
                className="btn btn-primary"
                onClick={update}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="a">
        <div style={{ backgroundColor: "green", position: "relative" }}>
          <h1 style={{ "text-align": "center", color: "white" }}>MY COURSES</h1>
        </div>
        {course.map((c) => {
          return (
            <>
              <div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      <u>{c.title}</u>
                    </h5>
                    <p className="card-text">{c.description}</p>
                  </div>

                  <ul className="list-group list-group-flush">
                    <div className="row">
                      <div className="col-md-6">
                        <li className="list-group-item">
                          <b>Subject :</b> {c.subject}
                        </li>

                        <li className="list-group-item">
                          <b>Timing :</b> {c.timing}
                        </li>
                        <li className="list-group-item">
                          <b>Duration :</b> {c.duration}
                        </li>
                        <li className="list-group-item">
                          <b>By :</b> {c.t_name}
                        </li>
                      </div>
                      <div className="col-md-6">
                        <li className="list-group-item">
                          <b>Mode :</b> {c.mode}
                        </li>
                        <li className="list-group-item">
                          <b>Location :</b> {c.location}
                        </li>

                        <li className="list-group-item">
                          <b>FixFees :</b> {c.fixfee}(₹)&emsp;(per month)
                        </li>
                        <li className="list-group-item">
                          <b>Charges/Km :</b> {c.varfee}(₹)&emsp;(for Private
                          Mode)
                        </li>
                      </div>
                    </div>
                  </ul>

                  <div className="card-body">
                    <b>Class: {c.class}</b>
                    <i
                      className="fas fa-trash-alt"
                      id="icon1"
                      style={{ float: "right" }}
                      onClick={() => {
                        onClick(c.courseid);
                      }}
                    >
                      {" "}
                    </i>
                    <i
                      className="fas fa-edit"
                      id="icon2"
                      style={{ float: "right", "margin-right": "20px" }}
                      onClick={() => {
                        updatecourse(c);
                      }}
                    >
                      {" "}
                    </i>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Courses;
