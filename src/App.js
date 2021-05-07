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

function App() {
  const delay = useEffect(() => {
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
  return (
    <>
      <delay>
        <div className={theme ? "App dark" : "App light"}>
          <Toggle toggleTheme={toggleTheme} theme={theme} />
          <Navbar />
          <Myself />
          <About />
          <Contact theme={theme} />
        </div>{" "}
      </delay>
    </>
  );
}

export default App;
