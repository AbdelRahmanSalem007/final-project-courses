import LogoImage from "../../assets/dark-logo.png";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="sub-footer with-border-top">
        <div className="container">
          <header className="sub-footer__header">
            <figure>
              <img src={LogoImage} alt="codinghub-logo" />
            </figure>
            <h2>تعلم البرمجة باللغة العربية</h2>
            <p>معلومات عن المنصة فى هذا القسم تكتب هنا...</p>
          </header>
          <ul className="sub-footer__links">
            <li className="item">
              <Link to="/terms">سياسة الخصوصية</Link>
            </li>
            <li className="item">
              <Link to="/faq">الأسئلة الشائعة</Link>
            </li>
            <li className="item">
              <Link to="/pricing">الباقات</Link>
            </li>
          </ul>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <p className="text-center">جميع الحقوق محفوظة لدي CodingHub</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
