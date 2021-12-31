import React, { useContext, useEffect, useRef, useState } from "react";

import Studentcontext from "../../context/student/Studentcontext";
export const Student_profile = () => {
  const S_context = useContext(Studentcontext);
  const { student, getstudentD, Updatestudent } = S_context;
  useEffect(() => {
    getstudentD();
  });

  const update = () => {
    Updatestudent(estudent);
    window.location.reload(false);
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
                          value={estudent.name}
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
                            {estudent.gender}
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
                          value={estudent.dob}
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Phone Number</span>
                        <input
                          type="text"
                          placeholder=" Enter  Number"
                          onChange={onChange}
                          name="phone"
                          value={estudent.phone}
                          pattern="[6-9]{1}[0-9]{9}"
                        />
                      </div>

                      <div className="input-box">
                        <span className="details">Address</span>
                        <input
                          type="text"
                          placeholder=" Enter address"
                          onChange={onChange}
                          value={estudent.area}
                          name="area"
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">City</span>
                        <input
                          type="text"
                          placeholder=" Enter  City"
                          onChange={onChange}
                          value={estudent.city}
                          name="city"
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">State</span>
                        <input
                          type="text"
                          placeholder=" Enter  State"
                          onChange={onChange}
                          value={estudent.state}
                          name="state"
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Pincode</span>
                        <input
                          type="text"
                          placeholder=" Enter  Pincode"
                          value={estudent.pincode}
                          pattern="[0-9]{6}"
                          onChange={onChange}
                          name="pincode"
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">FatherName</span>
                        <input
                          type="text"
                          placeholder=" Enter  Father name"
                          onChange={onChange}
                          name="fathername"
                          value={estudent.fathername}
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">School</span>
                        <input
                          type="text"
                          placeholder=" Enter address"
                          onChange={onChange}
                          value={estudent.school}
                          name="school"
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

      <div className="container">
        <div className="title">Student Profile</div>
        <div className="settle">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full name</span>
                <input type="text" value={student.s_name} name="name" />
              </div>
              <div className="input-box">
                <span className="details">Gender</span>
                <input type="text" value={student.s_gender} name="gender" />
              </div>

              <div className="input-box">
                <span className="details">Date of Birth</span>
                <input type="text" name="dob" value={student.s_dob} />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  type="text"
                  name="phone"
                  value={student.s_phone}
                  pattern="[6-9]{1}[0-9]{9}"
                />
              </div>

              <div className="input-box">
                <span className="details">Address</span>
                <input type="text" value={student.s_area} name="area" />
              </div>
              <div className="input-box">
                <span className="details">City</span>
                <input type="text" value={student.s_city} name="city" />
              </div>
              <div className="input-box">
                <span className="details">State</span>
                <input type="text" value={student.s_state} name="state" />
              </div>
              <div className="input-box">
                <span className="details">Pincode</span>
                <input
                  type="text"
                  value={student.s_pincode}
                  pattern="[0-9]{6}"
                  name="pincode"
                />
              </div>
              <div className="input-box">
                <span className="details">FatherName</span>
                <input
                  type="text"
                  name="fathername"
                  value={student.fathername}
                />
              </div>
              <div className="input-box">
                <span className="details">School</span>
                <input type="text" value={student.school} name="school" />
              </div>
              <div className="input-box">
                <span className="details">Class</span>
                <input type="text" value={student.class} name="Class" />
              </div>
            </div>
            <div className="button">
              <input
                type="button"
                value="EDIT"
                onClick={() => {
                  updatestudent(student);
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Student_profile;
