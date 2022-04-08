import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="row justify-content-around">
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
      </div>
    </div>
  );
};

export default Home;
