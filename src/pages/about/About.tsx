import React from "react";
import "./About.scss";
import HomeImage from "../../assets/img/homeImage1.png";
import Typist from "react-typist";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  return (
    <div className="section">
      <div className="about" style={{ height: window.innerHeight }}>
        {/* Left Section */}
        <section className="about__section-left">
          <img src={HomeImage} alt="" />
        </section>

        {/* Right Section */}
        <section className="about__section-right">
          <div className="about__section-right--intro">
            <div className="about__section-right--intro__top">
              <div></div>
              <h1>About Me</h1>
            </div>
            {location.hash === "#about" ? (
              <Typist>
                <p className="brief">
                  I'm <span>Joshua Kayode</span>, <Typist.Delay ms={700} /> A
                  young entrepreneur who is motivated to satisfy a high need for
                  achievement in innovative and creative activities. <br /> I
                  specializes in the work of planning, organizing, leading and
                  controlling the efforts of others by systematically using my
                  classified knowledge and principles.
                  <br /> As an entrepreneur, i adopt the style of professional
                  management. I organize mana­gerial functions by setting long
                  term objectives, formulating strategic policies, developing
                  man­agement information system, monitoring and evaluation
                  systems.
                  <span style={{ paddingLeft: "2rem", cursor: "pointer" }}>
                    Learn more...
                  </span>
                </p>
              </Typist>
            ) : (
              <p className="brief">
                I'm <span>Joshua Kayode</span>, A young entrepreneur who is
                motivated to satisfy a high need for achievement in innovative
                and creative activities. <br /> I specializes in the work of
                planning, organizing, leading and controlling the efforts of
                others by systematically using my classified knowledge and
                principles.
                <br /> As an entrepreneur, i adopt the style of professional
                management. I organize mana­gerial functions by setting long
                term objectives, formulating strategic policies, developing
                man­agement information system, monitoring and evaluation
                systems.
                <span style={{ paddingLeft: "2rem", cursor: "pointer" }}>
                  Learn more...
                </span>
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
