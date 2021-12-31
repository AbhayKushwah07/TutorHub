import React,{useContext} from "react";
import Requestcontext from "../../context/request/Requestcontext";
import "./sd.css";
const Card = (props) => {
  const R_context = useContext(Requestcontext);
  const { Sendrequest } = R_context;
  const apply = async (id,email) => {
    const response = await fetch(
      `http://localhost:5000/request/checkcourse/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );

    const json = await response.json();
    if(json)
    {
      alert("You already applied for this course")
    }
    else{
   Sendrequest(id,email)
   window.location.reload(false)
    }

    
  };

  const { c } = props;
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" style={{ "margin-left": "44vh" }}>
            <u>{c.title}</u>
          </h5>
          <p className="card-text">{c.description}</p>
        </div>

        <ul className="list-group list-group-flush">
          <div className="row">
            <div className="col-md-6">
              <li className="list-group-item">
                <b>Subject :</b> {c.subject}
              </li>

              <li className="list-group-item">
                <b>Timing :</b> {c.timing}
              </li>
              <li className="list-group-item">
                <b>Duration :</b> {c.duration}
              </li>
              <li className="list-group-item">
                <b>By :</b> {c.t_name}
              </li>
            </div>
            <div className="col-md-6">
              <li className="list-group-item">
                <b>Mode :</b> {c.mode}
              </li>
              <li className="list-group-item">
                <b>Location :</b> {c.location}
              </li>

              <li className="list-group-item">
                <b>FixFees :</b> {c.fixfee}(₹)&emsp;(per month)
              </li>
              <li className="list-group-item">
                <b>Charges/Km :</b> {c.varfee}(₹)&emsp;(for offine Mode)
              </li>
            </div>
          </div>
        </ul>

        <div className="card-body">
          <b>Class: {c.class}</b>
          <button type="button" className="btn btn-success" onClick={()=>{apply(c.courseid,c.t_email)}} style={{"float":"right"}}>Apply</button>
         
        </div>
      </div>
    </div>
  );
};
export default Card;
