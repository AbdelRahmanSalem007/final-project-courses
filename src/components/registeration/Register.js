import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./registeration.scss";

const Register = () => {
  return (
    <div className="container">
      <section className="register-page">
        <Form className="col-md-8 col-lg-4 mx-auto mt-4 pb-2 px-4">
          <h2 className="login-title py-4">إنشاء حساب</h2>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>اسم المستخدم</Form.Label>
            <Form.Control type="text" placeholder="اسم المستخدم" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>البريد الإلكتروني</Form.Label>
            <Form.Control type="email" placeholder="البريد الإلكتروني" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>كلمة المرور</Form.Label>
            <Form.Control type="password" placeholder="كلمة المرور" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfPassword">
            <Form.Label>تأكيد كلمة المرور</Form.Label>
            <Form.Control type="password" placeholder="تأكيد كلمة المرور" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicGender">
            <Form.Select aria-label="gender" className="w-25 shadow-none">
              <option value="male">ذكر</option>
              <option value="female">أنثى</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>تاريخ الميلاد</Form.Label>
            <Form.Control type="date" placeholder="تاريخ الميلاد" />
          </Form.Group>

          <Form.Group className="button pt-3 pb-2">
            <Button type="submit" className="w-100 shadow-none">
              تسجيل الدخول
            </Button>
          </Form.Group>
          <div className="w-100">
            <Form.Group className="google  pb-2">
              <Button variant="danger" className="w-100 shadow-none">
                تسجيل بحساب Google
              </Button>
            </Form.Group>
            <Form.Group className="facebook pb-3">
              <Button variant="primary" className="w-100 shadow-none">
                تسجيل بحساب Facebook
              </Button>
            </Form.Group>
          </div>
          <p className="text-center my-3">
            لديك حساب؟ <Link to="/login">تسجيل الدخول</Link>
          </p>
        </Form>
      </section>
    </div>
  );
};

export default Register;
