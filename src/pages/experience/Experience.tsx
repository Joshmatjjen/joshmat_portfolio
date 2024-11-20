/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Experience.scss";
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
import vendoir from "../../assets/img/vendoirIcon.png";
import lasoft from "../../assets/img/lasoft.jpeg";
import heden from "../../assets/img/heden.png";
import baseAfrique from "../../assets/img/baseafrique.png";
import cre8tivetech from "../../assets/img/cre8tivetech.png";

import { ReactHeight } from "react-height";

import ExperienceCard from "../../component/ExperienceCard";
import { toast } from "react-toastify";
import { useModal } from "react-morphing-modal";
import Accordion from "../../component/Accordion";

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

const Experience: React.FC<Props> = ({
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

  const experience = [
    {
      title: "Software Engineer",
      company: "Vendoir",
      location: "Remote, United Kingdom",
      period: "Jan 2020 - Nov 2024",
      logo: vendoir,
      description: [
        "Led the development of a multi-platform mobile app using (Android, IOS, Web ), using HTML, CSS, JavaScript, React, React Native, Typescript, Redux, AWS, Stripe, Sentry.",
        "Implemented CI/CD pipelines to automate testing and deployment.",
        "Mentored junior developers and led code review sessions.",
      ],
      skills: [
        "Javascript",
        "Html",
        "Css",
        "React",
        "React Native",
        "Typescript",
        "Redux",
        "Nodejs",
        "Android",
        "IOS",
        "AWS",
      ],
      website: "https://vendoir.com/",
    },
    {
      title: "Full-Stack React Developer",
      company: "Niyo Fest",
      location: "Remote, United Kingdom (Contract)",
      period: "Aug 2024 - Oct 2024",
      logo: vendoir,
      description: [
        "Led the development of a multi-platform mobile app using (Android, IOS, Web ), using HTML, CSS, JavaScript, React, React Native, Typescript, Redux, AWS, Stripe, Sentry.",
        "Implemented CI/CD pipelines to automate testing and deployment.",
        "Mentored junior developers and led code review sessions.",
      ],
      skills: [
        "Javascript",
        "Html",
        "Css",
        "React",
        "React Native",
        "Typescript",
        "Redux",
        "Nodejs",
        "Android",
        "IOS",
        "AWS",
      ],
      website: "https://vendoir.com/",
    },
    {
      title: "Frontend Developer",
      company: "Lasoft",
      location: "Remote, Poland",
      period: "May 2017 - Dec 2019",
      logo: lasoft,
      description: [
        "Developed responsive user interfaces using JavaScript, HTML, CSS, React.js, Redux, Next.js, Typescript.",
        "Utilized React State Management tools like Redux-Thunk, Redux-Saga, Redux-Toolkit to optimize the development process and enhancing application performance and reduce data retrieval times and increasing application speed, which fasten the implementation of new features",
        "I conducted thorough testing and code reviews to ensure optimal performance and maintainability of applications, which decreased post-deployment bugs, and improved application stability.",
      ],
      skills: [
        "Javascript",
        "Html",
        "Css",
        "React",
        "Typescript",
        "Redux",
        "Nodejs",
        "Webflow",
        "jQuery",
      ],
      website: "https://lasoft.org/",
    },
    {
      title: "Full-Stack & React-Native Developer",
      company: "HEDEN",
      location: "Remote, Nigeria",
      period: "Jan 2019 - Mar 2021",
      logo: heden,
      description: [
        "Developed and maintained mobile applications using React-Native, ensuring optimal performance and user experience, which result in an increase in user engagement and a reduction in crash rates.",
        "Built a custom WordPress API to send post content to the app, which streamlined content updates.",
      ],
      skills: ["Wordpress", "JavaScript", "React", "React Native", "Android"],
      website: "https://hedenngo.org/",
    },
    {
      title: "Full-Stack Developer (MERN)",
      company: "BaseAfrique",
      location: "Remote, United Kingdom",
      period: "Oct 2022 - Jul 2023",
      logo: baseAfrique,
      description: [
        "Developed responsive web applications using MERN stack technologies (MongoDB, Express.js, React.js, Typescript, Node.js) ",
        "Implemented RESTful APIs to integrate third-party services and enhance the functionality of web applications",
      ],
      skills: [
        "Html",
        "CSS",
        "Javascript",
        "Typescript",
        "React",
        "Nodejs",
        "Express",
        "Firebase",
      ],
      website: "https://www.baseafriquehq.com/",
    },
    {
      title: "Full-Stack developer",
      company: "Cre8tive Tech",
      location: "Remote, Nigeria",
      period: "Jan 2019 - Mar 2021",
      logo: cre8tivetech,
      description: [
        "Developed responsive web applications using MERN stack technologies (MongoDB, Express.js, React.js, Typescript, Node.js) ",
        "Implemented RESTful APIs to integrate third-party services and enhance the functionality of web applications",
      ],
      skills: [
        "Html",
        "CSS",
        "Javascript",
        "Typescript",
        "React",
        "Nodejs",
        "Express",
        "Firebase",
      ],
      website: "https://cre8tivetech.com/",
    },
  ];

  return (
    <div className="section">
      <div className="skills" style={{}}>
        <div className="skills__header">
          <h1>Professional Experience</h1>
        </div>
        <div className="skills__section">
          {/* Left Section */}

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
            <Accordion experience={experience} />
          </ReactHeight>
        </div>
      </div>

      {/* <>
        <div
          style={{
            display:
              (width >= 900 && skillHeight > window.innerHeight - 158) ||
              (width >= 900 && experienceHeight > window.innerHeight - 158)
                ? "block"
                : "none",
            width: width,
            height: "80px",
            background: "var(--color-bg)",
            position: "absolute",
            bottom: 0,
            left: -80,
            alignItems: "center",
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
      </> */}
    </div>
  );
};

export default Experience;
