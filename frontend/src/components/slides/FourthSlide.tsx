import React from "react";
import PlaceHolder from "../common/PlaceHolder";
import "./Slides.scss";
import Iframe from "react-iframe";

const FourthSlide: React.FC = () => {
  return (
    <div className="fourth-slide">
      <PlaceHolder />

      <h1 style={{background: 'green'}}> NASZA BAZA SZKOLENIOWA </h1>
      <div style={{ display: "flex", marginLeft: '5vw', alignItems: 'flex-start', position: 'relative', marginTop: '3vh'}}>
        <div
          style={{
            flex: 4,
            justifyContent: "flex-start",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
       >

          <Iframe 
          url={`https://www.youtube.com/embed/bV4dPFsyA7w`}
          className="iframe-styles"
          title='Youtube-Video'
          />
        </div>
        <div style={{ flex: 5, fontSize: '3vh' }}>
          Szkolenia odbywają się w nowym miejscu na Polskiej mapie miejscówek
          rowerowych a dokładnie w Bike Park Marcinka w Tarnowie. Miejsce na ten
          moment dysponuje jedną trasą podjazdową i trzema zjazdowymi o różnym
          stopniu trudności zarówno dla początkujących jak i zaawansowanych
          rowerzystów. Mamy do dyspozycji również asfaltowy pumptrack. Wstęp
          jest darmowy lecz nie ma wyciągu. Na szkoleniach podjeżdżamy „z łydy”
          bądź wypychamy rowery na sam szczyt. W przyszłym roku planowana jest
          rozbudowa bike parku o kolejne dwie trasy zjazdowe. Nie byłeś u nas ?
          Sprawdź film z naszej bazy szkoleniowej!
        </div>
        <img alt='logo-fourthslide' src='./images/logoBike.png' style={{width: '30vh', height: '40vh', position: 'absolute', bottom: '-15vh', right: '15vh'}}/>
      </div>
    </div>
  );
};

export default FourthSlide;
