import React from "react";
import Requestcontext from "./Requestcontext";
import { useState } from "react";
const Requeststate = (props) => {
  const host = "http://localhost:5000";
  const requestin = [];
  
  const [request, setrequest] = useState(requestin);


  const getSrequest = async () => {
    const response = await fetch(`${host}/request/getstudentrequest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
          
      },
    });
    const json = await response.json();
   
    setrequest(json);
    
  };

  const getTrequest = async () => {
    const response = await fetch(`${host}/request/getteacherrequest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
          
      },
    });
    const json = await response.json();
    setrequest(json);
    
  };



  const Updaterequest = async (courseid,status) => {
    const response = await fetch(
      `${host}/request/updaterequest`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
        body: JSON.stringify({courseid,status}),
      }
    );
    console.log(response);
  };



  const deleterequest = async (id) => {
    const response = await fetch(`${host}/request/deleterequest/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
         
      },
    });
    console.log(response);
  };


  const deleterequestS = async (id) => {
    const response = await fetch(`${host}/request/deleterequestS/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
         
      },
    });
    console.log(response);
  };


  const deleterequestT = async (id) => {
    const response = await fetch(`${host}/request/deleterequestT/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
         
      },
    });
    console.log(response);
  };



  const Sendrequest = async (courseid,t_email) => {
    const response = await fetch(
      `${host}/request/sendrequest`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
        body: JSON.stringify({courseid,t_email}),
      }
    );
    console.log(response);
  };


  


  
  return (
    <Requestcontext.Provider
      value={{
        request,
        setrequest,
        getSrequest,
        getTrequest,
        Updaterequest,
        deleterequest,
        Sendrequest,
        deleterequestS,
        deleterequestT
      }}
    >
      {props.children}
    </Requestcontext.Provider>
  );
};

export default Requeststate;
