import React, { useEffect, useState } from "react";
import "./Work.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import waveDownloader from "../../assets/img/waveDownloader.webp";
import waveDownloaderWeb from "../../assets/img/wavedownloader.png";
import jobots from "../../assets/img/jobots.png";
import jotours from "../../assets/img/jotours.png";
import jclothing from "../../assets/img/jclothing.png";
import sweetMother from "../../assets/img/sweetMother.webp";
import practx from "../../assets/img/practx.png";
import vendior from "../../assets/img/vendior.png";
import thelightinghaus from "../../assets/img/thelightinghaus.png";

import htmlIcon from "../../assets/svg/html5.svg";
import cssIcon from "../../assets/svg/css3.svg";
import sassIcon from "../../assets/svg/sass.svg";
import javascriptIcon from "../../assets/svg/javascript.svg";
import reactNativeIcon from "../../assets/svg/react_native.svg";
import expoIcon from "../../assets/svg/expo.svg";
import mongodbIcon from "../../assets/svg/mongodb.svg";
import playStore from "../../assets/svg/playstore.svg";

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
import { Tooltip } from "react-tippy";
import TechCard from "../../component/TechCard";



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

interface TechProps {
  title? : string;
  image?: string;
  bgColor?: string;
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
  const [mode, setMode] = useState<any>(currentMode);

  const Technology: React.FC<TechProps> = ({title, image, bgColor }) => {
    return (
      <Tooltip
        // options
        interactive={true}
        title={title}
        position="bottom"
        trigger="mouseenter"
        theme={currentMode === "light" ? "light" : "dark"}
        arrow={true}
        arrowSize="regular"
      >
        <div
          className="techCard"
          style={{
            backgroundColor: bgColor
          }}
        >
          <img
            src={image}
            alt="techCard_img"
            // style={{ height: "1.5rem", width: "1.5rem" }}
            className="techCard__img"
          />
        </div>
      </Tooltip>
    );
  };
  

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
            onClick={() => setSelectedSlide(selectedSlide === 0 ? null : 0)}
          >
            <div
              className={
                currentSlide === 0 && selectedSlide === 0
                  ? "swiperSlide-active__img"
                  : "swiperSlide__img"
              }
            >
              <img alt="img" src={waveDownloader} />
            </div>
            {currentSlide === 0 && selectedSlide === 0 && (
              <div className="swiperSlide-active__item">
                <p>Wave Downloader</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://play.google.com/store/apps/details?id=com.wavedownloader"
                  className="swiperSlide-active__item--link"
                >
                  <i className="fab fa-google-play"></i>
                </a>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "1rem 0",
                  }}
                >
                  <Technology
                    title="React-Native"
                    image={reactNativeIcon}
                    bgColor="#80DEEA18"
                  />
                </div>
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
              <img alt="img" src={jobots} />
            </div>
            {currentSlide === 1 && selectedSlide === 1 && (
              <div className="swiperSlide-active__item">
                <p>Jobots</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://jobots.herokuapp.com/"
                  className="swiperSlide-active__item--link"
                >
                  <p>View site</p>
                </a>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "1rem 0",
                  }}
                >
                  <Technology
                    title="React"
                    image={reactNativeIcon}
                    bgColor="#80DEEA18"
                  />
                  <Technology
                    title="Mongodb"
                    image={mongodbIcon}
                    bgColor="#6DAC4718"
                  />
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide
            className={
              currentSlide === 2 && selectedSlide === 2
                ? "swiperSlide-active"
                : "swiperSlide"
            }
            onClick={() => setSelectedSlide(selectedSlide === 2 ? null : 2)}
          >
            <div
              className={
                currentSlide === 2 && selectedSlide === 2
                  ? "swiperSlide-active__img"
                  : "swiperSlide__img"
              }
            >
              <img alt="img" src={sweetMother} />
            </div>
            {currentSlide === 2 && selectedSlide === 2 && (
              <div className="swiperSlide-active__item">
                <p>Sweet Mother</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://play.google.com/store/apps/details?id=com.sweetmother"
                  className="swiperSlide-active__item--link"
                >
                  <i className="fab fa-google-play"></i>
                </a>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "1rem 0",
                  }}
                >
                  <Technology
                    title="React-Native"
                    image={reactNativeIcon}
                    bgColor="#80DEEA18"
                  />
                  <Technology
                    title="Expo"
                    image={expoIcon}
                    bgColor="#00000018"
                  />
                </div>
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide
            className={
              currentSlide === 3 && selectedSlide === 3
                ? "swiperSlide-active"
                : "swiperSlide"
            }
            onClick={() => setSelectedSlide(selectedSlide === 3 ? null : 3)}
          >
            <div
              className={
                currentSlide === 3 && selectedSlide === 3
                  ? "swiperSlide-active__img"
                  : "swiperSlide__img"
              }
            >
              <img alt="img" src={practx} />
            </div>
            {currentSlide === 3 && selectedSlide === 3 && (
              <div className="swiperSlide-active__item">
                <p>Practx</p>
                <div className="swiperSlide-active__item--link">
                  <p>Coming soon</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "1rem 0",
                  }}
                >
                  <Technology
                    title="React-Native"
                    image={reactNativeIcon}
                    bgColor="#80DEEA18"
                  />
                </div>
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide
            className={
              currentSlide === 4 && selectedSlide === 4
                ? "swiperSlide-active"
                : "swiperSlide"
            }
            onClick={() => setSelectedSlide(selectedSlide === 4 ? null : 4)}
          >
            <div
              className={
                currentSlide === 4 && selectedSlide === 4
                  ? "swiperSlide-active__img"
                  : "swiperSlide__img"
              }
            >
              <img alt="img" src={vendior} />
            </div>
            {currentSlide === 4 && selectedSlide === 4 && (
              <div className="swiperSlide-active__item">
                <p>Vendior</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://vendoir.com/"
                  className="swiperSlide-active__item--link"
                >
                  <p>Coming soon</p>
                </a>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "1rem 0",
                  }}
                >
                  <Technology
                    title="React-Native"
                    image={reactNativeIcon}
                    bgColor="#80DEEA18"
                  />
                </div>
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide
            className={
              currentSlide === 5 && selectedSlide === 5
                ? "swiperSlide-active"
                : "swiperSlide"
            }
            onClick={() => setSelectedSlide(selectedSlide === 5 ? null : 5)}
          >
            <div
              className={
                currentSlide === 5 && selectedSlide === 5
                  ? "swiperSlide-active__img"
                  : "swiperSlide__img"
              }
            >
              <img alt="img" src={waveDownloaderWeb} />
            </div>
            {currentSlide === 5 && selectedSlide === 5 && (
              <div className="swiperSlide-active__item">
                <p>Wave Downloader</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://wavedownloader.com/"
                  className="swiperSlide-active__item--link"
                >
                  <p>View site</p>
                </a>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "1rem 0",
                  }}
                >
                  <Technology
                    title="React"
                    image={reactNativeIcon}
                    bgColor="#80DEEA18"
                  />
                  <Technology title="Css" image={cssIcon} bgColor="#0377BD13" />
                  <Technology
                    title="Sass"
                    image={sassIcon}
                    bgColor="#DC5E9B13"
                  />
                </div>
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide
            className={
              currentSlide === 6 && selectedSlide === 6
                ? "swiperSlide-active"
                : "swiperSlide"
            }
          >
            <div
              className={
                currentSlide === 6 && selectedSlide === 6
                  ? "swiperSlide-active__img"
                  : "swiperSlide__img"
              }
              onClick={() => setSelectedSlide(selectedSlide === 6 ? null : 6)}
            >
              <img alt="img" src={jotours} />
            </div>
            {currentSlide === 6 && selectedSlide === 6 && (
              <div className="swiperSlide-active__item">
                <p>Jotours</p>
                <a
                  href="https://jotours-frontend.herokuapp.com/"
                  className="swiperSlide-active__item--link"
                >
                  <p>View site</p>
                </a>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "1rem 0",
                  }}
                >
                  <Technology
                    title="html"
                    image={htmlIcon}
                    bgColor="#e44a2718"
                  />
                  <Technology
                    title="Sass"
                    image={sassIcon}
                    bgColor="#DC5E9B13"
                  />
                </div>
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide
            className={
              currentSlide === 7 && selectedSlide === 7
                ? "swiperSlide-active"
                : "swiperSlide"
            }
            onClick={() => setSelectedSlide(selectedSlide === 7 ? null : 7)}
          >
            <div
              className={
                currentSlide === 7 && selectedSlide === 7
                  ? "swiperSlide-active__img"
                  : "swiperSlide__img"
              }
            >
              <img alt="img" src={jclothing} />
            </div>
            {currentSlide === 7 && selectedSlide === 7 && (
              <div className="swiperSlide-active__item">
                <p>JClothing</p>
                <a
                  href="https://jclothing.herokuapp.com/"
                  className="swiperSlide-active__item--link"
                >
                  <p>View site</p>
                </a>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "1rem 0",
                  }}
                >
                  <Technology
                    title="React"
                    image={reactNativeIcon}
                    bgColor="#80DEEA18"
                  />
                  <Technology title="Css" image={cssIcon} bgColor="#0377BD13" />
                </div>
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide
            className={
              currentSlide === 8 && selectedSlide === 8
                ? "swiperSlide-active"
                : "swiperSlide"
            }
            onClick={() => setSelectedSlide(selectedSlide === 8 ? null : 8)}
          >
            <div
              className={
                currentSlide === 8 && selectedSlide === 8
                  ? "swiperSlide-active__img"
                  : "swiperSlide__img"
              }
            >
              <img alt="img" src={thelightinghaus} />
            </div>
            {currentSlide === 8 && selectedSlide === 8 && (
              <div className="swiperSlide-active__item">
                <p>TheLightHaus</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://thelightinghaus.netlify.app/"
                  className="swiperSlide-active__item--link"
                >
                  <p>View site</p>
                </a>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "1rem 0",
                  }}
                >
                  <Technology
                    title="html"
                    image={htmlIcon}
                    bgColor="#e44a2718"
                  />
                  <Technology title="css" image={cssIcon} bgColor="#0377BD13" />
                  <Technology
                    title="Sass"
                    image={sassIcon}
                    bgColor="#DC5E9B13"
                  />
                </div>
              </div>
            )}
          </SwiperSlide>
        </Swiper>

        <section className="work__bottom">
          <i className="fad fa-long-arrow-left" />
          <p>Swipe or click</p>
          <i className="fad fa-long-arrow-right" />
        </section>
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
