import React,{useContext,useEffect} from 'react'
import Studentcontext from '../../context/student/Studentcontext';
import Coursecontext from '../../context/course/Coursecontext';
import Teachercontext from '../../context/teacher/Teachercontext';
import "./view.css";
const Adminview = () => {
    const S_context = useContext(Studentcontext)
    const {student , getallstudent} = S_context;
    useEffect(() => {
        getallstudent()
    })
    const C_context = useContext(Coursecontext)
    const {course, getcourse} = C_context;
    useEffect(() => {
        getcourse()
    })
    const T_context = useContext(Teachercontext)
    const {teacher, getallteacher} = T_context;
    useEffect(() => {
        getallteacher()
    })
    return (
        <><div className="view">
          <ul className='list-group list-group-flush'>
            <div className="row">
            <div className="col-md-4" >
              <h4 className="heading">Students  ({student.length})</h4> 

            {  student.map((students)=>{
               return <li className="list-group-item">{students.s_email}</li>
            })}
           
           
           
          
            
            
            </div>
            <div className="col-md-4" >
            <h4 className="heading">Teachers  ({teacher.length})</h4>
            {  teacher.map((t)=>{
               return <li className="list-group-item">{t.t_email}</li>
            })}
            
                                                                                                                 
           
            </div>
            <div className="col-md-4" >
            <h4 className="heading">Courses  ({course.length})</h4>
            {  course.map((c)=>{
               return <li className="list-group-item">{c.title} ({c.courseid})</li>
            })}
            
                                                                                                                 
           
            </div>
            </div>
          </ul>
          </div>
        </>
    )
}

export default Adminview
