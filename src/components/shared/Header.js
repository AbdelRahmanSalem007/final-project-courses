import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.jpeg";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Navbar bg="white" expand="lg">
        <Container fluid className="flex-row-reverse">
          <div className="logo-container text-end">
            <NavLink to="/" className="text-center">
              <figure className="mb-0 w-75 logo">
                <img src={Logo} alt="Logo" className="w-100" />
              </figure>
            </NavLink>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" className="shadow-none" />
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
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
