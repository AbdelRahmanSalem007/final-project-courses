import "./home.scss";
import AngularImage from "../assets/angular.png";
import webDevelopmentImage from "../assets/web_developement.png";
import { Row, Col } from "antd";
// import Slider from "react-slick";
import Slider from "react-slick";
import coursesData from "../components/courses/coursesData";
import Course from "./../components/courses/Course";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 989,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home">
      <div className="container">
        <div className="row justify-content-around my-4">
          <div className="info col-md-3 mb-3">
            <h2 className="h1 count">7,700+</h2>
            <span className="sepa my-3"></span>
            <p>درس</p>
          </div>
          <div className="info col-md-3 mb-3">
            <h2 className="h1 count">777</h2>
            <span className="sepa my-3"></span>
            <p>ساعة</p>
          </div>
          <div className="info col-md-3 mb-3">
            <h2 className="h1 count">35+</h2>
            <span className="sepa my-3"></span>
            <p>كورس</p>
          </div>
        </div>
        <div className="courses__show">
          <Row gutter={32}>
            <Col xs={24} md={12}>
              <div className="courses__item">
                <figure>
                  <img src={webDevelopmentImage} alt="angular-course" />
                </figure>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="courses__item">
                <header className="courses__show__header">
                  <h4>هذا النص هو عنوان الكورســات</h4>
                  <p className="courses__show__desc">
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
                    توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة
                    لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف
                    عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي"
                    فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء.
                  </p>
                  <button className="btn  course__show__btn">
                    الإشتراك في الكورس
                  </button>
                </header>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="courses__item">
                <header className="courses__show__header">
                  <h4>هذا النص هو عنوان الكورســات</h4>
                  <p className="courses__show__desc">
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
                    توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة
                    لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف
                    عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي"
                    فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء.
                  </p>
                  <button className="btn  course__show__btn">
                    الإشتراك في الكورس
                  </button>
                </header>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="courses__item">
                <figure>
                  <img src={AngularImage} alt="angular-course" />
                </figure>
              </div>
            </Col>
          </Row>
        </div>
        <div className="home__slider py-3">
          <div className="container">
            <header className="home__slider-header">
              <h2>الكورسات المفضلة</h2>
            </header>
            <Slider {...settings}>
              {coursesData.map((course) => (
                <div
                  dir="rtl"
                  className="course-slider__wrapper text-align-start"
                >
                  <Course course={course} key={course.id} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
