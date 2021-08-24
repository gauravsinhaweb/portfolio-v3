import React, { useState } from "react";
import "./Project.css";
import ProjectData from "../ProjectData/ProjectData";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
function Project() {
  const [Data] = ProjectData();

  const [show] = useState(window.innerWidth <= 600 ? true : false);
  console.log(Data);
  return (
    <div id="projects" className="page project">
      <div className="bg-underlay-project bg-underlay"></div>
      <div className="project-content">
        <h3>My Projects</h3>
      </div>
      {!show ? (
        <>
          {Data.map((info, ind) => {
            return <Desktop info={info} key={ind} />;
          })}
        </>
      ) : (
        <>
          {Data.map((info, ind) => {
            return <Mobile info={info} key={ind} />;
          })}
        </>
      )}
    </div>
  );
}

export default Project;
