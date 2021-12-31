import React ,{useState,useContext} from "react";
import "./TeacherStyle.css";


import Validation from "./Valid1";
import Coursecontext from "../../context/course/Coursecontext";
export const AddCourse = () => {
  const C_context = useContext(Coursecontext)
  const {AddCourse}=C_context;

  
  const[course,setcourse]=useState({title:"",location:"",subject:"",Class:"6th",timing:"",duration:"30min",mode:"",fixfee:0,varfee:0,description:""})
  const handleClick=(e)=>{
    e.preventDefault();
    if(Validation())
    {
      AddCourse(course);
      alert("course added");
      window.location.reload(false);
    }

    

 
  }

  const onChange=async(e)=>{
   
     setcourse({...course,[e.target.name]: e.target.value})

  }
  return (
    <>
      <div className="container">
        <div className="title">Fill Course Details</div>
        <div className="settle">
          <form name="myForm" action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Course Title</span>
                <input
                  type="text"
                  onChange={onChange}
                  name="title"
                  placeholder=" Enter your Course Title"
                  
                />
              </div>

              <div className="input-box" >
                <span className="details">Location</span>
                <input type="text" placeholder=" Enter Course ID" onChange={onChange} name="location"   />
              </div>
              <div className="input-box" >
                <span className="details">Class</span>
                <select
                  className="form-select form-select-lg"
                  style={{ border: "1px solid#2691d9" }}
                  onChange={onChange}
                  name="Class"
                  
                >
                  
                  <option >6th</option>
                  <option>7th</option>
                  <option>8th</option>
                  <option>9th</option>
                  <option>10th</option>
                  <option>11th</option>
                  <option>12th</option>
                </select>
              </div>
              <div className="input-box" >
                <span className="details">Subject</span>
                <input type="text" placeholder=" Enter Course ID" onChange={onChange} name="subject"   />
              </div>

              <div className="input-box" >
                <span className="details">Timing</span>
                <input placeholder="Selected time" type="time" id="time" name="timing"  onChange={onChange}/>
              </div>
              
              <div className="input-box" >
                <span className="details">Duration(in hours)</span>
                <select
                  className="form-select form-select-lg"
                  style={{ border: "1px solid#2691d9" }}
                  onChange={onChange}
                  name="duration"
                  
                >
                  
                  <option >30 min</option>
                  <option>1 Hour</option>
                  <option>1.5 Hour</option>
                  <option>2 Hour</option>
                  <option>3 Hour</option>
                  <option>4 Hour</option>
                  <option>More than 4 Hour</option>
                </select>
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
                  
                  <option>Public</option>
                  <option>Private</option>
                  <option>Online</option>
                </select>
              </div>
              <div className="input-box" >
                <span className="details">Fixed Fee(₹)</span>
                <input type="number" placeholder="(in INR)"  onChange={onChange} name="fixfee" defaultValue={0} min="0"  />
              </div>
              <div className="input-box" >
                <span className="details">Charges/Km(₹)</span>
                <input type="number" placeholder="(in INR)" onChange={onChange} name ="varfee" defaultValue={0} min="0"/>
                *fill 0 if this course is not private
              </div>
              
              <div className="input-box"  style={{ width: "100%" }}>
                <span className="details">Description</span>
                <textarea
                onChange={onChange}
                name ="description"
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

            <div className="button"   >
              <input type="submit" value="Add Course"  onClick={handleClick} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddCourse;
