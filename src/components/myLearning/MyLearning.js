import MyLearningData from "./myLearning-data";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
// import StarIcon from "../../assets/icons/Star";
import "./MyLearning.scss";

// const Content = () => {
//   const customIcons = [
//     {
//       icon: <StarIcon />,
//     },
//     {
//       icon: <StarIcon />,
//     },
//     {
//       icon: <StarIcon />,
//     },
//     {
//       icon: <StarIcon />,
//     },
//     {
//       icon: <StarIcon />,
//     },
//   ];

const MyLearning = () => {
  return (
    <section className="my-learning">
      <div className="container">
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
