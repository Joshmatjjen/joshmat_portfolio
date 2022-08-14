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
import vendoir from "../../assets/img/vendoir.png";
import thelightinghaus from "../../assets/img/thelightinghaus.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Tooltip } from "react-tippy";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

interface Props {
  currentMode?: string;
  getTriggerProps?: any;
  currentSlideState?: number;
}

interface TechProps {
  title?: string;
  image?: string;
  bgColor?: string;
}

const Work: React.FC<Props> = ({
  currentMode,
  getTriggerProps,
  currentSlideState,
}) => {
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
  const myRef = React.useRef(null);

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [selectedSlide, setSelectedSlide] = useState<number | null>();
  const [mode, setMode] = useState<any>(currentMode);

  const Technology: React.FC<TechProps> = ({ title, image, bgColor }) => {
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
            backgroundColor: bgColor,
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

          initialSlide={currentSlideState}
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
            className={"swiperSlide"}
            {...getTriggerProps({ id: "vendoir" })}
            onPress={() => setSelectedSlide(selectedSlide === 0 ? null : 0)}
          >
            <div className={"swiperSlide__img"}>
              <img alt="img" src={vendoir} />
            </div>
          </SwiperSlide>
          <SwiperSlide
            className={"swiperSlide"}
            {...getTriggerProps({ id: "waveApp" })}
            onPress={() => setSelectedSlide(selectedSlide === 1 ? null : 1)}
          >
            <div className={"swiperSlide__img"}>
              <img alt="img" src={waveDownloader} />
            </div>
          </SwiperSlide>

          <SwiperSlide
            className={"swiperSlide"}
            {...getTriggerProps({ id: "sweetmother" })}
            onPress={() => setSelectedSlide(selectedSlide === 1 ? null : 1)}
          >
            <div className={"swiperSlide__img"}>
              <img alt="img" src={sweetMother} />
            </div>
          </SwiperSlide>

          <SwiperSlide
            className={"swiperSlide"}
            {...getTriggerProps({ id: "practx" })}
            onPress={() => setSelectedSlide(selectedSlide === 3 ? null : 3)}
          >
            <div className={"swiperSlide__img"}>
              <img alt="img" src={practx} />
            </div>
          </SwiperSlide>

          <SwiperSlide
            className={"swiperSlide"}
            {...getTriggerProps({ id: "jobots" })}
            onPress={() => setSelectedSlide(selectedSlide === 4 ? null : 4)}
          >
            <div className={"swiperSlide__img"}>
              <img alt="img" src={jobots} />
            </div>
          </SwiperSlide>

          <SwiperSlide
            className={"swiperSlide"}
            {...getTriggerProps({ id: "waveWeb" })}
            onPress={() => setSelectedSlide(selectedSlide === 5 ? null : 5)}
          >
            <div className={"swiperSlide__img"}>
              <img alt="img" src={waveDownloaderWeb} />
            </div>
          </SwiperSlide>

          <SwiperSlide
            className={"swiperSlide"}
            {...getTriggerProps({ id: "jotours" })}
            onPress={() => notify("😁 Coming Soon")}
          >
            <div
              className={"swiperSlide__img"}
              // onClick={() => setSelectedSlide(selectedSlide === 6 ? null : 6)}
            >
              <img alt="img" src={jotours} />
            </div>
          </SwiperSlide>

          <SwiperSlide
            className={"swiperSlide"}
            {...getTriggerProps({ id: "jclothing" })}
            onPress={() => notify("😁 Coming Soon")}
          >
            <div className={"swiperSlide__img"}>
              <img alt="img" src={jclothing} />
            </div>
          </SwiperSlide>

          <SwiperSlide
            className={"swiperSlide"}
            {...getTriggerProps({ id: "thelightinghaus" })}
            onPress={() => notify("😁 Coming Soon")}
          >
            <div className={"swiperSlide__img"}>
              <img alt="img" src={thelightinghaus} />
            </div>
          </SwiperSlide>
        </Swiper>

        <section className="work__bottom">
          <i className="fad fa-long-arrow-left" />
          <p>Click or Swipe</p>
          <i className="fad fa-long-arrow-right" />
        </section>
      </div>
    </div>
  );
};

export default Work;
