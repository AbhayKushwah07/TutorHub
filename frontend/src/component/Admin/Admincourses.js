import React, { useContext, useEffect, useRef, useState } from "react";
import Coursecontext from "../../context/course/Coursecontext";
import "./Nav.css";

export const Admincourses = () => {
  const C_context = useContext(Coursecontext);
  const { course, getcourse,Updatecourse,deleteCourse } = C_context;
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
    id:"",
    t_name:""
  });
  useEffect(() => {
    getcourse();
  });

const update=()=>{
  Updatecourse(ecourse)
  window.location.reload(false);
}

const Delete=(id)=>{
if(window.confirm("Do you really want to delete this course "))
{
  
  deleteCourse(id)
  window.location.reload(false);
}
  
}

  const ref = useRef(null);
  const updatecourse = (curcourse) => {
    ref.current.click();
    
    
    esetcourse({
      id:curcourse.courseid,
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
      t_name:curcourse.t_name
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
                  <form >
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
              <button type="submit" className="btn btn-primary" onClick={update}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div >
          <table>
            {course.map((c) => {
              return (
                <>
                  <tr>
                    <th style={{ backgroundColor: "white" }}>
                      <i
                        className="far fa-edit"
                        id="i1"
                        onClick={() => {
                          updatecourse(c);
                        }}
                      ></i>
                    </th>
                    <th>Course Title</th>
                    <th>Course ID</th>
                    <th>Class</th>
                    <th>Subject</th>
                    <th>Teacher Name</th>
                    <th>Teacher email</th>
                    <th>Location</th>
                    <th>Timing</th>
                    <th>Duration</th>
                    <th>Mode</th>
                    <th>Description</th>
                    <th>Charges/km</th>
                    <th>Fix Fee</th>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: "white" }}>
                      <i className="far fa-trash-alt" id="i2" onClick={()=>{Delete(c.courseid)}}></i>
                    </td>
                    <td>{c.title}</td>
                    <td>{c.courseid}</td>
                    <td>{c.class}</td>
                    <td>{c.subject}</td>
                    <td>{c.t_name}</td>
                    <td>{c.t_email}</td>
                    <td>{c.location}</td>
                    <td>{c.timing}</td>
                    <td>{c.duration}</td>
                    <td>{c.mode}</td>
                    <td>{c.description}</td>
                    <td>{c.varfee}</td>
                    <td>{c.fixfee}</td>
                  </tr>
                  <div style={{ height: "10px" }}></div>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};
export default Admincourses;
