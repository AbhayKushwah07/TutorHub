import React from "react";
import Studentcontext from "./Studentcontext";
import { useState } from "react";
const StudentState = (props) => {
  const host = "http://localhost:5000";
  const studentin = [];
  const [student, setstudent] = useState(studentin);
  const getallstudent = async () => {
    const response = await fetch(`${host}/student/getallstudent`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
          
      },
    });
    const json = await response.json();
    setstudent(json);
    console.log(json);
  };

  //update student
  const Updatestudent = async (student) => {
    const response = await fetch(
      `${host}/student/updatestudent/${student.email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
        body: JSON.stringify(student),
      }
    );
    console.log(response);
  };

  //delete student

  const deleteStudent = async (id) => {
    const response = await fetch(`${host}/student/deletestudent/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
         
      },
    });
    console.log(response);
  };

  //get student

  const getstudentD = async () => {
    const response = await fetch(`${host}/student/getstudent`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
          
      },
    });

    const json = await response.json();

    setstudent(json);
  };



  
  return (
    <Studentcontext.Provider
      value={{
        student,
        setstudent,
        getallstudent,
        Updatestudent,
        deleteStudent,
        getstudentD,
      }}
    >
      {props.children}
    </Studentcontext.Provider>
  );
};

export default StudentState;
