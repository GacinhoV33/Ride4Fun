import React from "react";
import Iframe from "react-iframe";
import PlaceHolder from "../common/PlaceHolder";
import "./AboutUs.scss";

const AboutUs: React.FC = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
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
    </div>
  );
};

export default AboutUs;
