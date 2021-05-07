import React, { useState } from "react";
import "./About.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import Tooltip from "@material-ui/core/Tooltip";
import animationData from "./smart.json";
import Lottie from "react-lottie";
function About() {
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
      <div id="myself" className="page about">
        {!show ? (
          <Lottie
            options={defaultOptions}
            height={350}
            width={350}
            style={{
              top: "22rem",
              position: "absolute",
              left: "1rem",
              borderRadius: "100px",
              opacity: "0.8",
              transform: "rotate(-5deg) scaleX(-1)",
            }}
          />
        ) : null}
        <div className="bg-underlay-about bg-underlay"></div>
        <div className="about-content">
          <h3 className="">About Me</h3>
          <p>
            Hello, I'm Gaurav Sinha, a 21 year old undergraduate student, who
            loves coding and designing.. Currently, I am in 2nd year persuing
            B.Tech from{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://en.wikipedia.org/wiki/Techno_International_New_Town"
            >
              Techno India , Kolkata{" "}
            </a>
            .
            <br />
            Following below are links to my profile to know more about me, and
            the further pages contains my skillset and projects I've made/worked
            with.
          </p>
          <div className="about-icons">
            <Tooltip title="Github" placement="right-start">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/gauravsinhaweb"
              >
                <GitHubIcon className="icons" />
              </a>
            </Tooltip>

            <Tooltip title="LinkedIn" placement="right-start">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://linkedin.com/in/gaurav-sinha-032386187"
              >
                <LinkedInIcon className="icons" />
              </a>
            </Tooltip>

            <Tooltip title="sinhagaurav.me@gmail.com" placement="right-start">
              <a
                href="mailto:sinhagaurav.me@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <EmailIcon className="icons" />
              </a>
            </Tooltip>
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}

export default About;
