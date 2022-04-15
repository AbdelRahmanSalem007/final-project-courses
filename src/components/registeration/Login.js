import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./registeration.scss";

const Login = () => {
  return (
    <div className="container">
      <section className="login-page row">
        <Form className="col-md-8 col-lg-4 mx-auto mt-4 pb-2 px-4">
          <h2 className="login-title py-4">تسجيل الدخول</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>الايميل</Form.Label>
            <Form.Control type="email" placeholder="الايميل" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>كلمة المرور</Form.Label>
            <Form.Control type="password" placeholder="كلمة المرور" required />
          </Form.Group>

          <div className="check-container">
            <Form.Group className="d-flex">
              <Form.Check type="checkbox" id="remember" />
              <Form.Label className="px-2" htmlFor="remember">
                تذكرني
              </Form.Label>
            </Form.Group>
            <Link to="/reset-password" className="forget">
              هل نسيت كلمة المرور؟
            </Link>
          </div>

          <div className="">
            <Form.Group className="button mt-3 mb-2">
              <Button className="w-100 shadow-none">تسجيل الدخول</Button>
            </Form.Group>
            <Form.Group className="google">
              <Button variant="danger" className="w-100 mb-2 shadow-none">
                تسجيل بحساب Google
              </Button>
            </Form.Group>
            <Form.Group className="facebook">
              <Button variant="primary" className="w-100 mb-4 shadow-none">
                تسجيل بحساب Facebook
              </Button>
            </Form.Group>
          </div>
        </Form>
      </section>
    </div>
  );
};

export default Login;
