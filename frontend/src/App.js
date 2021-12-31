import React from "react";

import CourseState from "./context/course/Coursestate";
import StudentState from "./context/student/Studentstate";
import TeacherState from "./context/teacher/Teacherstate.js";
import Studentpage from "./component/Student/Studentpage.js";
import Teacherprofile from "./component/Teacher/Teacher_profile.js";
import AddCourse from "./component/Teacher/AddCourse.js";
import Teacherpage from "./component/Teacher/Teacherpage.js";
import Adminpage from "./component/Admin/Adminpage.js";
import Adminview from "./component/Admin/Adminview.js";
import Adminstudent from "./component/Admin/Adminstudent.js";
import Admincourses from "./component/Admin/Admincourses.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoursesS from "./component/Student/Courses.js";
import Courses from "./component/Teacher/Courses.js";
import Footer from "./component/footer.js";
import Adminteacher from "./component/Admin/Adminteachers.js";
import Studentprofile from "./component/Student/Student_profile.js";
import Homepage from "./component/homepage/Home.js";
import Login from "./component/homepage/Login";
import Signup from "./component/homepage/Signup";
import Applications from "./component/Student/Applications";
import Requeststate from "./context/request/Requeststate";
import Request from "./component/Teacher/Request";

function App() {
  return (
    <>
    <Requeststate>
      <TeacherState>
        <StudentState>
          <CourseState>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Homepage />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>

                <Route exact path="/signup">
                  <Signup />
                </Route>

                <Route exact path="/studentdashboard">
            <Studentpage/>
            <CoursesS/>
            
              </Route>
              <Route exact path="/student/profile">
              <Studentpage/>
            <Studentprofile/>
          
            
              </Route>
              <Route exact path="/student/applications">
              <Studentpage/>
            <Applications/>
          
            
              </Route>

                <Route exact path="/teacherdashboard">
              <Teacherpage />
              <Courses />
            </Route>
            <Route exact path="/teacher/addcourse">
            <Teacherpage />
              
             <AddCourse/>
            </Route>
            <Route exact path="/teacher/profile">
            <Teacherpage />
              
             <Teacherprofile/>
             
            </Route>
            <Route exact path="/teacher/requests">
            <Teacherpage />
              
             <Request/>
             
            </Route>

                <Route exact path="/admin">
              <Adminpage/>
            <Adminview/>
            
            </Route>
            <Route exact path="/admin/course">
              <Adminpage/>
            <Admincourses/>
            
            </Route>
            <Route exact path="/admin/student">
              <Adminpage/>
            <Adminstudent/>
            
            </Route>
            
            <Route exact path="/admin/teacher">
              <Adminpage/>
            <Adminteacher/>
            
            </Route>

               
              </Switch>
              <Footer />
            </Router>
          </CourseState>
        </StudentState>
      </TeacherState>
      </Requeststate>
    </>
  );
}

export default App;
