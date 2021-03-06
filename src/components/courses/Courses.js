import React from "react";
import Course from "./Course";
import coursesData from "./coursesData";
import { Form, Input } from "antd";
import { IoIosSearch } from "react-icons/io";
// style
import "./courses.scss";

const Courses = () => {
  return (
    <section className="courses">
      <div className="container">
        <div className="row">
          <Form className="py-5 d-flex flex-column justify-content-center align-items-center">
            <header className="courses__header">
              <h2>ابحث في جميع الكورسات</h2>
            </header>
            <div className="search-input__wrapper">
              <Input placeholder="ابحث عن كورس" className="shadow-none w-50" />
              <IoIosSearch className="search-icon" size={16} />
            </div>
          </Form>
          {coursesData.map((course) => (
            <div className=" col-md-6 col-xl-4">
              <Course course={course} key={course.id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
