import logo from "./assets/svg/ball.svg";
import logoWhite from "./assets/svg/logo-white.svg";
import "./App.scss";
import "./Header.scss";
import "./themes/mixins.scss";
import "./themes/variables.scss";
import { Route, useLocation, Routes } from "react-router-dom";
// import FullPageWrapper from "./FullPageWrapper";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Header from "./component/Header";
import About from "./pages/about/About";
import FullPageWrapper from "./FullPageWrapper";
import Snowfall from "react-snowfall";

const  App: React.FC = () =>  {
  // const location = useLocation();
  const [currentMode, setCurrentMode] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // console.log(location.hash);
  useEffect(() => {
    // document.documentElement.webkitRequestFullscreen();
    window.scrollTo(0, 1);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });
  return (
    <div className="App">
      {isLoading && (
        <div className="loader" style={{ height: window.innerHeight }}>
          <div className="loader__Logo">
            <img
              src={logoWhite}
              className="loader__Logo--main-logo"
              alt="logo"
            />
            <img src={logo} className="loader__Logo--App-logo" alt="logo" />
          </div>
        </div>
      )}
      <div className="scroll-down">
        <p> &larr; &nbsp; &nbsp; &nbsp; Scroll down</p>
      </div>
      <Snowfall
        // Changes the snowflake color
        color={currentMode === "light" ? "#242424" : "#ffffff"}
        // Applied to the canvas element
        // style={{ background: "#fff" }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={10}
        radius={[0.5, 1.0]}
      />
      <Header setCurrentMode={setCurrentMode} />

      {/* <About /> */}
      {/* <FullPageWrapper /> */}
      <Routes>
        <Route index={true} element={<FullPageWrapper />} />
      </Routes>

      {/* <div className="scrollText">
        <p> &larr; &nbsp; &nbsp; Scroll down</p>
      </div> */}
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
