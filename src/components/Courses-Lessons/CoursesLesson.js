import { Row, Col } from "antd";
import CourseSidebar from "./components/Sidebar/Sidebar";
import CourseContent from "./components/Content/Content";
import "./CoursesLesson.scss";

const Courses = () => {
  return (
    <main className="course">
      <div className="course__header">
        <h4 className="course__h4">
          كورس البرمجة الكائنية و الأختبارت البرمجية
        </h4>
      </div>
      <Row className="flex-1">
        <Col
          className="course__header-col"
          xs={{ span: 24, order: 2 }}
          md={{ span: 6, order: 1 }}
        >
          <CourseSidebar />
        </Col>
        <Col
          className="course__content-col"
          xs={{ span: 24, order: 1 }}
          md={{ span: 18, order: 1 }}
        >
          <CourseContent />
        </Col>
      </Row>
    </main>
  );
};

export default Courses;
