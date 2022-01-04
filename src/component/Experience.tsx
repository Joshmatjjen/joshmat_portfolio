import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/svg/logo-2.svg";
import logoWhite from "../assets/svg/logo-white.svg";
import logoBlack from "../assets/svg/logo-black.svg";

interface Props {
  styling?: React.CSSProperties;
  img?: any;
  bgColor?: string;
}

const Experience: React.FC<Props> = ({ styling, img, bgColor }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const skillCard: React.CSSProperties = {
    
  }

  // useEffect(() => {
  //   console.log(menuOpen);
  // }, [menuOpen]);
  return (
    <div className="skillCard" style={{ backgroundColor: bgColor }}>
      <img src={img} alt="skillCard_img" className="skillCard__img" />
    </div>
  );
};

export default Experience;
