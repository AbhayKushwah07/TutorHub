import React from "react"; 
import Teachercontext from "./Teachercontext";
import { useState } from "react";

const TeacherState=(props)=>{
const host="http://localhost:5000"  
const teacherin = []

const [teacher , setteacher] = useState(teacherin)





const getteacherD = async()=>{
  const response = await fetch(`${host}/teacher/getteacher`,{
    method :'Get',
    headers:{
    'Content-Type':'application/json',
    "auth-token":localStorage.getItem('token')
    
    }
  });
  
  const json = await response.json()

  setteacher(json) 
  }

//Get all teacher
const getallteacher = async()=>{
const response = await fetch(`${host}/teacher/getallteacher`,{
  method :'Get',
  headers:{
  'Content-Type':'application/json',
  "auth-token":localStorage.getItem('token')
  
  }
});
const json = await response.json()
setteacher(json) 
}



//update teacher

const Updateteacher = async(teacher)=>{
  const response = await fetch(`${host}/teacher/updateteacher/${teacher.email}`,{
    method :'PUT',
    headers:{
    'Content-Type':'application/json',
    "auth-token":localStorage.getItem('token')
    },
    body: JSON.stringify(teacher)
  });
  console.log(response)


  
}


//delete teacher


const deleteteacher = async(id)=>{
 

  const response = await fetch(`${host}/teacher/deleteteacher/${id}`,{
    method :'DELETE',
    headers:{
    'Content-Type':'application/json',
    "auth-token":localStorage.getItem('token')
    },
   
  });
  console.log(response)
}


  return (
      <Teachercontext.Provider value={{teacher , setteacher,getallteacher,Updateteacher,deleteteacher,getteacherD}}>
          {props.children}
     </Teachercontext.Provider>
  )
}




export default TeacherState;