import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "./hire.json";
import "./Skillset.css";
import js from "../../images/js.svg";
import react from "../../images/react.svg";
import figma from "../../images/figma.svg";
import bootstrap from "../../images/bootstrap.svg";
import terminal from "../../images/terminal.svg";
import github from "../../images/github.svg";
import firebase from "../../images/firebase.svg";
import mui from "../../images/mui.svg";
import netlify from "../../images/netlify.svg";
import webpack from "../../images/webpack.svg";
import { Tooltip } from "@material-ui/core";

function Skillset({ theme }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [show] = useState(window.innerWidth <= 600 ? true : false);

  return (
    <>
      <div id="skillset" className="page skillset" style={{ padding: "0" }}>
        <div className="bg-underlay-skillset bg-underlay"></div>
        {!show ? (
          <>
            <div className="icon">
              <Tooltip title="Javascript" placement="left-start">
                <div className="icon-box">
                  <img src={js} alt="" height="75px" width="75px" />
                </div>
              </Tooltip>
              <Tooltip title="React JS" placement="top">
                <div className="icon-box">
                  <img src={react} alt="" height="75px" width="75px" />
                </div>
              </Tooltip>
              <Tooltip title="Terminal" placement="top">
                <div className="icon-box">
                  <img src={terminal} alt="" height="75px" width="75px" />
                </div>
              </Tooltip>
              <Tooltip title="Bootstrap" placement="top">
                <div className="icon-box">
                  <img src={bootstrap} alt="" height="75px" width="75px" />
                </div>
              </Tooltip>
              <Tooltip title="GitHub" placement="right">
                <div className="icon-box">
                  <img src={github} alt="" height="75px" width="75px" />
                </div>
              </Tooltip>
            </div>
            <div className="icon">
              <Tooltip title="Material UI" placement="left">
                <div className="icon-box">
                  <img src={mui} alt="" height="75px" width="75px" />
                </div>
              </Tooltip>
              <Tooltip title="Netlify" placement="bottom">
                <div className="icon-box">
                  <img src={netlify} alt="" height="75px" width="75px" />
                </div>
              </Tooltip>
              <Tooltip title="Webpack" placement="bottom">
                <div className="icon-box">
                  <img src={webpack} alt="" height="75px" width="75px" />
                </div>
              </Tooltip>
              <Tooltip title="figma" placement="bottom">
                <div className="icon-box">
                  <img src={figma} alt="" height="75px" width="75px" />
                </div>
              </Tooltip>
              <Tooltip title="firebase" placement="right">
                <div className="icon-box">
                  <img src={firebase} alt="" height="75px" width="75px" />
                </div>
              </Tooltip>
            </div>
          </>
        ) : (
          <>
            <div>
              <div className="icon">
                <img src={js} alt="" height="80px" width="80px" />
                <img src={react} alt="" height="80px" width="80px" />
              </div>
            </div>
            <div>
              <div className="icon">
                <img src={terminal} alt="" height="80px" width="80px" />
                <img src={bootstrap} alt="" height="80px" width="80px" />
              </div>
            </div>
            <div>
              <div className="icon">
                <img src={github} alt="" height="80px" width="80px" />
                <img src={mui} alt="" height="80px" width="80px" />
              </div>
            </div>
            <div>
              <div className="icon">
                <img src={netlify} alt="" height="80px" width="80px" />
                <img src={webpack} alt="" height="80px" width="80px" />
              </div>
            </div>
            <div>
              <div className="icon">
                <img src={figma} alt="" height="80px" width="80px" />
                <img src={firebase} alt="" height="80px" width="80px" />
              </div>
            </div>
          </>
        )}

        {!show ? (
          <Lottie
            options={defaultOptions}
            height={250}
            width={250}
            style={{
              bottom: "-3.4rem",
              position: "absolute",
              right: "1rem",
            }}
          />
        ) : null}
      </div>
    </>
  );
}

export default Skillset;
