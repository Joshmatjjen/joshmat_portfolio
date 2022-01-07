import React, { useState } from "react";
import "./Work.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jotours from "../../assets/img/jotours.png";
import jclothing from "../../assets/img/jclothing.png";
import reactNativeIcon from "../../assets/svg/react_native.svg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper';
import SkillCard from "../../component/SkillCard";



// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);

const breakPoints = [
  { width: 1, itemsToShow: 1, showArrows: false },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

interface Props {
  currentMode?: string;
}

const Work: React.FC<Props> = ({ currentMode }) => {
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

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [selectedSlide, setSelectedSlide] = useState<number | null>();

  return (
    <div className="section">
      <div className="work">
        <section className="work__top">
          <h1>My Work</h1>
        </section>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          keyboard={{ enabled: true, onlyInViewport: true }}
          slidesPerView={"auto"}
          spaceBetween={180}
          onActiveIndexChange={(el) => setCurrentSlide(el.activeIndex)}
          onAfterInit={(el) => setCurrentSlide(el.activeIndex)}
          onSlideChange={() => setSelectedSlide(null)}
          // on={{
          //   slideChange: (v) => console.log("Change of slide", v),
          // }}
          lazy={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            // hideOnClick: true,
            type: "custom",
          }}
          className="mySwiper"
        >
          <SwiperSlide
            className={
              currentSlide === 0 && selectedSlide === 0
                ? "swiperSlide-active"
                : "swiperSlide"
            }
          >
            <div
              className={
                currentSlide === 0 && selectedSlide === 0
                  ? "swiperSlide-active__img"
                  : "swiperSlide__img"
              }
              onClick={() => setSelectedSlide(selectedSlide === 0 ? null : 0)}
            >
              <img alt="img" src={jotours} />
            </div>
            {currentSlide === 0 && selectedSlide === 0 && (
              <div className="swiperSlide-active__item">
                <p>Jotours</p>
                <p>View site</p>
                <SkillCard
                  currentMode={currentMode}
                  title="React-Native"
                  img={reactNativeIcon}
                  bgColor="#80DEEA18"
                  styling={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "2.5rem",
                    width: "2.5rem",
                    borderRadius: "100%",
                  }}
                  stylingImg={{ height: "1.5rem", width: "1.5rem" }}
                />
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide
            className={
              currentSlide === 1 && selectedSlide === 1
                ? "swiperSlide-active"
                : "swiperSlide"
            }
            onClick={() => setSelectedSlide(selectedSlide === 1 ? null : 1)}
          >
            <div
              className={
                currentSlide === 1 && selectedSlide === 1
                  ? "swiperSlide-active__img"
                  : "swiperSlide__img"
              }
            >
              <img alt="img" src={jclothing} />
            </div>
            {currentSlide === 1 && selectedSlide === 1 && (
              <div className="swiperSlide-active__item">
                <p>JClothing</p>
                <p>View site</p>
                <SkillCard
                  currentMode={currentMode}
                  title="React-Native"
                  img={reactNativeIcon}
                  bgColor="#80DEEA18"
                  styling={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "2.5rem",
                    width: "2.5rem",
                    borderRadius: "100%",
                  }}
                  stylingImg={{ height: "1.5rem", width: "1.5rem" }}
                />
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide
            className={
              currentSlide === 2 ? "swiperSlide-active" : "swiperSlide"
            }
            onClick={() => console.log("Hello")}
          >
            <div
              className={
                currentSlide === 2
                  ? "swiperSlide-active__img"
                  : "swiperSlide__img"
              }
            >
              <img
                alt="img"
                src="https://swiperjs.com/demos/images/nature-3.jpg"
              />
            </div>
            {currentSlide === 2 && (
              <div>
                <p>Hellow world</p>
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide
            onTouchMoveCapture={(el) => console.log("Touch move", el)}
            className={
              currentSlide === 3 ? "swiperSlide-active" : "swiperSlide"
            }
            onClick={() => console.log("Hello")}
          >
            <div
              className={
                currentSlide === 3
                  ? "swiperSlide-active__img"
                  : "swiperSlide__img"
              }
            >
              <img
                alt="img"
                src="https://swiperjs.com/demos/images/nature-4.jpg"
              />
            </div>
            {currentSlide === 3 && (
              <div>
                <p>Hellow world</p>
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide
            className="swiperSlide"
            onClick={() => console.log("Hello")}
          >
            <div className="swiperSlide__img">
              <img
                alt="img"
                src="https://swiperjs.com/demos/images/nature-5.jpg"
              />
            </div>
            <div>
              <p>Hellow world</p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="swiperSlide"
            onClick={() => console.log("Hello")}
          >
            <div className="swiperSlide__img">
              <img
                alt="img"
                src="https://swiperjs.com/demos/images/nature-6.jpg"
              />
            </div>
            <div>
              <p>Hellow world</p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiperSlide"
            onClick={() => console.log("Hello")}
          >
            <div className="swiperSlide__img">
              <img
                alt="img"
                src="https://swiperjs.com/demos/images/nature-7.jpg"
              />
            </div>
            <div>
              <p>Hellow world</p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiperSlide"
            onClick={() => console.log("Hello")}
          >
            <div className="swiperSlide__img">
              <img
                alt="img"
                src="https://swiperjs.com/demos/images/nature-8.jpg"
              />
            </div>
            <div>
              <p>Hellow world</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <div className="portfolio" style={{ height: window.innerHeight }}>

        <section className="portfolio__top">
          <h1>My portfolios</h1>
          <p>Explore all my great portfolios</p>
        </section>
        <section className="portfolio__content">

          <section className="portfolio__content--edu">
            <div className="portfolio__content--edu--title">
              <i className="fad fa-book-reader"></i>
              <p>Education</p>
            </div>
            <div className="portfolio__content--edu--list">
              <Carousel breakPoints={breakPoints}>
                <div className="portfolio__content--edu--list__box">
                  <p>September 2008 - 2014 September</p>
                  <h3>Higher Secondary School Certificate</h3>
                  <p>
                    I had lot of great portfolio being a student of Hebron
                    college. For instance, i was one of there students, also
                    became the School Head Prefect at my last year.
                  </p>
                  <p>Hebron College</p>
                </div>
                <div
                  className="portfolio__content--edu--list__box"
                  onClick={notify}
                >
                  <i className="fad fa-plus"></i>
                </div>
              </Carousel>
            </div>
          </section>

          <section className="portfolio__content--exp">
            <div className="portfolio__content--exp--title">
              <i className="fad fa-briefcase"></i>
              <p>Experience</p>
            </div>
            <div className="portfolio__content--exp--list">
              <Carousel breakPoints={breakPoints}>
                <a
                  className="portfolio__content--exp--list__box"
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
                  className="portfolio__content--exp--list__box"
                  onClick={notify}
                >
                  <i className="fad fa-plus"></i>
                </div>
              </Carousel>
            </div>
          </section>
        </section>
      </div> */}
    </div>
  );
};

export default Work;
