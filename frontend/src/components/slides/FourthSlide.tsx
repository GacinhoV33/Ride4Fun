import React from "react";
import "./Slides.scss";

const FourthSlide: React.FC = () => {
  return (
    <div className="fourth-slide">
      {/* <PlaceHolder /> */}

      <div className="title-fourth-slide"> NASZA BAZA SZKOLENIOWA </div>
      <div
      className="title-content-yt"
      >
        <div
          style={{
            flex: 4,
            justifyContent: "flex-start",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginRight: '1vw',
          }}
        >
          <iframe
            // width="560"
            // height="315"
            className="iframe-styles"

            src="https://www.youtube.com/embed/bV4dPFsyA7w"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          {/* <Iframe 
          url={`https://www.youtube.com/embed/bV4dPFsyA7w`}
          className="iframe-styles"
          title='Youtube-Video'
          /> */}
        </div>
        <div
        className="text-fourth-slide"
         
        >
          Szkolenia odbywają się w nowym miejscu na Polskiej mapie miejscówek
          rowerowych, a dokładnie w Bike Park Marcinka <br />w Tarnowie. Miejsce
          na ten moment dysponuje jedną trasą podjazdową i trzema zjazdowymi o
          różnym stopniu trudności zarówno dla początkujących jak i
          zaawansowanych rowerzystów. Mamy do dyspozycji również asfaltowy
          pumptrack. Wstęp jest darmowy lecz nie ma wyciągu. Na szkoleniach
          podjeżdżamy „z łydy”, bądź wypychamy rowery na sam szczyt. W przyszłym
          roku planowana jest rozbudowa bike parku o kolejne dwie trasy
          zjazdowe.
          <br /> <br />
          Nie byłeś u nas ? <br />
          Sprawdź film z naszej bazy szkoleniowej!
        </div>
        <img
          alt="logo-fourthslide"
          src="./images/logoBikeUpdt.png"
          className="logo-fourth-slide"
        />
      </div>
    </div>
  );
};

export default FourthSlide;
