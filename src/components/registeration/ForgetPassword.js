import { Button, Form } from "react-bootstrap";
import "./registeration.scss";

const ForgetPassword = () => {
  return (
    <div className="container">
      <section className="login-page row">
        <Form className="col-md-8 col-lg-4 mx-auto mt-4 pb-2 px-4">
          <h2 className="login-title py-4">تعيين كلمة مرور جديدة</h2>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>كلمة المرور الجديدة</Form.Label>
            <Form.Control
              type="password"
              placeholder="كلمة المرور الجديدة"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfPassword">
            <Form.Label>تأكيد كلمة المرور</Form.Label>
            <Form.Control
              type="password"
              placeholder="تأكيد كلمة المرور"
              required
            />
          </Form.Group>

          <Form.Group className="button py-3">
            <Button className="w-100">تعيين كلمة المرور الجديدة</Button>
          </Form.Group>
        </Form>
      </section>
    </div>
  );
};

export default ForgetPassword;
