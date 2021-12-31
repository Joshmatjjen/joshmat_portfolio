/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
// import "../node_modules/fullpage.js/vendors/scrolloverflow"; // Optional. When usi/ng scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import "./styles.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Achievement from "./pages/achievement/Achievement";
// import Testimony from "./pages/testimony/Testimony";
// import Contact from "./pages/contact/Contact";

const anchors = ["home", "about", "achievements", "testimony", "contact"];
const pluginWrapper = () => {
  require("./extension/fullpage.extensions.min");
};
const FullPageWrapper = () => (
  <ReactFullpage
    lazyLoading={true}
    // scrollBar={true}
    // pluginWrapper={pluginWrapper}
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#04070e", "#03060c", "#04070e", "#03060c", "#03060c"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    
    
    render={() => {
      // console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div className="fullpage">
          <Home />
          <About />
          <Achievement />
          {/* <Testimony /> */}
          {/* <Contact /> */}
        </div>
      );
    }}
  />
);

export default FullPageWrapper;
