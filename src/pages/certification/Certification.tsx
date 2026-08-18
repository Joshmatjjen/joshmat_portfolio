import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "./Certification.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import versionControlMeta from "../../assets/certifications/versionControlMeta.png";
import nodejsBEAppIBM from "../../assets/certifications/nodejsBEAppIBM.png";
import introCloudComputingIBM from "../../assets/certifications/introCloudComputingIBM.png";
import introWebDevIBM from "../../assets/certifications/introWebDevIBM.png";
import reactBasicMeta from "../../assets/certifications/reactBasicMeta.png";
import programmingWithJsMeta from "../../assets/certifications/programmingWithJsMeta.png";
import devFEAppReactIBM from "../../assets/certifications/devFEAppReactIBM.png";
import introMobileDevMeta from "../../assets/certifications/introMobileDevMeta.png";
import gitGithubIBM from "../../assets/certifications/gitGithubIBM.png";

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

const Certification: React.FC<Props> = ({
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
          <h1>Certification (9)</h1>
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
            depth: 210,
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
            {...getTriggerProps({ id: "" })}
            onClick={() =>
              window.open(
                "https://coursera.org/share/90b0fe1f5b65733af0388c11b5618528"
              )
            }
          >
            <div className={"swiperSlide__img"}>
              <img alt="img" src={programmingWithJsMeta} />
            </div>
          </SwiperSlide>
          <SwiperSlide
            className={"swiperSlide"}
            {...getTriggerProps({ id: "" })}
            onClick={() =>
              window.open(
                "https://coursera.org/share/2289175d47b789f23be12ac9c0cdeb30"
              )
            }
          >
            <div className={"swiperSlide__img"}>
              <img alt="img" src={nodejsBEAppIBM} />
            </div>
          </SwiperSlide>
          <SwiperSlide
            className={"swiperSlide"}
            {...getTriggerProps({ id: "" })}
            onClick={() =>
              window.open(
                "https://coursera.org/share/c76d329210177324cfc499e3c4a35ef5"
              )
            }
          >
            <div className={"swiperSlide__img"}>
              <img alt="img" src={devFEAppReactIBM} />
            </div>
          </SwiperSlide>

          <SwiperSlide
            className={"swiperSlide"}
            {...getTriggerProps({ id: "" })}
            onClick={() =>
              window.open(
                "https://coursera.org/share/9ecb223284bcfcc1045ebad1065052b8"
              )
            }
          >
            <div className={"swiperSlide__img"}>
              <img alt="img" src={versionControlMeta} />
            </div>
          </SwiperSlide>

          <SwiperSlide
            className={"swiperSlide"}
            {...getTriggerProps({ id: "" })}
            onClick={() =>
              window.open(
                "https://coursera.org/share/fd6041eaf223837e30ad90bc588898a3"
              )
            }
          >
            <div className={"swiperSlide__img"}>
              <img alt="img" src={reactBasicMeta} />
            </div>
          </SwiperSlide>

          <SwiperSlide
            className={"swiperSlide"}
            {...getTriggerProps({ id: "" })}
            onClick={() =>
              window.open(
                "https://coursera.org/share/7f3b9c4c4a390554560ef4c41c26f044"
              )
            }
          >
            <div className={"swiperSlide__img"}>
              <img alt="img" src={introCloudComputingIBM} />
            </div>
          </SwiperSlide>

          <SwiperSlide
            className={"swiperSlide"}
            {...getTriggerProps({ id: "" })}
            onClick={() =>
              window.open(
                "https://coursera.org/share/caeba58b47ed5aedcaf026ea6630a7b6"
              )
            }
          >
            <div className={"swiperSlide__img"}>
              <img alt="img" src={introWebDevIBM} />
            </div>
          </SwiperSlide>

          <SwiperSlide
            className={"swiperSlide"}
            {...getTriggerProps({ id: "" })}
            onClick={() =>
              window.open(
                "https://coursera.org/share/c51af5df511c28ec24de9467a9dedad6"
              )
            }
          >
            <div
              className={"swiperSlide__img"}
              // onClick={() => setSelectedSlide(selectedSlide === 6 ? null : 6)}
            >
              <img alt="img" src={introMobileDevMeta} />
            </div>
          </SwiperSlide>

          <SwiperSlide
            className={"swiperSlide"}
            {...getTriggerProps({ id: "" })}
            onClick={() =>
              window.open(
                "https://coursera.org/share/cd425a94c426f9975bb44d1a5cb30179"
              )
            }
          >
            <div className={"swiperSlide__img"}>
              <img alt="img" src={gitGithubIBM} />
            </div>
          </SwiperSlide>

          {/* <SwiperSlide
            className={"swiperSlide"}
            {...getTriggerProps({ id: "thelightinghaus" })}
            onPress={() => window.open("https://thelightinghaus.netlify.app")}
          >
            <div className={"swiperSlide__img"}>
              <img alt="img" src={thelightinghaus} />
            </div>
          </SwiperSlide> */}
        </Swiper>

        <section className="work__bottom">
          <i>
            <Icon icon="ph:arrow-left" />
          </i>
          <p>Click or Swipe</p>
          <i>
            <Icon icon="ph:arrow-right" />
          </i>
        </section>
      </div>
    </div>
  );
};

export default Certification;
