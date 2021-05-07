import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Myself from "./Components/Myself/Myself";
import About from "./Components/About/About";
// import Skillset from "./Components/Skillset/Skillset";
// import Project from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";
// import WorkExp from "./Components/WorkExp/WorkExp";
// import Footer from "./Components/Footer/Footer";
import Toggle from "./Components/Toggle/Toggle";
import Aos from "aos";
import animationData from "./loading.json";
import Lottie from "react-lottie";
function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    if (theme) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [loading, setLoading] = useState(true);

  setTimeout(function () {
    setLoading(false);
  }, 1700);

  return (
    <>
      {loading ? (
        <Lottie
          options={defaultOptions}
          height={250}
          width={250}
          style={{ marginTop: "12rem" }}
        />
      ) : (
        <>
          <div className={theme ? "App dark" : "App light"}>
            <Toggle toggleTheme={toggleTheme} theme={theme} />
            <Navbar />
            <Myself />
            <About />
            <Contact theme={theme} />
          </div>{" "}
        </>
      )}
    </>
  );
}

export default App;
