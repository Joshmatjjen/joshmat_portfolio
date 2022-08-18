import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/svg/logo-2.svg";
import logoWhite from "../assets/svg/logo-white.svg";
import logoBlack from "../assets/svg/logo-black.svg";

interface Props {
  styling?: {
    title?: React.CSSProperties;
    subtitle?: React.CSSProperties;
  };
  experience?: any;
  company?: string;
}

const ExperienceCard: React.FC<Props> = ({ styling, experience, company }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  // const skillCard: React.CSSProperties = {
  // }

  // useEffect(() => {
  //   console.log(menuOpen);
  // }, [menuOpen]);
  return (
    <div className="skills__section--right__box--rgt__item">
      <h3 style={{ ...styling?.title }}>{experience}</h3>
      <p style={{ ...styling?.subtitle }}>{company}</p>
    </div>
  );
};

export default ExperienceCard;
