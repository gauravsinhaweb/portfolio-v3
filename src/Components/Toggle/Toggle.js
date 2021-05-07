import React, { useState } from "react";
import "./Toggle.css";
import Lottie from "react-lottie";
import animationData from "./light.json";
import darkLottie from "./dark.json";

function Toggle({ toggleTheme, theme }) {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const darkOptions = {
    loop: false,
    autoplay: true,
    animationData: darkLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [show] = useState(window.innerWidth <= 600 ? true : false);

  return (
    <div className="nav-toggle switch">
      <label className="switch">
        <input onClick={toggleTheme} type="checkbox" />
        {theme ? (
          <Lottie
            className="lottie"
            options={defaultOptions}
            height={show ? 150 : 250}
            width={show ? 150 : 250}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <Lottie
            className="lottie"
            options={darkOptions}
            height={show ? 150 : 250}
            width={show ? 150 : 250}
            style={{ cursor: "pointer" }}
          />
        )}
      </label>
    </div>
  );
}

export default Toggle;
