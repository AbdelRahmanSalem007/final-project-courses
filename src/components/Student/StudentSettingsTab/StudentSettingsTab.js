import React from "react";
import { Form, Input, Divider } from "antd";
import "./StudentSettingsTab.scss";

const StudentSettingsTab = () => {
  return (
    <div className="student-settings-tab">
      <Form>
        <div>
          <header className="student-settings__item--header">
            <h5>تغيير الأسم</h5>
          </header>
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
          <h5>تغيير الرقم السري</h5>
        </header>
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
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-submit">
            حفظ الرقم السري الجديد
          </button>
        </div>
      </Form>
    </div>
  );
};

export default StudentSettingsTab;
