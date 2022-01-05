import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/svg/logo-2.svg";
// import logoWhite from "../assets/svg/logo-white.svg";
// import logoBlack from "../assets/svg/logo-black.svg";
import { Tooltip, withTooltip } from "react-tippy";

interface Props {
  title: string;
  styling?: React.CSSProperties;
  img?: any;
  bgColor?: string;
  currentMode?: string | any;
}

const SkillCard: React.FC<Props> = ({
  title,
  styling,
  img,
  bgColor,
  currentMode,
}) => {
  // const location = useLocation();
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {currentMode === "light" && (
        <Tooltip
          // options
          interactive={true}
          title={title}
          position="bottom"
          trigger="mouseenter"
          theme={"light"}
          arrow={true}
          arrowSize="regular"
        >
          <div className="skillCard" style={{ backgroundColor: bgColor }}>
            <img src={img} alt="skillCard_img" className="skillCard__img" />
          </div>
        </Tooltip>
      )}
      {currentMode === "dark" && (
        <Tooltip
          // options
          interactive={true}
          title={title}
          position="bottom"
          trigger="mouseenter"
          theme={"dark"}
          arrow={true}
          arrowSize="regular"
        >
          <div className="skillCard" style={{ backgroundColor: bgColor }}>
            <img src={img} alt="skillCard_img" className="skillCard__img" />
          </div>
        </Tooltip>
      )}
    </>
  );
};

export default SkillCard;