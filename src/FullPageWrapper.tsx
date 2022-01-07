/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
// import "../node_modules/fullpage.js/vendors/scrolloverflow"; // Optional. When usi/ng scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import "./styles.scss";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Work from "./pages/work/Work";
// import Testimony from "./pages/testimony/Testimony";
// import Contact from "./pages/contact/Contact";

const anchors = ["about", "skills", "work", "testimony", "contact"];
const pluginWrapper = () => {
  require("./extension/fullpage.extensions.min");
};

interface Props {
  currentMode?: string
}

const FullPageWrapper: React.FC<Props> = ({currentMode}) => (
  <ReactFullpage
    lazyLoading={true}
    // scrollBar={true}
    // pluginWrapper={pluginWrapper}
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    // sectionsColor={["#04070e", "#03060c", "#04070e", "#03060c", "#03060c"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={() => {
      // console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div className="fullpage">
          <About />
          <Skills currentMode={currentMode} />
          <Work currentMode={currentMode} />
          {/* <Testimony /> */}
          {/* <Contact /> */}
        </div>
      );
    }}
  />
);

export default FullPageWrapper;
