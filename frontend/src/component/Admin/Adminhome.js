import React from 'react'
import "./Nav.css";
import {Link} from "react-router-dom";
export const Adminhome = () => {
    return (
        <>
            
<div className="sidebar1">
  <Link className="active" to="/admin" style={{"font-size":"25px","align":"center"}}>Home</Link>
  <Link to="/admin/teacher">Teachers</Link>
  <Link to="/admin/student">Students</Link>
  <Link to="/admin/course">Courses</Link>
  
</div>


 </>
    )
}
export default Adminhome;
