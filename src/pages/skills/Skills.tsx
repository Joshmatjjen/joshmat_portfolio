import React from "react";
import "./Skills.scss";
import HomeImage from "../../assets/img/homeImage1.png";
import Typist from "react-typist";
import { useLocation } from "react-router-dom";

const Skills = () => {
  const location = useLocation();
  return (
    <div className="section">
      <div className="skills" style={{ height: window.innerHeight }}>
        <div className="skills__header">
          <h1>About Me</h1>
        </div>
        <div className="skills__section">
          {/* Left Section */}
          <section className="skills__section--left">
            <img src={HomeImage} alt="" />
          </section>

          {/* Right Section */}
          <section className="skills__section--right">
            <div className="skills__section--right--intro">
              <div className="skills__section--right--intro__top">
                <h1>skills Me</h1>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;
