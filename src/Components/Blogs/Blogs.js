import React, { useState } from "react";
import dev from "./dev.json";
import soon from "./soon.json";
import hire from "./hire.json";
import "./Blogs.css";
import Lottie from "react-lottie";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Blogs({ theme }) {
  const devLottie = {
    loop: true,
    autoplay: true,
    animationData: dev,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const soonLottie = {
    loop: true,
    autoplay: true,
    animationData: soon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const hireLottie = {
    loop: true,
    autoplay: true,
    animationData: hire,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [show] = useState(window.innerWidth <= 600 ? true : false);

  return (
    <>
      <div id="blogs" className="page blogs" style={{ padding: "0" }}>
        <div className="bg-underlay-blogs bg-underlay"></div>

        <div className="blogs-content">
          {" "}
          <h3 data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
            Blogs
          </h3>
        </div>
        <div className="dev">
          {" "}
          <Lottie options={devLottie} height={250} width={250} />
        </div>

        <div className="soon">
          {" "}
          <Lottie options={soonLottie} height={250} width={250} />
        </div>
        {!show ? (
          <Lottie
            options={hireLottie}
            height={250}
            width={250}
            style={{
              bottom: "-3.4rem",
              position: "absolute",
              right: "1rem",
            }}
          />
        ) : null}
        <div className="contact">
          <a
            href="https://twitter.com/gauravsinhaweb"
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterIcon className="icon" style={{ color: "#00acee" }} />
          </a>
          <a
            href="https://linkedin.com/in/gaurav-sinha-032386187"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon className="icon" style={{ color: "#0077b5" }} />
          </a>
          <a
            href="mailto:sinhagaurav.me@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <EmailIcon className="icon" style={{ color: "#DB4437" }} />
          </a>
          <a
            href="https://github.com/gauravsinhaweb"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon
              className="icon"
              style={{ color: theme ? "#eeeeee" : "#000000" }}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Blogs;
