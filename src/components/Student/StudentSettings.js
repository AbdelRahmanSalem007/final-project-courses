import { useState } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import coursesData from "../courses/coursesData";
import { Container, Nav, Tab } from "react-bootstrap";
import { FaUserCog } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { CgAdd } from "react-icons/cg";
import AvatarImage from "../../assets/avatar.png";
import StudentSettingsTab from "./StudentSettingsTab/StudentSettingsTab";
import "./Students.scss";

const StudentSettings = () => {
  let [modal, setModal] = useState(false);
  return (
    <section className="settings-page">
      <Tab.Container id="left-tabs-example" defaultActiveKey="settings">
        <Container className="settings-tab__container">
          <Row className="settings-tab__row" gutter={32}>
            <Col xs={24} md={8} lg={6} className="settings__sidebar-col">
              <section className="settings__sidebar">
                <Nav variant="pills" className="flex-column">
                  <div className="settings__profile-image">
                    <figure>
                      <img src={AvatarImage} alt="logo-pic" />
                    </figure>
                  </div>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="settings"
                      className="d-flex align-items-center sidebar__item"
                    >
                      <FaUserCog className="me-2"></FaUserCog>
                      <div className="ms-2">الإعدادات</div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="saved-courses"
                      className="d-flex align-items-center sidebar__item"
                    >
                      <SiBookstack />
                      <div className="ms-2">الدورات المسجلة</div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="fav-courses"
                      className=" d-flex align-items-center sidebar__item"
                    >
                      <MdFavorite />
                      <div className="ms-2">الدورات المفضلة</div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </section>
            </Col>
            <Col xs={24} md={14} lg={18} className="settings__content-col">
              <section className="settings__content ">
                <Tab.Content>
                  <Tab.Pane eventKey="settings" className="content__item ">
                    <StudentSettingsTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="saved-courses">
                    <div className="content__item empty">
                      لا يوجد دورات مفضلة
                      <button className="btn btn-sm btn-primary ms-2 add-btn">
                        <CgAdd className="add-icon" />
                        إضافة دورة
                      </button>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fav-courses">
                    <div className={`content__item ${true ? "empty" : ""}`}>
                      {!true ? (
                        <div>
                          لا يوجد دورات مفضلة
                          <button className="btn btn-sm btn-primary ms-2 add-btn">
                            <CgAdd className="add-icon" />
                            إضافة دورة
                          </button>
                        </div>
                      ) : (
                        <Row className="settings__course-cards" gutter={32}>
                          {coursesData.map((course) => (
                            <Col xs={24} lg={12}>
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
                                    <h5 className="card-title course__title">
                                      {course.course}
                                    </h5>
                                  </Link>
                                  <div>
                                    <small>
                                      <i className="fa-regular fa-clock px-1 text-primary"></i>
                                      50 ساعة
                                    </small>
                                    <small className="px-2">
                                      {course.lecturesCount} درس
                                    </small>
                                  </div>
                                  <p className="card-text my-3">
                                    {course.desc}
                                  </p>
                                  <div className="instructor d-flex align-items-center my-4">
                                    <div className="img"></div>
                                    <p>
                                      <Link
                                        to={"/profile"}
                                        className="text-dark"
                                      >
                                        {course.instructor}
                                      </Link>
                                    </p>
                                  </div>
                                  <div className="buttons d-flex justify-content-between">
                                    <button
                                      className="preview-course"
                                      onClick={() => setModal(true)}
                                    >
                                      مقدمة
                                    </button>
                                    <Link
                                      to={`/courses/${course.id}`}
                                      className="details-link"
                                    >
                                      تفاصيل الكورس
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      )}
                    </div>
                  </Tab.Pane>
                  {/* <Tab.Pane
                    eventKey="saved-courses"
                    className={`content__item ${true ? "empty" : ""}`}
                  >
                    <Row className="settings__course-cards" gutter={32}>
                      {coursesData.map((course) => (
                        <Col xs={24} lg={12}>
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
                                <h5 className="card-title course__title">
                                  {course.course}
                                </h5>
                              </Link>
                              <div>
                                <small>
                                  <i className="fa-regular fa-clock px-1 text-primary"></i>
                                  50 ساعة
                                </small>
                                <small className="px-2">
                                  {course.lecturesCount} درس
                                </small>
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
                                <button
                                  className="preview-course"
                                  onClick={() => setModal(true)}
                                >
                                  مقدمة
                                </button>
                                <Link
                                  to={`/courses/${course.id}`}
                                  className="details-link"
                                >
                                  تفاصيل الكورس
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane> */}
                </Tab.Content>
              </section>
            </Col>
          </Row>
        </Container>
      </Tab.Container>
    </section>
  );
};

export default StudentSettings;
