import React from "react";
import "./About.scss";
import AboutImage from "../../assets/img/Profile.png";
import { useLocation } from "react-router-dom";
import Snowfall from "react-snowfall";
import Typist from "react-typist";
import { ReactHeight } from "react-height";


const About: React.FC = () => {
  const location = useLocation();
  return (
    <div className="section">
      {/* <img src={circleImg} alt="" className="roundCircle" /> */}
      <div className="about" style={{ height: window.innerHeight }}>
        {/* Left Section */}
        <ReactHeight
          onHeightReady={(height) =>
            console.log("Real About Left Height:++ ", height)
          }
        >
          <section className="about__section-left">
            <div className="about__section-left--intro">
              <div className="about__section-left--intro__top">
                <div></div>
                <p>HELLO</p>
              </div>
              {/* <Typist.Delay ms={500} /> */}
              {location.hash === "#about" || location.hash === "" ? (
                <>
                  <Typist
                    cursor={{
                      show: true,
                      blink: true,
                      hideWhenDone: true,
                      hideWhenDoneDelay: 1000,
                    }}
                    className="about__section-left--intro__name"
                  >
                    I'm <span>Joshua</span> Nwakwuo
                  </Typist>
                  <Typist
                    className="brief"
                    cursor={{
                      show: true,
                      blink: true,
                      hideWhenDone: true,
                      hideWhenDoneDelay: 1000,
                    }}
                    onTypingDone={() => console.log("Happy everyone")}
                  >
                    <Typist.Delay ms={2000} />
                    An <span>Innovative & Creative Software Developer</span>,
                    using my skills and initiative necessary to anticipate needs
                    and bring good new ideas to the world of technology
                  </Typist>
                </>
              ) : (
                <>
                  <h1>
                    I'm <span>Joshua</span> Nwakwuo
                  </h1>

                  <p className="brief">
                    An <span>Innovative Software Developer</span>, using the
                    skills and initiative necessary to anticipate needs and
                    bring good new ideas to the world of technology
                  </p>
                </>
              )}
              <div className="about__section-left--intro__bottom">
                <button
                  className="btn"
                  style={{
                    backgroundColor: "var(--color-text)",
                    minWidth: "8rem",
                    fontSize: "1rem",
                  }}
                  type="submit"
                >
                  <a href="#contact">Let's talk</a>
                </button>
                <button
                  style={{
                    backgroundColor: "var(--color-secondary3)",
                    minWidth: "9rem",
                    fontSize: "1rem",
                  }}
                  className="btn"
                  type="submit"
                >
                  <a
                    target="_blank"
                    href="https://jobots.herokuapp.com/"
                    style={{ color: "var(--color-bg);" }} rel="noreferrer"
                  >
                    Chat with &nbsp;<i className="fad fa-robot"></i>
                  </a>
                </button>
                <div></div>
              </div>
            </div>
          </section>
        </ReactHeight>

        {/* Right Section */}
        <ReactHeight
          onHeightReady={(height) =>
            console.log("Real About Left Height:++ ", height)
          }
        >
          <section className="about__section-right">
            {/*  */}
            <div className="about__section-right__item">
              <img src={AboutImage} alt="" />
              <div className="hexagon">
                <div
                  className="hexagon__item"
                  style={{ animationDelay: "0s" }}
                ></div>
              </div>
              <div className="hexagon">
                <div
                  className="hexagon__item"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>
              <div className="hexagon">
                <div
                  className="hexagon__item"
                  style={{ animationDelay: "4s" }}
                ></div>
              </div>
              <div className="hexagon">
                <div
                  className="hexagon__item"
                  style={{ animationDelay: "6s" }}
                ></div>
              </div>
            </div>
          </section>
        </ReactHeight>
        {/* <section className="about__c-container">
          <div className="about__c-container__item">
            <img src={AboutImage} alt="" />
          </div>
          {/* <div id="hexagon"></div> 
          <div
            className="about__c-container__circle"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="about__c-container__circle"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="about__c-container__circle"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="about__c-container__circle"
            style={{ animationDelay: "3s" }}
          ></div>
        </section> */}
      </div>
      <div className="mouseScroll">
        <i className="fal fa-mouse-alt"></i>
      </div>
    </div>
  );
};

export default About;