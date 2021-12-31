import React, { useContext, useEffect, useRef, useState } from "react";
import "./Nav.css";
import Studentcontext from "../../context/student/Studentcontext";
export const Adminstudent = () => {
  const S_context = useContext(Studentcontext);
  const { student, getallstudent, Updatestudent, deleteStudent } = S_context;
  useEffect(() => {
    getallstudent();
  });

  const update = () => {
    Updatestudent(estudent);
    window.location.reload(false);
  };

  const del = async (id) => {
    const response = await fetch(
      `http://localhost:5000/login/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        
        },
      }
    );

   console.log(response)

  
  };
  const Delete = async (id) => {
    if (window.confirm("Do you really want to delete this course ")) {

      deleteStudent(id);
      await del(id);

      window.location.reload(false);
    }
  };
  const [estudent, esetstudent] = useState({
    email: "",
    name: "",

    phone: "",
    Class: "",
    school: "",
    city: "",
    state: "",
    area: "",
    pincode: "",
    fathername: "",
    dob: "",
    gender: "",
  });
  const ref = useRef(null);
  const updatestudent = (curstudent) => {
    ref.current.click();

    esetstudent({
      email: curstudent.s_email,
      name: curstudent.s_name,

      phone: curstudent.s_phone,
      Class: curstudent.class,
      school: curstudent.school,
      city: curstudent.s_city,
      state: curstudent.s_state,
      area: curstudent.s_area,
      pincode: curstudent.s_pincode,
      fathername: curstudent.fathername,
      dob: curstudent.s_dob,
      gender: curstudent.s_gender,
    });
  };

  const onChange = async (e) => {
    esetstudent({ ...estudent, [e.target.name]: e.target.value });
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
              <div class="container">
                <div class="settle">
                  <form action="#">
                    <div class="user-details">
                      <div class="input-box">
                        <span class="details">Full name</span>
                        <input
                          type="text"
                          placeholder=" Enter name"
                          onChange={onChange}
                          value={estudent.name}
                          name="name"
                        />
                      </div>
                      <div class="custom-select" style={{ width: "300px" }}>
                        <span class="gender-title">Gender</span>
                        <select
                          class="form-select form-select-lg"
                          style={{ border: "2px solid #2691d9" }}
                          onChange={onChange}
                          name="gender"
                        >
                          <option style={{ display: "none" }} selected>
                            {estudent.gender}
                          </option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Others</option>
                        </select>
                      </div>

                      <div class="input-box">
                        <span class="details">Date of Birth</span>
                        <input
                          type="date"
                          placeholder=" Enter Date of Birth"
                          onChange={onChange}
                          name="dob"
                          value={estudent.dob}
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">Phone Number</span>
                        <input
                          type="text"
                          placeholder=" Enter  Number"
                          onChange={onChange}
                          name="phone"
                          value={estudent.phone}
                          pattern="[6-9]{1}[0-9]{9}"
                        />
                      </div>

                      <div class="input-box">
                        <span class="details">Address</span>
                        <input
                          type="text"
                          placeholder=" Enter address"
                          onChange={onChange}
                          value={estudent.area}
                          name="area"
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">City</span>
                        <input
                          type="text"
                          placeholder=" Enter  City"
                          onChange={onChange}
                          value={estudent.city}
                          name="city"
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">State</span>
                        <input
                          type="text"
                          placeholder=" Enter  State"
                          onChange={onChange}
                          value={estudent.state}
                          name="state"
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">Pincode</span>
                        <input
                          type="text"
                          placeholder=" Enter  Pincode"
                          value={estudent.pincode}
                          pattern="[0-9]{6}"
                          onChange={onChange}
                          name="pincode"
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">FatherName</span>
                        <input
                          type="text"
                          placeholder=" Enter  Father name"
                          onChange={onChange}
                          name="fathername"
                          value={estudent.fathername}
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">School</span>
                        <input
                          type="text"
                          placeholder=" Enter address"
                          onChange={onChange}
                          value={estudent.school}
                          name="school"
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">Class</span>
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
                            {estudent.Class}
                          </option>
                        </select>
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
      <div className="content">
        <div>
          <table>
            {student.map((c) => {
              return (
                <>
                  <tr>
                    <th style={{ backgroundColor: "white" }}>
                      <i
                        className="far fa-edit"
                        id="i1"
                        onClick={() => {
                          updatestudent(c);
                        }}
                      ></i>
                    </th>
                    <th>Name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>Class</th>
                    <th>School</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Area</th>
                    <th>Pincode</th>
                    <th>Father Name</th>

                    <th>Dob</th>
                    <th>Gender</th>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: "white" }}>
                      <i
                        className="far fa-trash-alt"
                        id="i2"
                        onClick={() => {
                          Delete(c.s_email);
                        }}
                      ></i>
                    </td>

                    <td>{c.s_name}</td>
                    <td>{c.s_email}</td>
                    <td>{c.s_phone}</td>
                    <td>{c.class}</td>
                    <td>{c.school}</td>
                    <td>{c.s_city}</td>
                    <td>{c.s_state}</td>
                    <td>{c.s_area}</td>
                    <td>{c.s_pincode}</td>
                    <td>{c.fathername}</td>
                    <td>{c.s_dob}</td>
                    <td>{c.s_gender}</td>
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
export default Adminstudent;
