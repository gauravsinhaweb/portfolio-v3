import React from "react";
import "./Toggle.css";
import Lottie from "react-lottie";
import animationData from "./light.json";
import darkLottie from "./dark.json";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

function Toggle({ setTheme, theme }) {
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

  return (
    <div className="nav-toggle switch">
      <label className="switch">
        <div className="content" onClick={() => setTheme(!theme)}>
          <div className="icon-content">
            {" "}
            {!theme ? (
              <NightsStayIcon className="icon-toggle" />
            ) : (
              <WbSunnyIcon className="icon-toggle" />
            )}
          </div>
          <div className="lottie">
            {theme ? (
              <Lottie
                options={defaultOptions}
                height={150}
                width={150}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <Lottie
                options={darkOptions}
                height={150}
                width={150}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
        </div>
      </label>
    </div>
  );
}

export default Toggle;
