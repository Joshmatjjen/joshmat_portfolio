import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./../Modal.scss";
import { Tooltip, withTooltip } from "react-tippy";
import playStore from "../assets/img/playStore.png";
import appStore from "../assets/img/appStore.png";
import vendoirJS from "../assets/json/vendoir.json";

interface Props {
  data: any;
  // data: {
  //   title: string;
  //   subtitle: string;
  //   type: string;
  //   onAndroid: string;
  //   onIOS: string;
  //   onWeb: string;
  //   note: string;
  //   myRole: string;
  //   platform: string;
  //   technologies: string;
  //   year: string;
  //   briefing: string;
  //   screenshots: [];
  
  // };
}

const SkillModal: React.FC<Props> = ({
  data,
}) => {
  // const location = useLocation();

  console.log("Josn---", vendoirJS);

  return (
    <div className="workModal">
      <h3 className="workModal__title">{data.title}</h3>
      <p className="workModal__subtitle">{data.subtitle}</p>
      {data?.onWeb && (
        <div className="workModal__web">
          <a
            href={data?.onWeb}
            target="_blank"
            className="workModa"
            rel="noreferrer"
          >
            <p>View Website</p>
          </a>
        </div>
      )}
      <div className="workModal__link">
        {data?.onAndroid && (
          <a
            href={data?.onAndroid}
            target="_blank"
            className="workModa"
            rel="noreferrer"
          >
            <img src={playStore} alt="skillCard_img" className="screenshot" />
          </a>
        )}
        {data?.onIOS && (
          <a
            href={data?.onIOS}
            target="_blank"
            className="workModa"
            rel="noreferrer"
          >
            <img src={appStore} alt="skillCard_img" className="screenshot" />
          </a>
        )}
      </div>

      <div className="workModal__info">
        <div className="workModal__info--box">
          <h4>MY ROLE</h4>
          <p>{data?.myRole}</p>
        </div>
        <div className="workModal__info--box">
          <h4>PLATFORM</h4>
          <p>{data?.platform}</p>
        </div>
        <div className="workModal__info--box">
          <h4>TECHNOLOGY</h4>
          <p>{data?.technologies}</p>
        </div>
        <div className="workModal__info--box">
          <h4>YEAR</h4>
          <p>{data?.year}</p>
        </div>
      </div>
      {data?.note && (
        <section className="workModal__brief">
          <h3>Note#</h3>
          <p>{data?.note}</p>
        </section>
      )}
      <section className="workModal__brief">
        <h3>Briefing</h3>
        <p>{data?.briefing}</p>
      </section>
      <section className="workModal__screenshot">
        <h3>Features & Screenshots</h3>
        <div className="workModal__screenshot--container">
          {data?.screenshots &&
            data?.screenshots.map((item, i) => (
              <img
                key={i}
                src={item}
                alt="skillCard_img"
                className="screenshot"
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default SkillModal;
