import React from "react";
import "./Home.scss";
import HomeImage from "../../assets/img/Profile.png";
import circleImg from "../../assets/svg/roundCircle.svg";
import Typist from "react-typist";
import { useLocation } from "react-router-dom";
import Snowfall from "react-snowfall";

const Home: React.FC = () => {
  const location = useLocation();
  return (
    <div className="section">
      {/* <div className="social">
        <div className="social--content">
          <a
            className="social--content--link"
            href="https://www.facebook.com/kayode.a.joshua.3"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            className="social--content--link"
            href="https://www.instagram.com/thejoshuakayode/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="social--content--link"
            href="https://www.facebook.com/kayode.a.joshua.3"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            className="social--content--link"
            href="https://twitter.com/TheJoshuaKayode"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div> */}
      {/* <img src={circleImg} alt="" className="roundCircle" /> */}
      <div className="home" style={{ height: window.innerHeight }}>
        {/* Left Section */}
        <section className="home__section-left">
          <div className="home__section-left--intro">
            <div className="home__section-left--intro__top">
              <div></div>
              <p>HELLO</p>
            </div>
            {/* <Typist.Delay ms={500} /> */}
            {location.hash === "#home" || location.hash === "/" ? (
              <>
                <Typist>
                  <h1>
                    I'm <span>Joshua</span> Nwakwuo
                  </h1>
                </Typist>
                <Typist>
                  <Typist.Delay ms={2000} />
                  <p className="brief">
                    An <span>Innovative & Creative Software Developer</span>,
                    using my skills and initiative necessary to anticipate needs
                    and bring good new ideas to the world of technology
                  </p>
                </Typist>
              </>
            ) : (
              <>
                <h1>
                  I'm <span>Joshua</span> Nwakwuo
                </h1>

                <p className="brief">
                  An <span>Innovative Software Developer</span>, using the
                  skills and initiative necessary to anticipate needs and bring
                  good new ideas to the world of technology
                </p>
              </>
            )}
          </div>
        </section>

        {/* Right Section */}
        <section className="home__section-right">
          {/*  */}
          <div className="home__section-right__item">
            <img src={HomeImage} alt="" />
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
        {/* <section className="home__c-container">
          <div className="home__c-container__item">
            <img src={HomeImage} alt="" />
          </div>
          {/* <div id="hexagon"></div> 
          <div
            className="home__c-container__circle"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="home__c-container__circle"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="home__c-container__circle"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="home__c-container__circle"
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

export default Home;
