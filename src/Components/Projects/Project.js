import React, { useState } from "react";
import "./Project.css";
import test from "../../images/MacBook.png";
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
            <div
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              data-aos="fade-right"
              className="card"
            >
              <img src={test} alt="" />
            </div>
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
                and onboarding experience for end users using Google Firebase
                Authentication Service.
              </p>
            </div>{" "}
            <div
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              data-aos="fade-left"
              className="card"
            >
              <img src={test} alt="" />
            </div>
          </div>{" "}
          <div className="project-list">
            <div
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              data-aos="fade-right"
              className="card"
            >
              <img src={test} alt="" />
            </div>
            <div className="card-disable" data-aos="fade-up">
              <p>
                <strong>Twitter clone</strong> is an app where I tried to clone
                the Twitter app. The reason behind making this app because I was
                curious to know about how the scroll works in three individual
                columns. Also, I will connect this app to firebase so that the
                Tweets will be accessible through any device.
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
                to-dos and delete the tasks after they're done. The Database is
                connected by Google Firebase.
              </p>
            </div>{" "}
            <div
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              data-aos="fade-left"
              className="card"
            >
              <img src={test} alt="" />
            </div>
          </div>{" "}
        </>
      ) : (
        <>
          {" "}
          <div>
            <div className="project-list">
              <div
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                data-aos="fade-right"
                className="card"
              >
                <img src={test} alt="" />
              </div>
              <div className="card-disable" data-aos="fade-up">
                <p>
                  <strong>MovieZoid</strong>
                </p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="project-list">
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
              <div className="card-disable" data-aos="fade-up">
                <p>
                  <strong>Form Authentication</strong>
                </p>
              </div>
            </div>{" "}
          </div>
          <div className="project-list">
            <div
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              data-aos="fade-right"
              className="card"
            >
              <img src={test} alt="" />
            </div>
            <div className="card-disable" data-aos="fade-up">
              <p>
                <strong>Twitter clone</strong>
              </p>
            </div>
          </div>
          <div className="project-list">
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
            <div className="card-disable" data-aos="fade-up">
              <p>
                <strong>TodoList-App</strong>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Project;
