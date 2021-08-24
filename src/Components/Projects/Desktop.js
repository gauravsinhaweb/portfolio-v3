import React from "react";

function Desktop({ info }) {
  return (
    <>
      <div className="project-list">
        {" "}
        <a rel="noopener noreferrer" target="_blank" href={info.link}>
          <div
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            data-aos="fade-right"
            className="card"
          >
            <img src={info.src} alt="" />
          </div>{" "}
        </a>
        <div className="card-disable" data-aos="fade-up">
          <p>
            <strong>{info.title}</strong>
            {` `}
            {info.desc}
          </p>
        </div>
      </div>
    </>
  );
}

export default Desktop;
