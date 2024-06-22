import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
