import React from "react";
import PlaceHolder from "../common/PlaceHolder";
import "./AboutUs.scss";
import { SocialIcon } from 'react-social-icons';

const AboutUs: React.FC = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: 'center' }}
    >
      
      <PlaceHolder />
      <div
        style={{
          letterSpacing: "0.2rem",
          fontSize: "2.5vh",
          fontWeight: "600",
          marginTop: '5%',
          padding: "2.5% 15%",
        }}
      >
        Jesteśmy Tarnowską ekipą zrzeszającą pasjonatów kolarstwa górskiego
        nastawionych przede wszystkim na czerpaniu jak największej radości z tej
        wspaniałej rowerowej zajawki.
      </div>

      <img
        src="./images/aboutUs1.jpg"
        alt="aboutUs1"
        style={{ width: "50%", height: "60%" }}
      />
      <div
        style={{
          letterSpacing: "0.2rem",
          fontSize: "3vh",
          fontWeight: "600",
          padding: "2.5% 15%",
        }}
      >
        W sezonie spotkasz nas na trasach, eventach oraz zawodach w całej
        Polsce.
      </div>
      <img
        src="./images/aboutUs2.jpg"
        alt="aboutUs2"
        style={{ width: "50%", height: "60%" }}
      />
      <div
        style={{
          letterSpacing: "0.2rem",
          fontSize: "2.5vh",
          fontWeight: "600",
          padding: "2.5% 15%",
        }}
      >
        Poza rowerowym teamem odpalamy szkolenia z techniki jazdy indywidualne
        oraz grupowe na różnym poziomie zaawansowania.
      </div>
      <img
        src="./images/aboutUs3.jpg"
        alt="aboutUs3"
        style={{ width: "50%", height: "60%" }}
      />
      <div style={{height: '10vh', width: '100%'}}>
        <br></br>
        <br/>
        <br/>
        <br/>
      </div>
      <div className='footer-about'>
          <span  className='footer-title'>Sprawdź nasze socjale </span>
          <SocialIcon url={'https://www.facebook.com/profile.php?id=100083105601877'} target='_blank' className="social-icon-aboutUs"/>
          <SocialIcon url={'https://www.instagram.com/wajda_bartekk/'} target='_blank' className="social-icon-aboutUs"/>
          <SocialIcon url={'https://www.tiktok.com/@marcinn_gortat?lang=pl-PL'} target='_blank' className="social-icon-aboutUs"/>

      </div>
    </div>
  );
};

export default AboutUs;
