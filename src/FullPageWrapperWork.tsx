/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
// import "../node_modules/fullpage.js/vendors/scrolloverflow"; // Optional. When usi/ng scrollOverflow:true

import "./styles.scss";
import Work from "./pages/work/Work";

interface Props {
  currentMode?: string;
  getTriggerProps?: any;
  activeModal?: any;
  currentSlideState?: any;
}

const anchors = ["work"];

const FullPageWrapperWork: React.FC<Props> = ({
  currentMode,
  getTriggerProps,
  currentSlideState,
}) => {
  return (
    <div
      className="fullpage"
      style={{
        // height: "100vh",
        overflow: "hidden",
        backgroundColor: "var(--color-bg)",
      }}
    >
      <Work
        currentMode={currentMode}
        getTriggerProps={getTriggerProps}
        currentSlideState={currentSlideState}
      />
    </div>
  );
};

export default FullPageWrapperWork;
