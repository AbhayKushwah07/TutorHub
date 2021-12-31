import React, { useContext, useEffect, useRef, useState } from "react";
import Teachercontext from "../../context/teacher/Teachercontext";
import "./TeacherStyle.css";

export const Teacher_profile = () => {
  const T_context = useContext(Teachercontext)
  const {teacher, getteacherD,Updateteacher} = T_context;
  useEffect(() => {
      getteacherD()
  })
  const  update = async () => {
    await Updateteacher(eteacher);
    window.location.reload(false);
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
    
      <div className="container">
        <div className="title">Teacher Profile</div>
        <div className="settle">
        <form >
          
        <div className="user-details">
                      <div className="input-box">
                        <span className="details">Full name</span>
                        <input
                          type="text"
                         
                          
                          value={teacher.t_name}
                          name="name"
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Gender</span>
                        <input
                          type="text"
                      
                          
                          name="gender"
                          value={teacher.t_gender}
                        />
                      </div>

                      <div className="input-box">
                        <span className="details">Date of Birth</span>
                        <input
                          type="text"
                          
                          
                          name="dob"
                          value={teacher.t_dob}
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Phone Number</span>
                        <input
                          type="text"
                          
                          
                          name="phone"
                          value={teacher.t_phone}
                          
                        />
                      </div>

                      <div className="input-box">
                        <span className="details">Address</span>
                        <input
                          type="text"
                          
                          
                          value={teacher.t_area}
                          name="area"
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">City</span>
                        <input
                          type="text"
                       
                          
                          value={teacher.t_city}
                          name="city"
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">State</span>
                        <input
                          type="text"
                       
                          
                          value={teacher.t_state}
                          name="state"
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Pincode</span>
                        <input
                          type="text"
                        
                          value={teacher.t_pincode}
                          
                          
                          name="pincode"
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Experience(in years)</span>
                        <input
                          type="number"
                        
                          
                          name="exp"
                          value={teacher.exp}
                          min={0}
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Qualification</span>
                        <input
                          type="text"
                          
                          
                          value={teacher.qualification}
                          name="qualification"
                        />
                      </div>
                      <div className="input-box" style={{ width: "100%" }}>
                        <span className="details">Description</span>
                        <textarea
                          
                          value={teacher.description}
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

          <div className="button">
            <input type="button" value="EDIT" onClick={()=>{updateteacher(teacher)}} />
            
            
            
          </div>
         
        </form>
        </div>
      </div>
    </>
  );
};

export default Teacher_profile;
