import logo from "./assets/svg/ball.svg";
import logoWhite from "./assets/svg/logo-white.svg";
import "./App.scss";
import "./Header.scss";
import "./themes/mixins.scss";
import "./themes/variables.scss";
import { Route, useLocation, Routes, Router, useNavigate } from "react-router-dom";
// import FullPageWrapper from "./FullPageWrapper";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Header from "./component/Header";
import About from "./pages/about/About";
import FullPageWrapper from "./FullPageWrapper";
import Snowfall from "react-snowfall";
import "react-tippy/dist/tippy.css";

const  App: React.FC = () =>  {
  // const location = useLocation();
  // let navigate = useNavigate();
  const [currentMode, setCurrentMode] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // console.log(location.hash);
  useEffect(() => {
    // document.documentElement.webkitRequestFullscreen();
    window.scrollTo(0, 1);
    setTimeout(() => {
      setIsLoading(false);
    }, 7000);
  });
  return (
    <div className="App">
      <Snowfall
        // Changes the snowflake color
        color={currentMode === "light" ? "#242424" : "#ffffff"}
        // Applied to the canvas element
        style={{ zIndex: 200 }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={15}
        radius={[0.5, 1.0]}
      />
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

      <Header setCurrentMode={setCurrentMode} />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* <About /> */}
      {/* <FullPageWrapper /> */}
      <div className="social">
        <div className="social--content">
          <a
            className="social--content--link"
            href="https://www.facebook.com/JoshmatJjen"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            className="social--content--link"
            href="https://www.instagram.com/JoshmatJjen/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="social--content--link"
            href="https://www.facebook.com/JoshmatJjen"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          {/* <a
            className="social--content--link"
            href="https://twitter.com/Joshmat_jjen"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a> */}
        </div>
      </div>
      <Routes>
        <Route
          index={true}
          element={
            <FullPageWrapper
              currentMode={currentMode === "light" ? "light" : "dark"}
            />
          }
        />
      </Routes>

      {/* <div className="scrollText">
        <p> &larr; &nbsp; &nbsp; Scroll down</p>
      </div> */}
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
