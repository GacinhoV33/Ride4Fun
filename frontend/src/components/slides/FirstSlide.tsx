import React from "react";
import { Link } from "react-router-dom";
import PlaceHolder from "../common/PlaceHolder";
import SocialMedia from "../common/SocialMedia";
import "./Slides.scss";

export interface FirstSlideProps {}

const FirstSlide: React.FC<FirstSlideProps> = ({}) => {
  return (
    <div className="slide-first">
      <div className='logo-container-first-slide' >
        <img
          className="logo-first-slide"
          src={"./images/Logo_biale.png"}
          alt="logo"
        />
      </div>
      <div
      className="header-first-slide"
        
      >
        SZKOLENIA <br />
        ROWEROWE
      </div>
      <div
      className="navs-first-slide"
        
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navs">SZKÓŁKA R4F ACADEMY</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navs">WYJAZDY</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navs">PÓŁKOLONIE</div>
        </Link>
      </div>
      {/* <PlaceHolder/>
      <div className='social-container'>
        <SocialMedia orientation='row' copyOrientation='down'/>
      </div> */}
    </div>
  );
};

export default FirstSlide;
