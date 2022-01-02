import React from "react";
import "./Home.scss";
import HomeImage from "../../assets/img/Profile.png";
import Typist from "react-typist";
import { useLocation } from "react-router-dom";

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
                    An <span>Innovative Software Developer</span>, using the
                    skills and initiative necessary to anticipate needs and
                    bring good new ideas to the world of technology
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
          <img src={HomeImage} alt="" />
        </section>
        <section className="home__c-container">
          <div className="home__c-container__item">
            <img src={HomeImage} alt="" />
          </div>
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
        </section>
      </div>
    </div>
  );
};

export default Home;
