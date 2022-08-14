/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
// import "./Skills.scss";
import { useLocation } from "react-router-dom";
import SkillCard from "../component/SkillCard";
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

import ExperienceCard from "../component/ExperienceCard";
import { toast } from "react-toastify";
import { useModal } from "react-morphing-modal";
interface Props {
  currentMode?: string;
  getTriggerProps?: any;
}

const ExperienceModal: React.FC<Props> = ({ currentMode, getTriggerProps }) => {
  // const location = useLocation();
  const [navSwitch, setNavSwitch] = useState<string>("experience");
  const [experienceHeight, setExperienceHeight] = useState<number>(0);

  const notify = (message: string | {} | null | undefined) => {
    currentMode === "light"
      ? toast(message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      : toast.dark(message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
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
        style={{
          display: "flex",
          justifyContent: "center",
          // flexDirection: "column",
          marginTop: 0,
          paddingTop: 0,
          marginBottom: "6rem",
          // width: "100%",
        }}
      >
        <div className="skills__section--right__box">
          <div className="skills__section--right__box--lft">
            <p>2021</p>
            <div className="vl"></div>
            <p style={{ marginBottom: "3rem" }}>2022</p>
          </div>
          <div className="skills__section--right__box--rgt">
            <ExperienceCard
              experience="Snr. React-Native Engineer & App Maintainer"
              company="Practx"
            />
            <ExperienceCard
              experience="Snr. React-Native Engineer & App Maintainer"
              company="Vendoir"
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
              experience="Mobile & WordPress Developer"
              company="Freelancing"
            />
            <ExperienceCard
              experience="Snr. React & React-Native Developer"
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
  );
};

export default ExperienceModal;
