import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import courses from "./coursesData";
import { Accordion } from "react-bootstrap";

import "./course-details.scss";

const CourseDetails = () => {
  const [course, setCourse] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const data = courses.filter((course) => course.id === +id);
    setCourse(data);
  }, []);
  return (
    <div className="course-details">
      {course.map((cor, index) => (
        <div key={index}>
          <div className="course-header position-relative py-5 px-3">
            <div className="container">
              <h2 className="text-white">{cor.course}</h2>
              <p className="text-white">{cor.desc}</p>
              <p className="my-3 text-white d-flex align-items-center">
                <span className="text-white">بواسطة: </span>
                <Link to="/profile" className="instructor mx-2 text-success">
                  {cor.instructor}
                </Link>
              </p>
            </div>
          </div>

          <div className="preview position-fixed  vh-100">
            <div className="card h-75" key={index}>
              <img
                src={require(`../../assets/${cor.img}`)}
                className="card-img-top"
                alt={cor.course}
              />
              <div className="card-body">
                <h4>محتوى الكورس: </h4>
                <p className="card-text">{cor.desc}</p>
                <a href="#" className="btn btn-primary">
                  ابدأ التعلم الآن
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="skills py-5 mt-5 w-50">
              <h2>ما سوف تتعلمه في هذا الكورس: </h2>
              <ul className="mt-5 row">
                <li className="col-md-6">
                  <i className="fa-solid fa-check text-success"></i>
                  <span>مهارات</span>
                </li>
                <li className="col-md-6">
                  <i className="fa-solid fa-check text-success"></i>
                  <span>مهارات</span>
                </li>
                <li className="col-md-6">
                  <i className="fa-solid fa-check text-success"></i>
                  <span>مهارات</span>
                </li>
                <li className="col-md-6">
                  <i className="fa-solid fa-check text-success"></i>
                  <span>مهارات</span>
                </li>
                <li className="col-md-6">
                  <i className="fa-solid fa-check text-success"></i>
                  <span>مهارات</span>
                </li>
                <li className="col-md-6">
                  <i className="fa-solid fa-check text-success"></i>
                  <span>مهارات</span>
                </li>
                <li className="col-md-6">
                  <i className="fa-solid fa-check text-success"></i>
                  <span>مهارات</span>
                </li>
                <li className="col-md-6">
                  <i className="fa-solid fa-check text-success"></i>
                  <span>مهارات</span>
                </li>
                <li className="col-md-6">
                  <i className="fa-solid fa-check text-success"></i>
                  <span>مهارات</span>
                </li>
                <li className="col-md-6">
                  <i className="fa-solid fa-check text-success"></i>
                  <span>مهارات</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="instructor-details py-5">
            <div className="container">
              <div className="w-50">
                <h2 className="mb-5">تعريف بالمحاضر</h2>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="instructor-social d-flex flex-column justify-content-center align-items-center">
                    <img
                      src="https://images.ctfassets.net/aq13lwl6616q/76w25KEfGQm8rrlILQQJvI/a42b8086fb6a123446560c86c1b316f7/Andrei_Neagoie.jpg"
                      alt=""
                      className="instructor-img"
                    />
                    <div className="social d-flex my-3">
                      <a href="#" className="mx-1">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                      <a href="#" className="mx-1">
                        <i className="fa-brands fa-twitter-square"></i>
                      </a>
                      <a href="#" className="mx-1">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-success mb-4">
                      مرحبا! أنا {cor.instructor}
                    </h5>
                    <p>
                      <p className="mb-4">
                        Senior Software Developer turned Instructor, Founder of
                        ZTM
                      </p>
                      <p className="mb-4">
                        Andrei is the instructor of some of the highest rated
                        programming courses on the web. Some of his students
                        (500,000+ in the past few years) now work for some of
                        the biggest tech companies around the world like Apple,
                        Google, Amazon, Tesla, IBM, Shopify and many more.
                      </p>
                      He has worked as a Senior Software Developer in Silicon
                      Valley and Toronto for many years and is now taking all
                      that he has learned to teach programming skills and to
                      help you discover the amazing career opportunities that
                      being a developer allows in life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="course-lecs w-50 py-5">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>الجزء الأول #1</Accordion.Header>
                  <Accordion.Body>
                    <ul className="flex-column">
                      <li className="details-lesson d-flex justify-content-between align-items-center py-1 px-2">
                        <div className="d-flex justify-content-center align-items-center">
                          <p className="mb-0">
                            <i className="fa-solid fa-circle-play"></i>
                          </p>
                          <h6 className="lesson-title mx-2 mb-0">
                            الدرس الأول
                          </h6>
                        </div>
                        <span className="btn btn-success py-1">تشغيل</span>
                      </li>
                      <li className="details-lesson d-flex justify-content-between align-items-center py-1 px-2">
                        <div className="d-flex justify-content-center align-items-center">
                          <p className="mb-0">
                            <i className="fa-solid fa-circle-play"></i>
                          </p>
                          <h6 className="lesson-title mx-2 mb-0">
                            الدرس الثاني
                          </h6>
                        </div>
                        <span className="btn btn-success py-1">تشغيل</span>
                      </li>
                      <li className="details-lesson d-flex justify-content-between align-items-center py-1 px-2">
                        <div className="d-flex justify-content-center align-items-center">
                          <p className="mb-0">
                            <i className="fa-solid fa-circle-play"></i>
                          </p>
                          <h6 className="lesson-title mx-2 mb-0">
                            الدرس الثالث
                          </h6>
                        </div>
                        <span className="btn btn-success py-1">تشغيل</span>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>الجزء الثاني #2</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li className="details-lesson d-flex justify-content-between align-items-center py-1 px-2">
                        <div className="d-flex justify-content-center align-items-center">
                          <p className="mb-0">
                            <i className="fa-solid fa-circle-play"></i>
                          </p>
                          <h6 className="lesson-title mx-2 mb-0">
                            الدرس الأول
                          </h6>
                        </div>
                        <span className="btn btn-success py-1">تشغيل</span>
                      </li>
                      <li className="details-lesson d-flex justify-content-between align-items-center py-1 px-2">
                        <div className="d-flex justify-content-center align-items-center">
                          <p className="mb-0">
                            <i className="fa-solid fa-circle-play"></i>
                          </p>
                          <h6 className="lesson-title mx-2 mb-0">
                            الدرس الثاني
                          </h6>
                        </div>
                        <span className="btn btn-success py-1">تشغيل</span>
                      </li>
                      <li className="details-lesson d-flex justify-content-between align-items-center py-1 px-2">
                        <div className="d-flex justify-content-center align-items-center">
                          <p className="mb-0">
                            <i className="fa-solid fa-circle-play"></i>
                          </p>
                          <h6 className="lesson-title mx-2 mb-0">
                            الدرس الثالث
                          </h6>
                        </div>
                        <span className="btn btn-success py-1">تشغيل</span>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>الجزء الثالث #3</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li className="details-lesson d-flex justify-content-between align-items-center py-1 px-2">
                        <div className="d-flex justify-content-center align-items-center">
                          <p className="mb-0">
                            <i className="fa-solid fa-circle-play"></i>
                          </p>
                          <h6 className="lesson-title mx-2 mb-0">
                            الدرس الأول
                          </h6>
                        </div>
                        <span className="btn btn-success py-1">تشغيل</span>
                      </li>
                      <li className="details-lesson d-flex justify-content-between align-items-center py-1 px-2">
                        <div className="d-flex justify-content-center align-items-center">
                          <p className="mb-0">
                            <i className="fa-solid fa-circle-play"></i>
                          </p>
                          <h6 className="lesson-title mx-2 mb-0">
                            الدرس الثاني
                          </h6>
                        </div>
                        <span className="btn btn-success py-1">تشغيل</span>
                      </li>
                      <li className="details-lesson d-flex justify-content-between align-items-center py-1 px-2">
                        <div className="d-flex justify-content-center align-items-center">
                          <p className="mb-0">
                            <i className="fa-solid fa-circle-play"></i>
                          </p>
                          <h6 className="lesson-title mx-2 mb-0">
                            الدرس الثالث
                          </h6>
                        </div>
                        <span className="btn btn-success py-1">تشغيل</span>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>الجزء الرابع #4</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li className="details-lesson d-flex justify-content-between align-items-center py-1 px-2">
                        <div className="d-flex justify-content-center align-items-center">
                          <p className="mb-0">
                            <i className="fa-solid fa-circle-play"></i>
                          </p>
                          <h6 className="lesson-title mx-2 mb-0">
                            الدرس الأول
                          </h6>
                        </div>
                        <span className="btn btn-success py-1">تشغيل</span>
                      </li>
                      <li className="details-lesson d-flex justify-content-between align-items-center py-1 px-2">
                        <div className="d-flex justify-content-center align-items-center">
                          <p className="mb-0">
                            <i className="fa-solid fa-circle-play"></i>
                          </p>
                          <h6 className="lesson-title mx-2 mb-0">
                            الدرس الثاني
                          </h6>
                        </div>
                        <span className="btn btn-success py-1">تشغيل</span>
                      </li>
                      <li className="details-lesson d-flex justify-content-between align-items-center py-1 px-2">
                        <div className="d-flex justify-content-center align-items-center">
                          <p className="mb-0">
                            <i className="fa-solid fa-circle-play"></i>
                          </p>
                          <h6 className="lesson-title mx-2 mb-0">
                            الدرس الثالث
                          </h6>
                        </div>
                        <span className="btn btn-success py-1">تشغيل</span>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
