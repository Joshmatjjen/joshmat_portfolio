/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
// import "../node_modules/fullpage.js/vendors/scrolloverflow"; // Optional. When usi/ng scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import "./styles.scss";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Work from "./pages/work/Work";
// import Testimony from "./pages/testimony/Testimony";
import Contact from "./pages/contact/Contact";

const pluginWrapper = () => {
  require("./extension/fullpage.extensions.min");
};

interface Props {
  currentMode?: string;
  getTriggerProps?: any;
  activeModal?: any;
  currentSlideState?: number;
  navState?: string;
  setNavState?: any;
}

const FullPageWrapper: React.FC<Props> = ({
  currentMode,
  getTriggerProps,
  activeModal,
  currentSlideState,
  navState,
  setNavState,
}) => {
  const [anchors, setLockAnchors] = useState([
    "about",
    "skills",
    "work",
    "contact",
  ]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [isActive]);

  return (
    <ReactFullpage
      lazyLoading={true}
      // scrollBar={true}
      // pluginWrapper={pluginWrapper}
      anchors={anchors}
      navigation
      scrollingSpeed={isActive ? 100000000 : 1000}
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
            <Skills
              currentMode={currentMode}
              getTriggerProps={getTriggerProps}
              navState={navState}
              setNavState={setNavState}
            />

            <Work
              currentMode={currentMode}
              getTriggerProps={getTriggerProps}
              currentSlideState={currentSlideState}
            />
            <Contact />
          </div>
        );
      }}
    />
  );
};

export default FullPageWrapper;
