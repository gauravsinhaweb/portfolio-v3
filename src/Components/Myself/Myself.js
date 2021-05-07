import React from "react";
import "./Myself.css";
import { Link } from "react-scroll";
import Typography from "@material-ui/core/Typography";
import Button from "../Button/Button";
import image from "../../gaurav.jpeg";

function Myself() {
  return (
    <div id="myself" className="myself">
      <div className="bg-underlay-myself bg-underlay"></div>
      <div className="sonar-wrapper">
        <div className="sonar-emitter">
          <img src={image} alt="Gaurav" />
          <div className="sonar-wave"></div>
        </div>
      </div>
      <div className="myself-content">
        <Typography className="line1" variant="h5" gutterBottom>
          Hi! myself,
        </Typography>
        <div
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1500"
        >
          <Typography className="line2" variant="h3" gutterBottom>
            GAURAV SINHA
          </Typography>
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1500"
        >
          <Typography className="line3" variant="h2" gutterBottom>
            {` < Software Developer />`}
          </Typography>
          <Typography className="line4" variant="h2" gutterBottom>
            Software Developer
          </Typography>{" "}
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <Link to="contact" smooth duration={1000}>
            <Button text="Connect with me" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Myself;
