import React from "react";
import Course from "./Course";
import coursesData from "./coursesData";
import "./courses.scss";
import { Form, Input } from "antd";

const Courses = () => {
  return (
    <section className="courses">
      <div className="container">
        <div className="row">
          <Form className="py-5 d-flex flex-column justify-content-center align-items-center">
            <h2>ابحث في جميع الكورسات</h2>
            <Input placeholder="ابحث عن كورس" className="shadow-none w-50" />
          </Form>
          {coursesData.map((course) => (
            <Course course={course} key={course.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
