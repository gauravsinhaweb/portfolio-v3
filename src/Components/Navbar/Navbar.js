import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import GitHubIcon from "@material-ui/icons/GitHub";
import { CgMenuRightAlt, CgMenuRight } from "react-icons/cg";
// import { HiMenuAlt3 } from "react-icons/hi";
function Navbar() {
  const [toggle, setToggle] = useState(false);
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
        className={show ? "nav-mini-screen rotate" : "nav-mini-screen disabled"}
      >
        {toggle ? (
          <CgMenuRight
            className="nav-icon"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <CgMenuRightAlt
            className="nav-icon"
            onClick={() => setToggle(!toggle)}
          />
        )}{" "}
      </div>
      <ul>
        <div className={show ? "nav-list" : "hide"}>
          <Link onClick={linkHandler} to="about" smooth duration={1000}>
            <li>Me!</li>
          </Link>
          {/* <Link onClick={linkHandler} to="blogs" smooth duration={1000}>
          <li>Work Experience</li>
        </Link> */}
          <Link onClick={linkHandler} to="projects" smooth duration={1000}>
            <li>Projects</li>
          </Link>{" "}
          <Link onClick={linkHandler} to="blogs" smooth duration={1000}>
            <li>Blogs</li>
          </Link>
          <a
            style={{ textDecoration: "none" }}
            className="icons"
            rel="noopener noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1cwHqy62HEWsNHxYU7WOFD-K003oFf-04/view?usp=sharing"
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
      </ul>
    </div>
  );
}

export default Navbar;
