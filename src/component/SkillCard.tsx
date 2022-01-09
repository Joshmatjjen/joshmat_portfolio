import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/svg/logo-2.svg";
// import logoWhite from "../assets/svg/logo-white.svg";
// import logoBlack from "../assets/svg/logo-black.svg";
import { Tooltip, withTooltip } from "react-tippy";

interface Props {
  title: string;
  styling?: React.CSSProperties;
  stylingImg?: React.CSSProperties;
  img?: any;
  bgColor?: string;
  currentMode?: string | any;
  test?: any;
}

const SkillCard: React.FC<Props> = ({
  title,
  styling,
  stylingImg,
  img,
  bgColor,
  currentMode,
  test,
}) => {
  // const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(currentMode);
  console.log("Current mode in works", test);
  useEffect(() => setMenuOpen(currentMode), [currentMode]);

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
          <div
            className="skillCard"
            style={{ ...styling, backgroundColor: bgColor }}
          >
            <img
              src={img}
              alt="skillCard_img"
              style={{ ...stylingImg }}
              className="skillCard__img"
            />
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
