import React, { useContext, useEffect, useRef, useState } from "react";
import "./Nav.css";
import Teachercontext from "../../context/teacher/Teachercontext";
export const Adminteacher = () => {
  const T_context = useContext(Teachercontext);
  const { teacher, getallteacher, Updateteacher, deleteteacher } = T_context;
  useEffect(() => {
    getallteacher();
  });

  const update = () => {
    Updateteacher(eteacher);
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
  }
  
  const Delete = (id) => {
    if (window.confirm("Do you really want to delete this teacherprofile ")) {
      deleteteacher(id);
      del(id)
      window.location.reload(false);
    }
  };
  const [eteacher, esetteacher] = useState({
    email: "",
    name: "",
    phone: "",
    city: "",
    state: "",
    area: "",
    pincode: "",
    exp: "",
    dob: "",
    gender: "",
    description: "",
    qualification: "",
  });
  const ref = useRef(null);
  const updateteacher = (curteacher) => {
    ref.current.click();

    esetteacher({
      email: curteacher.t_email,
      name: curteacher.t_name,

      phone: curteacher.t_phone,
      qualification: curteacher.qualification,
      description: curteacher.description,
      city: curteacher.t_city,
      state: curteacher.t_state,
      area: curteacher.t_area,
      pincode: curteacher.t_pincode,
      exp: curteacher.exp,
      dob: curteacher.t_dob,
      gender: curteacher.t_gender,
    });
  };

  const onChange = async (e) => {
    esetteacher({ ...eteacher, [e.target.name]: e.target.value });
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
                        <span className="details">Full name</span>
                        <input
                          type="text"
                          placeholder=" Enter name"
                          onChange={onChange}
                          value={eteacher.name}
                          name="name"
                        />
                      </div>
                      <div className="custom-select" style={{ width: "300px" }}>
                        <span className="gender-title">Gender</span>
                        <select
                          className="form-select form-select-lg"
                          style={{ border: "2px solid #2691d9" }}
                          onChange={onChange}
                          name="gender"
                        >
                          <option style={{ display: "none" }} selected>
                            {eteacher.gender}
                          </option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Others</option>
                        </select>
                      </div>

                      <div className="input-box">
                        <span className="details">Date of Birth</span>
                        <input
                          type="date"
                          placeholder=" Enter Date of Birth"
                          onChange={onChange}
                          name="dob"
                          value={eteacher.dob}
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Phone Number</span>
                        <input
                          type="text"
                          placeholder=" Enter  Number"
                          onChange={onChange}
                          name="phone"
                          value={eteacher.phone}
                          pattern="[6-9]{1}[0-9]{9}"
                        />
                      </div>

                      <div className="input-box">
                        <span className="details">Address</span>
                        <input
                          type="text"
                          placeholder=" Enter address"
                          onChange={onChange}
                          value={eteacher.area}
                          name="area"
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">City</span>
                        <input
                          type="text"
                          placeholder=" Enter  City"
                          onChange={onChange}
                          value={eteacher.city}
                          name="city"
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">State</span>
                        <input
                          type="text"
                          placeholder=" Enter  State"
                          onChange={onChange}
                          value={eteacher.state}
                          name="state"
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Pincode</span>
                        <input
                          type="text"
                          placeholder=" Enter  Pincode"
                          value={eteacher.pincode}
                          pattern="[0-9]{6}"
                          onChange={onChange}
                          name="pincode"
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Experience(in years)</span>
                        <input
                          type="number"
                          placeholder=" Enter  EXP"
                          onChange={onChange}
                          name="exp"
                          value={eteacher.exp}
                          min={0}
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Qualification</span>
                        <input
                          type="text"
                          placeholder=" Enter qualification"
                          onChange={onChange}
                          value={eteacher.qualification}
                          name="qualification"
                        />
                      </div>
                      <div className="input-box" style={{ width: "100%" }}>
                        <span className="details">Description</span>
                        <textarea
                          onChange={onChange}
                          value={eteacher.description}
                          name="description"
                          
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
      <div className="content">
        <div>
          <table>
            {teacher.map((c) => {
              return (
                <>
                  <tr>
                    <th style={{ backgroundColor: "white" }}>
                      <i
                        className="far fa-edit"
                        id="i1"
                        onClick={() => {
                          updateteacher(c);
                        }}
                      ></i>
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>phone</th>
                    <th>Qualification</th>
                    <th>exp</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Area</th>
                    <th>Pincode</th>

                    <th>Dob</th>
                    <th>Gender</th>
                    <th>About</th>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: "white" }}>
                      <i
                        className="far fa-trash-alt"
                        id="i2"
                        onClick={() => {
                          Delete(c.t_email);
                        }}
                      ></i>
                    </td>

                    <td>{c.t_name}</td>
                    <td>{c.t_email}</td>
                    <td>{c.t_phone}</td>
                    <td>{c.qualification}</td>
                    <td>{c.exp}</td>
                    <td>{c.t_city}</td>
                    <td>{c.t_state}</td>
                    <td>{c.t_area}</td>
                    <td>{c.t_pincode}</td>
                   
                    <td>{c.t_dob}</td>
                    <td>{c.t_gender}</td>
                    <td>{c.description}</td>
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
export default Adminteacher;
