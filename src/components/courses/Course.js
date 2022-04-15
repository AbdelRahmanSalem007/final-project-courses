import { useState } from "react";
import { Link } from "react-router-dom";
import "./course.scss";

const Course = ({ course }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="course col-md-6 col-xl-4">
      <div className="card course__card p-2 my-2">
        <Link to={`/courses/${course.id}`}>
          <img
            src={require(`../../assets/${course.img}`)}
            className="card-img-top course-img"
            alt={course.course}
          />
        </Link>
        <div className="card-body">
          <Link to={`/courses/${course.id}`}>
            <h5 className="card-title course__title">{course.course}</h5>
          </Link>
          <div>
            <small>
              <i className="fa-regular fa-clock px-1 text-primary"></i>
              50 ساعة
            </small>
            <small className="px-2">{course.lecturesCount} درس</small>
          </div>
          <p className="card-text my-3">{course.desc}</p>
          <div className="instructor d-flex align-items-center my-4">
            <div className="img"></div>
            <p>
              <Link to={"/profile"} className="text-dark">
                {course.instructor}
              </Link>
            </p>
          </div>
          <div className="buttons d-flex justify-content-between">
            <button className="preview-course" onClick={() => setModal(true)}>
              مقدمة
            </button>
            <Link to={`/courses/${course.id}`} className="details-link">
              تفاصيل الكورس
            </Link>
            {modal && (
              <div
                className="modal d-flex justify-content-center align-items-center"
                onClick={() => setModal(!modal)}
              >
                <video width="720" height="420" controls autoPlay>
                  <source
                    src={require("../../assets/Demo.mp4")}
                    type="video/mp4"
                  ></source>
                  <source
                    src={require("../../assets/Demo.mp4")}
                    type="video/ogg"
                  ></source>
                </video>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
