import "./profile.scss";

const Profile = () => {
  return (
    <div className="instructor-profile mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
            <div className="img-container">
              <img src="https://images.ctfassets.net/aq13lwl6616q/76w25KEfGQm8rrlILQQJvI/a42b8086fb6a123446560c86c1b316f7/Andrei_Neagoie.jpg" />
            </div>
            <div className="social-container mt-4 fs-3">
              <a href="#" className="mx-1">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="mx-1">
                <i className="fa-brands fa-twitter-square"></i>
              </a>
              <a href="#" className="mx-1">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-8">
            <h2 className="h1 mb-4">السيد تركي</h2>
            <p>
              <p className="mb-4">
                Senior Software Developer turned Instructor, Founder of ZTM
              </p>
              <p className="mb-4">
                Andrei is the instructor of some of the highest rated
                programming courses on the web. Some of his students (500,000+
                in the past few years) now work for some of the biggest tech
                companies around the world like Apple, Google, Amazon, Tesla,
                IBM, Shopify and many more.
              </p>
              He has worked as a Senior Software Developer in Silicon Valley and
              Toronto for many years and is now taking all that he has learned
              to teach programming skills and to help you discover the amazing
              career opportunities that being a developer allows in life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
