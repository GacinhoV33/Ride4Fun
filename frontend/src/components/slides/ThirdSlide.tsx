import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import PlaceHolder from "../common/PlaceHolder";
import "./Slides.scss";
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'
import { isMobile } from "react-device-detect";

const ThirdSlide: React.FC = () => {
  return (
    <>
      <PlaceHolder />
      <div className="slide-third">
        <LeftContent />
        <RightContent />
      </div>
    </>
  );
};

export default ThirdSlide;

const RightContent = () => {
  function handleClick() {}
  return (
    <div className="right-content">
      <span
       className='title-meet'
      >
        POZNAJMY SIĘ
      </span>
      <div style={{ borderBottom: "4px solid rgba(255, 255, 255, 0.95)", width: "35%" }} />
      <div
        className="title-header"
      >
        Bartosz Wajda | Założyciel R4F | Główny trener
      </div>
      <div>
        <p className='bartek-about'>
          Hej! Jestem Bartek. Pasjonuję się kolarstwem górskim od 13 lat. Od
          kilku lat jestem licencjonowanym instruktorem turystyki rowerowej,
          narciarstwa zjazdowego, a na Krakowskim AWF zbierałem niezbędne
          doświadczenie w pracy {isMobile ? <br/> : null} z dziećmi {isMobile ? null : <br/>}i młodzieżą. Skutecznie zarażam pasją
          do gór młodych i tych nieco starszych, niezależnie czy to zima czy
          lato!
        </p>
      </div>
      <div>
        <Link to="/oNas" style={{ textDecoration: "none" }}>
          <Button onClick={() => handleClick()} className="button-about">
            Dowiedz się więcej 
            <FontAwesomeIcon
              icon={faCaretRight}
              style={{marginRight:'1vw', marginLeft: '3vw', height: "2.75vh" }}
            />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const LeftContent = () => {
  return (
    <div className="left-content">
      <img
        src={isMobile ? "./images/thirdSlideFirst_phone.jpg" : "./images/thirdSlideFirst.jpg"}
        alt="left-content-img"
        className="left-content-img"
      />
      <img
        src="./images/thirdSlideSecond.jpg"
        alt="right-content-img"
        className="right-content-img"
      />
    </div>
  );
};
