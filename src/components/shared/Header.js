import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.jpeg";
import angularCourseImage from "../../assets/angular.png";
import "./header.scss";
import { Button, Divider, Progress } from "antd";

const Header = () => {
  return (
    <header className="header">
      <Container fluid className="d-flex py-2">
        <Navbar bg="white" expand="lg">
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="shadow-none border-0"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className="nav-link" to="/">
                الرئيسية
              </NavLink>
              <NavLink className="nav-link" to="/courses">
                جميع الكورســات
              </NavLink>
              <NavLink className="nav-link" to="/pricing">
                خطط الأسعار
              </NavLink>
              <NavLink className="nav-link" to="/login">
                تسجيل الدخول
              </NavLink>
              <NavLink className="nav-link" to="register">
                إنشاء حساب
              </NavLink>
              <Dropdown>
                <Dropdown.Toggle
                  className="nav-link"
                  variant="default"
                  id="dropdown-basic"
                >
                  كورساتي
                </Dropdown.Toggle>

                <Dropdown.Menu className="my-learning__dropdown ">
                  <Dropdown.Item>
                    <Link to="/course-lessons">
                      <div className="d-flex">
                        <figure className="my-learning__fig">
                          <img
                            src={angularCourseImage}
                            alt="course_description"
                          />
                        </figure>
                        <div className="my-learning__desc">
                          <h6>كورس أساسيات الأنجلر 12</h6>
                          <Progress percent={75} size="small" status="normal" />
                        </div>
                      </div>
                    </Link>
                  </Dropdown.Item>
                  <Divider
                    style={{
                      marginTop: ".25rem",
                      marginBottom: "0.25rem",
                    }}
                  />
                  <Dropdown.Item>
                    <Link to="/course-lessons">
                      <div className="d-flex">
                        <figure className="my-learning__fig">
                          <img
                            src={angularCourseImage}
                            alt="course_description"
                          />
                        </figure>
                        <div className="my-learning__desc">
                          <h6>كورس أساسيات الأنجلر 12</h6>
                          <Progress percent={75} size="small" status="normal" />
                        </div>
                      </div>
                    </Link>
                  </Dropdown.Item>
                  <Divider
                    style={{
                      marginTop: ".25rem",
                      marginBottom: "0.25rem",
                    }}
                  />
                  <Dropdown.Item>
                    <Button type="default" className="w-100 my-learning__btn">
                      الذهاب إلي كورساتي
                    </Button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="logo-container">
          <NavLink to="/">
            <figure className="mb-0 logo">
              <img src={Logo} alt="Logo" className=" w-100" />
            </figure>
          </NavLink>
        </div>
      </Container>
    </header>
  );
};

export default Header;
