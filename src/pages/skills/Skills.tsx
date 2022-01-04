import React from "react";
import "./Skills.scss";
import HomeImage from "../../assets/img/homeImage1.png";
import Typist from "react-typist";
import { useLocation } from "react-router-dom";
import SkillCard from "../../component/SkillCard";
import htmlIcon from "../../assets/svg/html5.svg";
import cssIcon from "../../assets/svg/css3.svg";
import reactNativeIcon from "../../assets/svg/react_native.svg";
import typeScriptIcon from "../../assets/svg/typescript.svg";
import vueIcon from "../../assets/svg/vue_js.svg";
import wordpressIcon from "../../assets/svg/wordpress.svg";
import ExperienceCard from "../../component/ExperienceCard";

const Skills = () => {
  const location = useLocation();
  return (
    <div className="section">
      <div className="skills" style={{}}>
        <div className="skills__header">
          <h1>Skills & Experience</h1>
        </div>
        <div className="skills__section">
          {/* Left Section */}
          <section className="skills__section--left">
            <SkillCard img={htmlIcon} bgColor="#e44a2718" />
            <SkillCard img={cssIcon} bgColor="#0377BD13" />
            <SkillCard img={reactNativeIcon} bgColor="#80DEEA18" />
            <SkillCard img={typeScriptIcon} bgColor="#1976D213" />
            <SkillCard img={vueIcon} bgColor="#81C78413" />
            <SkillCard img={wordpressIcon} bgColor="#02579B18" />
            <SkillCard img={wordpressIcon} bgColor="#02579B18" />
          </section>

          {/* Right Section */}
          <section className="skills__section--right">
            <div className="skills__section--right--lft">
              <p>2020</p>
            </div>
            <div className="skills__section--right--rgt">
              <ExperienceCard
                experience="Senior Product Designer"
                company="AMAZON INC"
              />
              <ExperienceCard experience="UI/UX Web Designer" company="Google" />
              <ExperienceCard experience="Senior React-Native Developer" company="WAW Media" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;
