import logo from "./assets/svg/logo-2.svg";
import "./App.scss";
import "./Header.scss";
import "./themes/mixins.scss";
import "./themes/variables.scss";
import { Route, useLocation, Routes } from "react-router-dom";
// import FullPageWrapper from "./FullPageWrapper";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Header from "./component/Header";
import Home from "./pages/home/Home";
import FullPageWrapper from "./FullPageWrapper";
import Snowfall from "react-snowfall";

const  App: React.FC = () =>  {
  const location = useLocation();
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
            <p>J</p>
            <img src={logo} className="loader__Logo--App-logo" alt="logo" />
            <p>K</p>
          </div>
        </div>
      )}
      <div className="scroll-down">
        <p> &larr; &nbsp; &nbsp; &nbsp; Scroll down</p>
      </div>
      <Snowfall
        // Changes the snowflake color
        // color="red"
        // Applied to the canvas element
        // style={{ background: "#fff" }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={10}
        radius={[0.5, 1.0]}
      />
      <Header />

      {/* <Home /> */}
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
