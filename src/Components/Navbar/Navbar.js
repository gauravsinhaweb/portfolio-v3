import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import GitHubIcon from "@material-ui/icons/GitHub";

function Navbar() {
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 600) {
      setShow(false);
    } else {
      setShow(true);
    }
  });

  const [show, setShow] = useState(window.innerWidth <= 600 ? false : true);
  const linkHandler = () => {
    if (window.innerWidth <= 600) {
      setShow(false);
    }
  };

  return (
    <div className="navbar">
      <div
        onClick={() => setShow(!show)}
        className={show ? "nav-mini-screen rotate" : "nav-mini-screen"}
      >
        <AddCircleIcon className="nav-icon" />
      </div>
      <div className={show ? "nav-list" : "hide"}>
        <Link onClick={linkHandler} to="about" smooth duration={1000}>
          <li>Me!</li>
        </Link>
        {/* <Link onClick={linkHandler} to="skills" smooth duration={1000}>
          <li>Skillset</li>
        </Link>
        <Link onClick={linkHandler} to="workExp" smooth duration={1000}>
          <li>Work Experience</li>
        </Link> */}
        <Link onClick={linkHandler} to="projects" smooth duration={1000}>
          <li>Projects</li>
        </Link>
        <a
          style={{ textDecoration: "none" }}
          className="icons"
          rel="noopener noreferrer"
          target="_blank"
          href="https://drive.google.com/u/0/uc?id=12jhwJe3wY06XwM5pqZvXFCQWIdd547IS&export=download"
        >
          <li>Resume</li>
        </a>
        <a
          className="icons"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/gauravsinhaweb"
        >
          <li>
            <GitHubIcon />
          </li>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
