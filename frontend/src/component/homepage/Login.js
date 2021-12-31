import React,{useState,useRef} from "react";
import{ useHistory} from "react-router-dom";
import "./login.css";
import {Link} from "react-router-dom";
export const Login = () => {
  let history = useHistory();
  const ref = useRef(null);
const [cred,setcred]=useState({
  email:"",
  password:""
})
  const change=()=>{
    ref.current.click();
  }

const save=async(body)=>{
  const response = await fetch(
    `http://localhost:5000/student/changepassword`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify(body)
    }
  );
 
  const json = await response.json();
  window.location.reload(false)
  if(json)
  {
    alert("your password change Successfuly")
  }
  else{
    alert("Wrong email")
  }
 setcred({  email:"",
 password:""})
  
}

  const submit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/login/log`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(student)
    });

    const json = await response.json();
   

    if(json.success)
    {
     localStorage.setItem('token',json.authtoken);
 
     if(json.profile==="Student")
     {
  history.push('/studentdashboard')
     }
     
   else if(json.profile==="Teacher"){
     history.push('/teacherdashboard')
   }

   else if(json.profile==="Admin")
  {
    history.push('/admin')
  }
  else(
    alert("invalid user")
  )

    }
    else{
      alert("invalid user")
    }
  };
  const [student, setstudent] = useState({
   
   
    password:"",
    email:""
    
  });
  const onChange = async (e) => {
    setstudent({ ...student, [e.target.name]: e.target.value });
  };
  const onChan = async (e) => {
    setcred({ ...cred, [e.target.name]: e.target.value });
  };
  return (
    <>
    <button ref={ref} style={{display:"none"}} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
 
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Forgot Password</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="form-group">
              <label htmlFor="exampleInputPassword1">Email</label>
              <input
                type="Email"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Email"
                name="email"
                onChange={onChan}
                
              />
            </div>
      <div className="form-group">
              <label htmlFor="exampleInputPassword1">New Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                onChange={onChan}
              />
            </div>
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={()=>{save(cred)}} className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
   
      <div className="login">
        <div className="box">
          <form onSubmit={submit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                value={student.email}
                onChange={onChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                onChange={onChange}
              />
            </div>
            <div className="but">
              <button type="submit" className="btn btn-success">
                login
              </button>
            </div>
            <Link to="/#" onClick={change}  style={{ float: "right", padding: "1px" }}>
              forgot password
            </Link>
            <Link to="/signup" style={{ float: "left", padding: "1px" }}>
              create account
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
