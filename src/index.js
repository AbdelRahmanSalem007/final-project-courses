import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import App from "./App";
// bootstrap js bundle
import "bootstrap/dist/js/bootstrap.bundle.min";
// style
import "bootstrap/dist/css/bootstrap.rtl.min.css";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import "./index.scss";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ConfigProvider direction="rtl">
        <App />
      </ConfigProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
