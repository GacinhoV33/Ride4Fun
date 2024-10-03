import React from "react";
import { Link } from "react-router-dom";
import "./Slides.scss";

export interface FirstSlideProps {}

const FirstSlide: React.FC<FirstSlideProps> = ({}) => {
  return (
    <div className="slide-first">
      <div className='logo-container-first-slide-main' >
        <img
          className="logo-first-slide-main"
          src={"./images/Logo_biale.png"}
          alt="logo"
        />
        {/* #TODO - puste miejsca na formacie PHONE */}
      </div>
      <div
      className="header-first-slide"
        
      >
        SZKOLENIA <br />
        ROWEROWE <br /> 
        I NARCIARSKIE
      </div>
      <div
      className="navs-first-slide"
        
      >
        <Link to="/szkolenia/r4f" style={{ textDecoration: "none" }}>
          <div className="navs">SZKÓŁKA R4F ACADEMY</div>
        </Link>
        <Link to="/szkolenia/wyjazdy" style={{ textDecoration: "none" }}>
          <div className="navs">WYJAZDY</div>
        </Link>
        <Link to="/szkolenia/szkolenia" style={{ textDecoration: "none" }}>
          <div className="navs">SZKOLENIA</div>
        </Link>
      </div>

    </div>
  );
};

export default FirstSlide;
