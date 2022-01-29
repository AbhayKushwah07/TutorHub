import React, { useState } from "react";
import "./signup.css";
import{ useHistory} from "react-router-dom";


export const Signup = () => {
  var check = function() {
    if (document.getElementById('password').value ===
      document.getElementById('confirm_password').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
      document.getElementById("button").disabled = false;
      document.getElementById("button").style.color='white';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching';
      document.getElementById("button").disabled = true;
      document.getElementById("button").style.color='grey';

    }
  }

let history=useHistory();

  const submit = async(e) => {
    e.preventDefault();
    if(suser.profile==="Student")
    {
      const response = await fetch(`http://localhost:5000/student/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(suser)
      });
  
      const json = await response.json();
      if(json.success)
      {
        localStorage.setItem('token',json.authtoken)
        history.push('/studentdashboard')
      }
      else{
        alert("Email already exist")
      }
      
    }
    else if(tuser.profile==="Teacher")
    {
      const response = await fetch(`http://localhost:5000/teacher/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(suser)
      });
  
      const json = await response.json();
      if(json.success)
      {
        localStorage.setItem('token',json.authtoken)
        history.push('/teacherdashboard')
      }
      else{
        alert("Email already exist")
      }
     

    }


    else{
      alert("Choose profile")
    }
 
  };
  const [suser, setsuser] = useState({
   
    profile:"",
    password:"",
    email:"",
    name:"",
    phone: "",
    Class: "",
    school: "",
    city: "",
    state: "",
    area: "",
    pincode: "",
    fathername: "",
    dob: "",
    gender: ""
  });

  const [tuser, settuser] = useState({
   
    profile:"",
    password:"",
    email:"",
    name:"",
    phone: "",
    city: "",
    state: "",
    area: "",
    pincode: "",
    exp: "",
    dob: "",
    gender: "",
    description: "",
    qualification: ""
  
  });

  const onChange = async (e) => {
    check();
    setsuser({ ...suser, [e.target.name]: e.target.value });
    settuser({ ...tuser, [e.target.name]: e.target.value });
  };


  return (
    <>
      <div className="w">
        <div className="center">
          <h1>Register</h1>
          <form onSubmit={submit}>
            <div className="txt_field">
              <input name="name" onChange={onChange} type="text" required />
              <span></span>
              <label>Full Name</label>
            </div>
            <div className="txt_field">
              <input name="email" onChange={onChange} type="email" pattern="[^ @]*@[^ @]*" required />
              <span></span>
              <label>Email</label>
            </div>
            <div className="txt_field">
              <input id="password" type="password" onChange={check} minLength={5} required />
              <span></span>
              <label>Password</label>
            </div>
            <div className="txt_field">
              <input id="confirm_password" name="password" onChange={onChange} minLength={5} type="password" required  />
          
              <span id="message"></span>
              <label> Confirm Password </label> 
            </div>
            <div
              className="custom-select"
              placeholder="Role"
              style={{ width: "300px" }}
            >
              <span className="role-title"></span>
              <select
                className="form-select form-select-lg"
                style={{ border: "2px solid#adadad" }}
                name="profile"
                onChange={onChange}
              >
                <option style={{ display: "none" }} selected required>
                  Choose profile
                </option>
                <option>Student</option>
                <option>Teacher</option>
              </select>
            </div>

            <input id="button" type="submit" value="Register"  />
            
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
