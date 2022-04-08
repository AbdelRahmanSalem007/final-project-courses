import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.jpeg";
import "./header.scss";

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
              <NavLink className="nav-link" to="my-learning">
                كورســاتي
              </NavLink>
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
