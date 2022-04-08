import MyLearningData from "./myLearning-data";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Form, Input, Select } from "antd";
import "./MyLearning.scss";

const { Option } = Select;

const MyLearning = () => {
  return (
    <section className="my-learning">
      <div className="container">
        <Form className="py-5">
          <div className="d-flex">
            <div className="w-50 d-flex">
              <Form.Item label="ترتيب" className="me-3 mb-3 shadow-none">
                <Select defaultValue="latest" className="me-2">
                  <Option value="latest">المشغلة مؤخرا</Option>
                  <Option value="date">تاريخ الاضافة</Option>
                </Select>
              </Form.Item>

              <Form.Item label="تصفية" className="me-3 mb-3">
                <Select defaultValue="category" className="me-2 shadow-none">
                  <Option value="category">حسب الفئة</Option>
                  <Option value="date">تاريخ الاضافة</Option>
                </Select>
              </Form.Item>

              <Form.Item className="me-3 mb-3">
                <Select defaultValue="progress" className="me-2 shadow-none">
                  <Option value="progress">حسب التقدم</Option>
                  <Option value="date">تاريخ الاضافة</Option>
                </Select>
              </Form.Item>

              <Form.Item className="me-3 mb-3">
                <Select defaultValue="instructor" className="me-2 shadow-none">
                  <Option value="instructor">حسب المدرب</Option>
                  <Option value="date">تاريخ الاضافة</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="w-50 d-flex justify-content-end">
              <Form.Item className="mb-3 w-50">
                <Input placeholder="ابحث عن كورس" className="shadow-none" />
              </Form.Item>
            </div>
          </div>
        </Form>
        <div className="row justify-content-between my-learning__courses">
          {MyLearningData.map((course, index) => (
            <div
              className="mt-3 col-md-6 col-lg-3 my-learning__card"
              key={index}
            >
              <Card>
                <Link to="/">
                  <Card.Img
                    variant="top"
                    src={require("../../assets/" + course.img)}
                  />
                </Link>
                <Card.Body>
                  <Link to="/">
                    <Card.Title>{course.courseTitle}</Card.Title>
                  </Link>
                  <Card.Text>
                    <small className="d-block">{course.instructor}</small>
                    <small>{course.jobTitle}</small>
                  </Card.Text>
                  <div>
                    <div className="bg-secondary">
                      <div
                        style={{
                          width: course.progress + "%",
                          height: "2px",
                          backgroundColor: "blue",
                        }}
                      ></div>
                    </div>
                    <small>{course.progress}% اكتمل</small>
                  </div>
                  <div className="my-learning__rating"></div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyLearning;
