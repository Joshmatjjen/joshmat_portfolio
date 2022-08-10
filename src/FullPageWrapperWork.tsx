/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
// import "../node_modules/fullpage.js/vendors/scrolloverflow"; // Optional. When usi/ng scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import "./styles.scss";
import Work from "./pages/work/Work";

interface Props {
  currentMode?: string;
  getTriggerProps?: any;
  activeModal?: any;
  currentSlideState?: any;
}

const anchors = [ "work"];

const FullPageWrapperWork: React.FC<Props> = ({
  currentMode,
  getTriggerProps,
  currentSlideState,
}) => {
  return (
    <ReactFullpage
      lazyLoading={true}
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
            <Work
              currentMode={currentMode}
              getTriggerProps={getTriggerProps}
              currentSlideState={currentSlideState}
            />
          </div>
        );
      }}
    />
  );
};

export default FullPageWrapperWork;
