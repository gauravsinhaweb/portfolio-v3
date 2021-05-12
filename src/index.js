import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import "aos/dist/aos.css"; // You can also use <link> for styles

ReactDOM.render(
  <Router>
    {" "}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
