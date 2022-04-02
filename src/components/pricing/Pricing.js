import { useEffect, useState } from "react";
import { plans, includes } from "./prices";
import "./pricing.scss";

const Pricing = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => setPrices(plans), []);
  return (
    <div className="pricing-page">
      <div className="container">
        <h2 className="title mt-5">
          ابدأ مسيرة التعلم الآن <br />
          <span className="invest">استثمر في نفسك</span>
        </h2>
        <ul className="plans d-flex justify-content-between">
          {prices.map((price, index) => (
            <li
              className={price.focus ? "annual-plan plan mt-3" : "plan mt-3"}
              key={index}
            >
              <p className="plan-title">{price.plan}</p>
              <p className="plan-price">
                {price.price} <sup>$</sup>
              </p>
              <span className="separator"></span>
              <p className="plan-desc">{price.desc}</p>
              <button className={index === 0 ? "annual-button" : ""}>
                ابدأ الآن
              </button>
            </li>
          ))}
        </ul>
        <div className="includes">
          <h2 className="includes-title">مميزات الباقات:</h2>
          <ul className="includes-list row">
            {includes.map((point, index) => (
              <li className="includes-point col-md-6 col-lg-4" key={index}>
                <svg
                  className="circle"
                  width="27"
                  height="27"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <circle cx="15" cy="15" r="15" fill="#F51767"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.8633 8.30653C24.2463 8.70445 24.2342 9.3375 23.8363 9.72049L11.5914 21.5062C11.2042 21.8789 10.5917 21.8789 10.2045 21.5062L5.30653 16.7919C4.90862 16.4089 4.89652 15.7759 5.27951 15.378C5.66251 14.98 6.29556 14.968 6.69347 15.3509L10.898 19.3978L22.4494 8.27951C22.8473 7.89652 23.4804 7.90862 23.8633 8.30653Z"
                    fill="white"
                  ></path>
                </svg>
                <p className="point-desc">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
