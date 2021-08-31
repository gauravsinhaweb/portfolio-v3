import React from "react";

function Mobile({ info }) {
  return (
    <>
      <div className="card-mini">
        <div
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos="fade-up"
        >
          {" "}
          <a rel="noopener noreferrer" target="_blank" href={info.link}>
            {" "}
            <img src={info.src} alt="" />
          </a>
          <div data-aos="fade-up">
            <p>
              <strong>
                {info.title}
                {` `}
              </strong>
              {info.desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobile;
