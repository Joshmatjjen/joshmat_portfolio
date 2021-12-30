import React from "react";
import "./Achievement.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1, showArrows: false },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Achievement = () => {
  const notify = () => {
    console.log("Hello logs");
    toast.dark("😁 Coming Soon!", {
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
    <div className="section">
      <div className="achievement" style={{ height: window.innerHeight }}>
        {/* Title & Sub */}
        {/* <section className="achievement__top">
          <h1>My Achievements</h1>
          <p>Explore all my great achievements</p>
        </section> */}
        <section className="achievement__content">
          {/* Edu Section */}
          <section className="achievement__content--edu">
            <div className="achievement__content--edu--title">
              <i className="fad fa-book-reader"></i>
              <p>Education</p>
            </div>
            <div className="achievement__content--edu--list">
              <Carousel breakPoints={breakPoints}>
                <div className="achievement__content--edu--list__box">
                  <p>September 2008 - 2014 September</p>
                  <h3>Higher Secondary School Certificate</h3>
                  <p>
                    I had lot of great achievement being a student of Hebron
                    college. For instance, i was one of there students, also
                    became the School Head Prefect at my last year.
                  </p>
                  <p>Hebron College</p>
                </div>
                <div
                  className="achievement__content--edu--list__box"
                  onClick={notify}
                >
                  <i className="fad fa-plus"></i>
                </div>
              </Carousel>
            </div>
          </section>
          {/* Exp Section */}
          <section className="achievement__content--exp">
            <div className="achievement__content--exp--title">
              <i className="fad fa-briefcase"></i>
              <p>Experience</p>
            </div>
            <div className="achievement__content--exp--list">
              <Carousel breakPoints={breakPoints}>
                <a
                  className="achievement__content--exp--list__box"
                  href="https://www.quintessentialinvestment.ng/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>October 2019</p>
                  <h3>
                    <span>Q</span> Quintessential
                  </h3>
                  <p>
                    Quintessential is an investment company who believe in
                    abundance, sustainable and consistent financial growth. They
                    set-up and investment club, which gives it investors 25%
                    monthly interest.
                  </p>
                  <p>CEO & Founder</p>
                </a>

                <div
                  className="achievement__content--exp--list__box"
                  onClick={notify}
                >
                  <i className="fad fa-plus"></i>
                </div>
              </Carousel>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Achievement;
