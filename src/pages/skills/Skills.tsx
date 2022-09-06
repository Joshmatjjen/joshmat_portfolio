/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Skills.scss";
import { useLocation } from "react-router-dom";
import SkillCard from "../../component/SkillCard";
import htmlIcon from "../../assets/svg/html5.svg";
import cssIcon from "../../assets/svg/css3.svg";
import sassIcon from "../../assets/svg/sass.svg";
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
import expoIcon from "../../assets/svg/expo.svg";
import { ReactHeight } from "react-height";

import ExperienceCard from "../../component/ExperienceCard";
import { toast } from "react-toastify";
import { useModal } from "react-morphing-modal";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

interface Props {
  currentMode?: string;
  getTriggerProps?: any;
  navState?: string;
  setNavState?: any;
}

const Skills: React.FC<Props> = ({
  currentMode,
  getTriggerProps,
  navState,
  setNavState,
}) => {
  // const location = useLocation();
  const [navSwitch, setNavSwitch] = useState<string>("experience");
  const [experienceHeight, setExperienceHeight] = useState<number>(0);
  const [skillHeight, setSkillHeight] = useState<number>(0);
  const { height, width } = useWindowDimensions();
  console.log("Nav state---", width);

  useEffect(() => {
    setNavSwitch(navSwitch);
  }, [navSwitch]);

  return (
    <div className="section">
      <div className="skills-nav">
        <a
          onClick={() => {
            setNavState("skills");
            setNavSwitch("skills");
          }}
        >
          <p
            style={{
              borderBottom:
                navSwitch === "skills"
                  ? "1px solid var(--color-secondary)"
                  : "none",
            }}
          >
            Skills
          </p>
        </a>
        <a
          onClick={() => {
            setNavState("experience");
            setNavSwitch("experience");
          }}
        >
          <p
            style={{
              borderBottom:
                navSwitch === "experience"
                  ? "1px solid var(--color-secondary)"
                  : "none",
            }}
          >
            Experience
          </p>
        </a>
      </div>
      <div className="skills" style={{}}>
        <div className="skills__header">
          <h1>Skills & Experience</h1>
        </div>
        <div className="skills__section">
          {/* Left Section */}

          <ReactHeight
            onHeightReady={(height) =>
              console.log("Real Skill Left Height:++ ", height)
            }
            getElementHeight={(el) => {
              console.log("Real Skill Left Element:++ ", el.clientHeight);
              setSkillHeight(el.scrollHeight);
            }}
            className="skills__section--left"
            style={{ display: navSwitch === "skills" && "flex" }}
          >
            {currentMode && (
              <>
                <SkillCard
                  currentMode={currentMode}
                  title="Html"
                  img={htmlIcon}
                  bgColor="#e44a2718"
                />
                <SkillCard
                  currentMode={currentMode}
                  title="Css"
                  img={cssIcon}
                  bgColor="#0377BD13"
                />
                <SkillCard
                  currentMode={currentMode}
                  title="Sass"
                  img={sassIcon}
                  bgColor="#DC5E9B13"
                />
                <SkillCard
                  currentMode={currentMode}
                  title="React & React-Native"
                  img={reactNativeIcon}
                  bgColor="#80DEEA18"
                />
                <SkillCard
                  currentMode={currentMode}
                  title="Expo"
                  img={expoIcon}
                  bgColor="#00000018"
                />
                <SkillCard
                  currentMode={currentMode}
                  title="TypeScript"
                  img={typeScriptIcon}
                  bgColor="#1976D213"
                />
                <SkillCard
                  currentMode={currentMode}
                  title="Vue"
                  img={vueIcon}
                  bgColor="#81C78413"
                />
                <SkillCard
                  currentMode={currentMode}
                  title="WordPress"
                  img={wordpressIcon}
                  bgColor="#02579B18"
                />
                <SkillCard
                  currentMode={currentMode}
                  title="GraphQL"
                  img={graphqlIcon}
                  bgColor="#FF408118"
                />
                <SkillCard
                  currentMode={currentMode}
                  title="Javascript"
                  img={javascriptIcon}
                  bgColor="#FFD60118"
                />
                <SkillCard
                  currentMode={currentMode}
                  title="Mongodb"
                  img={mongodbIcon}
                  bgColor="#6DAC4718"
                />
                <SkillCard
                  currentMode={currentMode}
                  title="Nodejs"
                  img={nodejsIcon}
                  bgColor="#8BC84B18"
                />
                <SkillCard
                  currentMode={currentMode}
                  title="Netlify"
                  img={netlifyIcon}
                  bgColor="#25C7B718"
                />
                <SkillCard
                  currentMode={currentMode}
                  title="Ionic"
                  img={ionicIcon}
                  bgColor="#177EFF18"
                />
                <SkillCard
                  currentMode={currentMode}
                  title="Firebase"
                  img={firebaseIcon}
                  bgColor="#FECD3018"
                />
                <SkillCard
                  currentMode={currentMode}
                  title="DialogFlow"
                  img={dialogFlowIcon}
                  bgColor="#FF980018"
                />
              </>
            )}
          </ReactHeight>

          {/* Right Section */}

          <ReactHeight
            onHeightReady={(height) =>
              console.log("Real Skill Left Height:++ ", height)
            }
            dirty={false}
            getElementHeight={(el) => {
              // console.log(
              //   "Real Skill Right Element:++ ",
              //   el.scrollHeight,
              //   window.innerHeight - 98
              // );
              setExperienceHeight(el.scrollHeight);
            }}
            className="skills__section--right"
            style={{ display: navSwitch === "experience" && "flex" }}
          >
            <div className="skills__section--right__box">
              <div className="skills__section--right__box--lft">
                <p>2022</p>
                <div className="vl"></div>
                <p style={{ marginBottom: "3rem" }}>2021</p>
              </div>
              <div className="skills__section--right__box--rgt">
                <ExperienceCard
                  experience="Snr. React Native Engineer"
                  company="Vendoir"
                />
                <ExperienceCard
                  experience="Snr. React Native Engineer"
                  company="Practx"
                />
              </div>
            </div>
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
                <p>2019</p>
              </div>
              <div className="skills__section--right__box--rgt">
                <ExperienceCard
                  experience="WordPress & React Native Developer"
                  company="Health Education and Empowerment Initiative (HEDEN)"
                />
                <ExperienceCard
                  experience="Mobile Web & WordPress Developer"
                  company="Freelancing"
                />
                <ExperienceCard
                  experience="Full-Stack Developer (MERN)"
                  company="Cre8tiveTech"
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
                <p>2016</p>
              </div>
              <div className="skills__section--right__box--rgt">
                <ExperienceCard
                  experience="Php & Web Developer"
                  company="Freelancing"
                />
              </div>
            </div>
          </ReactHeight>
        </div>
      </div>

      <>
        <div
          style={{
            display:
              (width >= 900 && skillHeight > window.innerHeight - 158) ||
              (width >= 900 && experienceHeight > window.innerHeight - 158)
                ? "block"
                : "none",
            width: width,
            background: "var(--color-bg)",
            position: "absolute",
            bottom: 0,
            left: -80,
          }}
          className="bottom-more"
          // onClick={() => notify("😁 Coming Soon")}
          {...getTriggerProps({ id: "skill&experience" })}
        >
          <p>Show more</p>
        </div>

        <button
          style={{
            display:
              width < 900 &&
              navSwitch === "experience" &&
              experienceHeight > window.innerHeight - 158
                ? "block"
                : "none",
          }}
          className="bottom-more"
          // onClick={() => notify("😁 Coming Soon")}
          {...getTriggerProps({ id: "experience" })}
        >
          <p>Show more</p>
        </button>

        <button
          style={{
            display:
              width < 900 &&
              navSwitch === "skills" &&
              skillHeight > window.innerHeight - 158
                ? "block"
                : "none",
          }}
          className="bottom-more"
          // onClick={() => notify("😁 Coming Soon")}
          {...getTriggerProps({ id: "skill" })}
        >
          <p>Show more</p>
        </button>
      </>
    </div>
  );
};

export default Skills;
