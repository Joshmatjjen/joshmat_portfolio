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
import graphqlIcon from "../../assets/svg/graphql.svg";
import javascriptIcon from "../../assets/svg/javascript.svg";
import mongodbIcon from "../../assets/svg/mongodb.svg";
import nodejsIcon from "../../assets/svg/nodejs.svg";
import netlifyIcon from "../../assets/svg/netlify.svg";
import dialogFlowIcon from "../../assets/svg/dialogFlow.svg";
import firebaseIcon from "../../assets/svg/firebase.svg";
import ionicIcon from "../../assets/svg/ionic.svg";

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
            <SkillCard img={graphqlIcon} bgColor="#FF408118" />
            <SkillCard img={javascriptIcon} bgColor="#FFD60118" />
            <SkillCard img={mongodbIcon} bgColor="#6DAC4718" />
            <SkillCard img={nodejsIcon} bgColor="#8BC84B18" />
            <SkillCard img={netlifyIcon} bgColor="#25C7B718" />
            <SkillCard img={ionicIcon} bgColor="#177EFF18" />
            <SkillCard img={firebaseIcon} bgColor="#FECD3018" />
            <SkillCard img={dialogFlowIcon} bgColor="#FF980018" />
          </section>

          {/* Right Section */}
          <section className="skills__section--right">
            <div className="skills__section--right__box">
              <div className="skills__section--right__box--lft">
                <p>2016</p>
              </div>
              <div className="skills__section--right__box--rgt">
                <ExperienceCard
                  experience="Php & Web Developer"
                  company="Freelancing"
                />
              </div>
            </div>

            <div className="skills__section--right__box">
              <div className="skills__section--right__box--lft">
                <p>2018</p>
              </div>
              <div className="skills__section--right__box--rgt">
                <ExperienceCard
                  experience="Scholarship - Google Africa Android (Java)"
                  company="Andela Learning Community"
                />
              </div>
            </div>

            <div className="skills__section--right__box">
              <div className="skills__section--right__box--lft">
                <p>2019</p>
              </div>
              <div className="skills__section--right__box--rgt">
                <ExperienceCard
                  experience="Mobile & WordPress Developer"
                  company="Freelancing"
                />
                <ExperienceCard
                  experience="Snr. React & React-Native Developer"
                  company="Cre8tiveTech"
                />
              </div>
            </div>
            {/* <ExperienceCard experience="UI/UX Web Designer" company="Google" />
            <ExperienceCard
              experience="Senior React-Native Developer"
              company="WAW Media"
            /> */}
            <div className="skills__section--right__box">
              <div className="skills__section--right__box--lft">
                <p>2020</p>
              </div>
              <div className="skills__section--right__box--rgt">
                <ExperienceCard
                  experience="Full-Stack Developer (MERN)"
                  company="Joshmat"
                />
                <ExperienceCard
                  experience="Snr. React Developer"
                  company="FXC Invest"
                />
                <ExperienceCard
                  experience="Full-Stack Developer (MERN)"
                  company="BaseAfrique"
                />
              </div>
            </div>

            <div className="skills__section--right__box">
              <div className="skills__section--right__box--lft">
                <p>2021</p>
              </div>
              <div className="skills__section--right__box--rgt">
                <ExperienceCard
                  experience="Snr. React-Native Engineer"
                  company="Practx"
                />
                <ExperienceCard
                  experience="Snr. React-Native Engineer"
                  company="Vendior"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;
