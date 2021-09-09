import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Myself from "./Components/Myself/Myself";
import About from "./Components/About/About";
import Skillset from "./Components/Skillset/Skillset";
import Toggle from "./Components/Toggle/Toggle";
import Aos from "aos";
import animationData from "./loading.json";
import Lottie from "react-lottie";
import Blogs from "./Components/Blogs/Blogs";
function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const [show] = useState(window.innerWidth <= 600 ? true : false);

  const [theme, setTheme] = useState(show ? true : false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const Project = React.lazy(() => import("./Components/Projects/Project")); // Lazy-loaded

  return (
    <>
      {" "}
      <div className="container">
        {" "}
        <div className={!theme ? "light" : "dark"}>
          <Suspense
            fallback={
              <Lottie
                options={defaultOptions}
                height={250}
                width={250}
                style={{ marginTop: "12rem" }}
              />
            }
          >
            <>
              <Toggle setTheme={setTheme} theme={theme} />
              <Navbar />
              <Myself />
              <div style={{ height: "8rem" }} />
              <About />
              <div style={{ height: "8rem" }} />
              <Skillset />
              <div style={{ height: "8rem" }} />
              <Project />
              <div style={{ height: "8rem" }} />
              <Blogs theme={theme} />
              <div
                style={{
                  textAlign: "center",
                  marginTop: "1rem",
                  position: "relative",
                  paddingBottom: "1rem",
                  fontFamily: "lato",
                  opacity: "0.5",
                  color: theme ? "#eee" : "#000",
                }}
              >
                Developed by Gaurav Sinha • 2021
              </div>
            </>
          </Suspense>{" "}
        </div>{" "}
      </div>
    </>
  );
}

export default App;
