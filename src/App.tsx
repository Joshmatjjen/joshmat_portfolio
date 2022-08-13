import logo from "./assets/svg/ball.svg";
import logoWhite from "./assets/svg/logo-white.svg";
import "./App.scss";
import "./Header.scss";
import "./themes/mixins.scss";
import "./themes/variables.scss";
import {
  Route,
  useLocation,
  Routes,
  Router,
  useNavigate,
} from "react-router-dom";
// import FullPageWrapper from "./FullPageWrapper";
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Header from "./component/Header";
import About from "./pages/about/About";
import FullPageWrapper from "./FullPageWrapper";
import Snowfall from "react-snowfall";
import "react-tippy/dist/tippy.css";
import { useModal, Modal } from "react-morphing-modal";
import "react-morphing-modal/dist/ReactMorphingModal.css";
import SkillModal from "./component/SkillModal";
import FullPageWrapperWork from "./FullPageWrapperWork";
import vendoirJson from "./assets/json/vendoir.json";
import waveAppJson from "./assets/json/waveApp.json";
import sweetmotherJson from "./assets/json/sweetmother.json";
import practxJson from "./assets/json/practx.json";
import jobotsJson from "./assets/json/jobots.json";
import waveWebJson from "./assets/json/waveWeb.json";

const LoremIpsum: React.FC = () => {
  const lorem: string[] = [];

  for (let i = 0; i < 10; i++) {
    lorem.push(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );
  }

  return (
    <>
      {lorem.map((el) => (
        <p style={{ color: "white" }}>{el}</p>
      ))}
    </>
  );
};

const App: React.FC = () => {
  const { open, close, modalProps, activeModal, getTriggerProps } = useModal({
    background: "#000000ea",
  });
  const myRef = React.useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [currentSlideState, setCurrentSlideState] = useState<number>(0);
  // const location = useLocation();
  console.log("Acrtive modal", activeModal);
  let componentToRender: React.ReactNode;

  switch (activeModal) {
    case "vendoir":
      componentToRender = <SkillModal data={vendoirJson} />;
      break;
    case "waveApp":
      componentToRender = <SkillModal data={waveAppJson} />;
      break;
    case "sweetmother":
      componentToRender = <SkillModal data={sweetmotherJson} />;
      break;
    case "practx":
      componentToRender = <SkillModal data={practxJson} />;
      break;
    case "jobots":
      componentToRender = <SkillModal data={jobotsJson} />;
      break;
    case "waveWeb":
      componentToRender = <SkillModal data={waveWebJson} />;
      break;
    default:
      componentToRender = <SkillModal data={vendoirJson} />;
      break;
  }

  // let navigate = useNavigate();
  const imgEl = useRef<HTMLImageElement>(null);

  const [currentMode, setCurrentMode] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (activeModal) {
      setShowModal(true);
      activeModal === "vendoir" && setCurrentSlideState(0);
      activeModal === "waveApp" && setCurrentSlideState(1);
      activeModal === "sweetmother" && setCurrentSlideState(2);
      activeModal === "practx" && setCurrentSlideState(3);
      activeModal === "jobots" && setCurrentSlideState(4);
      activeModal === "waveWeb" && setCurrentSlideState(5);
    }
  }, [activeModal]);

  useEffect(() => {
    // document.documentElement.webkitRequestFullscreen();
    window.scrollTo(0, 1);
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
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
            href="https://github.com/Joshmatjjen"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="social--content--link"
            href="https://www.linkedin.com/in/joshmatjjen"
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
          {/* <a
            className="social--content--link"
            href="https://www.facebook.com/JoshmatJjen"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a> */}
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
            <>
              {/* <LoremIpsum/> */}
              {showModal ? (
                <FullPageWrapperWork
                  currentMode={currentMode === "light" ? "light" : "dark"}
                  getTriggerProps={getTriggerProps}
                  activeModal={activeModal}
                  currentSlideState={currentSlideState}
                />
              ) : (
                <FullPageWrapper
                  currentMode={currentMode === "light" ? "light" : "dark"}
                  getTriggerProps={getTriggerProps}
                  activeModal={activeModal}
                  currentSlideState={currentSlideState}
                />
              )}
            </>
          }
        />
      </Routes>

      <Modal
        {...modalProps}
        close={() => {
          setShowModal(false);
          setTimeout(() => {
            close();
          }, 500);
        }}
      >
        {componentToRender}
      </Modal>

      {/* <div className="scrollText">
        <p> &larr; &nbsp; &nbsp; Scroll down</p>
      </div> */}
      {/* <ToastContainer /> */}
    </div>
  );
};

export default App;
