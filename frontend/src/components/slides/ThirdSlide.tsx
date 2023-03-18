import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import PlaceHolder from "../common/PlaceHolder";
import "./Slides.scss";

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
  function handleClick() {

  }
  return( 
    <div className="right-content">
            <span style={{fontSize: '5.5vh', fontWeight: 600, color: '#56d', fontStyle: 'italic',}}> POZNAJ NASZEGO <br/> INSTRUKTORA </span>
        <div style={{ borderBottom: '4px solid #56d', width: '35%'}}/>
        <div style={{marginTop: '5vh'}}>
            <p style={{fontSize: '3vh'}}>
            Hej! 
            Jestem Bartek. Pasjonuję się kolarstwem górskim od 13 lat. Od kilku lat jestem licencjonowanym instruktorem turystyki rowerowej, narciarstwa zjazdowego a na Krakowskim  AWF zbierałem niezbędne doświadczenie w pracy z dziećmi i młodzieżą.
            Skutecznie zarażam pasją do gór młodych i tych nieco starszych niezależnie czy to zima czy lato! 

            </p>
        </div>
        <Link to='/about' style={{textDecoration: 'none'}}>
            <Button onClick={() => handleClick()} className='button-about'>
                Poznajmy się
            </Button>
        </Link>

    </div>);
};

const LeftContent = () => {
  return (
  <div className="left-content">
        <img src={require('../../images/testPhoto.jpg')} style={{width: '60%', height: '90%', position: 'absolute', top: '0px', left: '0px', zIndex: 1}}/>
        <img src={require('../../images/testPhoto.jpg')} style={{width: '60%', height: '90%', position: 'absolute', top: '10%', right: '0px', zIndex: 2}}/>
  </div>);
};
