import React, { useContext, useEffect } from "react";
import Coursecontext from "../../context/course/Coursecontext";
import Card from "./Card";

import "./sd.css";
export const Courses = () => {
  const context = useContext(Coursecontext);
  const { course, getcourse } = context;
  useEffect(() => {
    getcourse();
  });
  return (
    <div className="a1">
      {course.map((courses) => {
        return <Card c={courses} />;
      })}
    </div>
  );
};
export default Courses;
