import React, { useState } from "react";
import "./Project.css";
import test from "../../images/MacBook.svg";
function Project() {
  const [show] = useState(window.innerWidth <= 600 ? true : false);

  return (
    <div id="projects" className="page project">
      <div className="bg-underlay-project bg-underlay"></div>
      <div className="project-content">
        <h3>My Projects</h3>
      </div>
      {!show ? (
        <>
          {" "}
          <div className="project-list">
            {" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://moviezoid.netlify.app/"
            >
              <div
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                data-aos="fade-right"
                className="card"
              >
                <img src={test} alt="" />
              </div>{" "}
            </a>
            <div className="card-disable" data-aos="fade-up">
              <p>
                The <strong>MovieZoid</strong> is a website that shows a
                collection of Movies and TV shows and related Information,
                reviews, Dates of Release, Star Ratings, overview, etc. It is
                Made by using tmdb API. This App is responsive for Mobile and
                Desktop Devices. It supports static rendering {`&`} pagination
                as well.
              </p>
            </div>
          </div>
          <div className="project-list">
            {" "}
            <div className="card-disable" data-aos="fade-up">
              <p>
                <strong>Form Authentication</strong> aims to make building
                secure authentication systems easy, while improving the sign-in
                and onboarding experience for end users.
              </p>
            </div>{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://authentication-firebase.netlify.app/"
            >
              {" "}
              <div
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                data-aos="fade-left"
                className="card"
              >
                <img src={test} alt="" />
              </div>{" "}
            </a>
          </div>{" "}
          <div className="project-list">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://gauravsinhaweb-twitterclone.netlify.app/"
            >
              {" "}
              <div
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                data-aos="fade-right"
                className="card"
              >
                <img src={test} alt="" />
              </div>{" "}
            </a>
            <div className="card-disable" data-aos="fade-up">
              <p>
                <strong>Twitter clone</strong> is an app where I tried to clone
                the Twitter app. The reason behind making this app because I was
                curious to know about how the scroll works in three individual
                columns.
              </p>
            </div>
          </div>
          <div className="project-list">
            {" "}
            <div className="card-disable" data-aos="fade-up">
              <p>
                <strong>TodoList-App</strong> is a CRUD App where you can
                Create, Read, Update and Delete the data. It is a simple
                note-taking platform, where you can write all the important
                to-dos and delete the tasks after they're done.
              </p>
            </div>{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://gauravsinhaweb.github.io/TodoList-App/"
            >
              {" "}
              <div
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                data-aos="fade-left"
                className="card"
              >
                <img src={test} alt="" />
              </div>
            </a>
          </div>{" "}
        </>
      ) : (
        <>
          {" "}
          <div className="card-mini">
            <div
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              data-aos="fade-up"
            >
              {" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://moviezoid.netlify.app/"
              >
                {" "}
                <img src={test} alt="" />
              </a>
              <div data-aos="fade-up">
                <p>
                  {" "}
                  The <strong>MovieZoid</strong> is a website that shows a
                  collection of Movies and TV shows and related Information,
                  reviews, Dates of Release, Star Ratings, overview, etc. It is
                  Made by using tmdb API. This App is responsive for Mobile and
                  Desktop Devices. It supports static rendering {`&`} pagination
                  as well.
                </p>{" "}
              </div>
            </div>
            <div
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              data-aos="fade-up"
            >
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://authentication-firebase.netlify.app/"
              >
                {" "}
                <img src={test} alt="" />
              </a>
            </div>
            <div data-aos="fade-up">
              <p>
                <strong>Form Authentication</strong> aims to make building
                secure authentication systems easy, while improving the sign-in
                and onboarding experience for end users.
              </p>
            </div>
            <div
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              data-aos="fade-up"
            >
              {" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://gauravsinhaweb-twitterclone.netlify.app/"
              >
                {" "}
                <img src={test} alt="" />
              </a>
            </div>
            <div data-aos="fade-up">
              <p>
                <strong>Twitter clone</strong> is an app where I tried to clone
                the Twitter app. The reason behind making this app because I was
                curious to know about how the scroll works in three individual
                columns.
              </p>
            </div>{" "}
            <div
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              data-aos="fade-up"
            >
              {" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://gauravsinhaweb.github.io/TodoList-App/"
              >
                {" "}
                <img src={test} alt="" />
              </a>
            </div>
            <div data-aos="fade-up">
              <p>
                <strong>TodoList-App</strong> is a CRUD App where you can
                Create, Read, Update and Delete the data. It is a simple
                note-taking platform, where you can write all the important
                to-dos and delete the tasks after they're done.
              </p>
            </div>{" "}
          </div>
        </>
      )}
    </div>
  );
}

export default Project;
