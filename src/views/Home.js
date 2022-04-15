import Questions from "../components/Questions/Questions";
import PrivacyPolicy from "../components/Privacy/PrivacyPolicy";
import "./home.scss";
import AngularImage from "../assets/angular.png";
import webDevelopmentImage from "../assets/web_developement.png";
import { Row, Col } from "antd";
import { Slide } from "react-slideshow-image";

const Home = () => {
  const slideImages = [
    {
      url: "../assets/angular.png",
      caption: "Slide 1",
    },
    {
      url: "../assets/web_developement.png",
      caption: "Slide 2",
    },
    {
      url: "../assets/web_developement.png",
      caption: "Slide 3",
    },
  ];

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
      </div>
    </div>
  );
};

export default Home;
