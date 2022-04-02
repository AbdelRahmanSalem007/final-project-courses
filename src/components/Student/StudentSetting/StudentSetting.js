import React from "react";
import { Input, Form, Divider, Row, Col } from "antd";
import "./StudentSetting.scss";

const StudentSetting = () => {
  return (
    <main className="student-settings">
      <div className="container">
        <header className="student-settings__header text-center">
          <h3>الصفحة الشخصية</h3>
          <p>أضف معلومات عن نفسك</p>
        </header>
        <div className="student-settings__content">
          <div className="student-settings__item">
            <Form>
              <div>
                <header className="student-settings__item--header">
                  <h3>تغيير الأسم</h3>
                </header>
                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="fName"
                      label="الأسم الأول"
                      colon={false}
                      rules={[
                        {
                          required: true,
                          message: "الأسم الأول مطلوب برجاء ملئ الحقل",
                        },
                      ]}
                    >
                      <Input id="fName" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="lName"
                      label="الأسم الأخير"
                      colon={false}
                      rules={[
                        {
                          required: true,
                          message: "الأسم الأخير مطلوب برجاء ملئ الحقل",
                        },
                      ]}
                    >
                      <Input id="lName" />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-submit">
                  حفظ الأسم الجديد
                </button>
              </div>
            </Form>
            <Divider />
            <Form>
              <header className="student-settings__item--header">
                <h3>تغيير الرقم السري</h3>
              </header>
              <Row gutter={16}>
                <Col xs={24}>
                  <Form.Item
                    name="password"
                    label="الرقم السري القديم"
                    colon={false}
                    rules={[
                      {
                        required: true,
                        message: "الرقم السري القديم مطلوب!",
                      },
                    ]}
                  >
                    <Input id="password" type="password" />
                  </Form.Item>
                </Col>
                <Col md={12}>
                  <Form.Item
                    name="newPassword"
                    label="الرقم السري الجديد"
                    colon={false}
                    rules={[
                      {
                        required: true,
                        message: "الرقم السري الجديد مطلوب!",
                      },
                    ]}
                  >
                    <Input id="newPassword" type="password" />
                  </Form.Item>
                </Col>
                <Col md={12}>
                  <Form.Item
                    name="confirmPassword"
                    label="تأكيد الرقم السري"
                    colon={false}
                    rules={[
                      {
                        required: true,
                        message: "تأكيد الرقم السري مطلوب!",
                      },
                    ]}
                  >
                    <Input id="confirmPassword" type="password" />
                  </Form.Item>
                </Col>
              </Row>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-submit">
                  حفظ الرقم السري الجديد
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StudentSetting;
