import React, { useState } from "react";
import logoWhite from "../assets/svg/logo-white.svg";
import linkIcon from "../assets/svg/link.svg";
import locationIcon from "../assets/svg/location.svg";

import "./Accordion.scss";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  logo: string;
  skills: string[];
}

interface AccordionProps {
  experience: Experience[];
}

interface ChipProps {
  skill: string;
}

const Chip: React.FC<ChipProps> = ({ skill }) => {
  return (
    <div className="accordion-chip">
      <p>{skill}</p>
    </div>
  );
};

const Accordion: React.FC<AccordionProps> = ({ experience }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      {experience.map((exp, index) => (
        <div
          key={index}
          style={{
            borderBottom:
              index === experience?.length - 1
                ? "none"
                : "1px solid var(--boxShadow)",
          }}
          className="accordion-item"
        >
          <div
            className={`accordion-header ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <h3>{exp.title}</h3>
            <div style={{ display: "flex" }}>
              <h4>
                <span style={{ color: "var(--color-secondary)" }}>
                  {exp.company}
                </span>{" "}
                | {exp.period}
              </h4>
              <h4 style={{ marginLeft: 30, fontSize: 20 }}>
                {index === activeIndex ? `−` : `+`}
              </h4>
            </div>
          </div>
          <div
            className={`accordion-body ${index === activeIndex ? "show" : ""}`}
          >
            <div className="accordion-body-top">
              <div className="accordion-body-top-content">
                <img
                  src={locationIcon}
                  id="accordion-body-top-icon"
                  alt="logo"
                />
                <p>Remote, United Kingdom</p>
              </div>
              <div className="accordion-body-top-content">
                <img src={linkIcon} id="accordion-body-top-icon" alt="logo" />
                <a href="https://vendoir.com">vendoir.com</a>
              </div>
            </div>
            <ul>
              <div>
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </div>
              <div style={{ marginLeft: 30 }}>
                <img
                  src={exp.logo}
                  height={50}
                  id="accordion-logo"
                  alt="logo"
                />
              </div>
            </ul>
            <div className="chip-list">
              {exp.skills.map((item, index) => (
                <Chip skill={item} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
