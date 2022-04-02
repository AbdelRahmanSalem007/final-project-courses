import React from "react";
import Course from "./Course";
import coursesData from "./coursesData";
import "./courses.scss";

const Courses = () => {
  return (
    <section className="courses">
      <div className="container">
        <div className="row">
          {coursesData.map((course) => (
            <Course course={course} key={course.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
