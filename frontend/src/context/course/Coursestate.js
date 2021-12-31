import React from "react"; 
import Coursecontext from "./Coursecontext";
import { useState } from "react";

const CourseState=(props)=>{
const host="http://localhost:5000"  
const coursesin = []

const [course , setcourse] = useState(coursesin)

//Get all course
const getcourse = async()=>{
const response = await fetch(`${host}/course/getcourse`,{
  method :'Get',
  headers:{
  'Content-Type':'application/json',
  "auth-token":localStorage.getItem('token')
  
  }
});
const json = await response.json()
setcourse(json) 
}



//Get teachers course
const getteachercourse = async()=>{
  const response = await fetch(`${host}/course/getteachercourse`,{
    method :'Get',
    headers:{
    'Content-Type':'application/json',
    "auth-token":localStorage.getItem('token')
    
    }
  });
  const json = await response.json()
  setcourse(json) 
  }


// Add note
const AddCourse = async(course)=>{
const name="abhay";
course.t_name=name;
    const response = await fetch(`${host}/course/addcourse`,{
      method :'POST',
      headers:{
      'Content-Type':'application/json',
      "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify(course)
    });
    console.log(response)
}

const deleteCourse = async(id)=>{
 

      const response = await fetch(`${host}/course/deletecourse/${id}`,{
        method :'DELETE',
        headers:{
        'Content-Type':'application/json',
        "auth-token":localStorage.getItem('token')
        },
       
      });
      console.log(response)
  }


  const deleteCourseT = async(id)=>{
 

    const response = await fetch(`${host}/course/deletecourseT/${id}`,{
      method :'DELETE',
      headers:{
      'Content-Type':'application/json',
      "auth-token":localStorage.getItem('token')
      },
     
    });
    console.log(response)
}
  //update course

  const Updatecourse = async(course)=>{
    const response = await fetch(`${host}/course/updatecourse/${course.id}`,{
      method :'PUT',
      headers:{
      'Content-Type':'application/json',
      "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify(course)
    });
    console.log(response)
 
    
}


//deletecourse
  return (
      <Coursecontext.Provider value={{course , setcourse,getcourse,getteachercourse,AddCourse,deleteCourse,deleteCourseT,Updatecourse}}>
          {props.children}
     </Coursecontext.Provider>
  )
}



export default CourseState;