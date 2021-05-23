import { Tooltip } from "@material-ui/core";
import React, { useState } from "react";
import typescript from "../../images/typescript.svg";
import figma from "../../images/figma.svg";
import firebase from "../../images/firebase.svg";
import github from "../../images/github.svg";
import js from "../../images/js.svg";
import saas from "../../images/saas.svg";
import netlify from "../../images/netlify.svg";
import react from "../../images/react.svg";
import terminal from "../../images/terminal.svg";
import webpack from "../../images/webpack.svg";
import "./Skillset.css";

function Skillset() {
  const [show] = useState(window.innerWidth <= 600 ? true : false);

  return (
    <>
      <div id="skillset" className="page skillset" style={{ padding: "0" }}>
        <div className="bg-underlay-skillset bg-underlay"></div>

        <div className="skillset-content">
          {" "}
          <h4 data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
            Framework {`&`} Software I worked with..
          </h4>
        </div>

        {!show ? (
          <>
            {" "}
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
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
                <Tooltip title="Typescript" placement="top">
                  <div className="icon-box">
                    <img src={typescript} alt="" height="75px" width="75px" />
                  </div>
                </Tooltip>
                <Tooltip title="GitHub" placement="right">
                  <div className="icon-box">
                    <img src={github} alt="" height="75px" width="75px" />
                  </div>
                </Tooltip>
              </div>
              <div className="icon">
                <Tooltip title="Saas" placement="left">
                  <div className="icon-box">
                    <img src={saas} alt="" height="75px" width="75px" />
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
            </div>
          </>
        ) : (
          <>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div>
                <div className="icon">
                  <img src={js} alt="" height="80px" width="80px" />
                  <img src={react} alt="" height="80px" width="80px" />
                </div>
              </div>
              <div>
                <div className="icon">
                  <img src={terminal} alt="" height="80px" width="80px" />
                  <img src={typescript} alt="" height="80px" width="80px" />
                </div>
              </div>
              <div>
                <div className="icon">
                  <img src={github} alt="" height="80px" width="80px" />
                  <img src={saas} alt="" height="80px" width="80px" />
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
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Skillset;
