import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PlaceHolder from "../common/PlaceHolder";
import "./Trainings.scss";
import { Button } from "@mui/material";
import ContactAcademy from "./ContactAcademy";
import ImagesPortfolio from "../slides/ImagesPortfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
export interface TrainingProps {
  currentTab: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}

const Trainings: React.FC<TrainingProps> = ({ currentTab, setCurrentTab }) => {
  function scrollToForm() {
    const { top } = contactRef.current.getBoundingClientRect();
    if (currentTab === 1) {
      window.scrollTo({
        top: top,
        left: 0,
        behavior: "smooth",
      });
    }
  }
  const contactRef = useRef<any>(null);
  const handleChange = (event: React.SyntheticEvent, newTab: number) => {
    setCurrentTab(newTab);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Box sx={{ width: "100%", height: "100%" }} className="trainings-main">
      <PlaceHolder />
      <Tabs
        value={currentTab}
        centered
        style={{ marginTop: "4vh" }}
        indicatorColor="secondary"
      >
        <Tab
          label="Szkolenia"
          onClick={(event) => handleChange(event, 0)}
          className="section-styles"
          style={currentTab === 0 ? { color: "#B70000" } : { color: "#fafafa" }}
        />
        <Tab
          label="R4F Academy"
          onClick={(event) => handleChange(event, 1)}
          className="section-styles"
          style={currentTab === 1 ? { color: "#B70000" } : { color: "#fafafa" }}
        />
        <Tab
          label="Wyjazdy"
          onClick={(event) => handleChange(event, 2)}
          className="section-styles"
          style={currentTab === 2 ? { color: "#B70000" } : { color: "#fafafa" }}
        />
      </Tabs>

      {currentTab === 0 && (
        <div className="content-trainings">
          <h1 className="title-of-trainings">
            {" "}
            Szkolenia indywidualne i grupowe{" "}
          </h1>
          <p className="text-of-trainings">
            Chcesz poprawić swoją technikę jazdy, poczuć się bezpieczniej na
            trasach, a może nauczyć się skakać i pokonywać trudne techniczne
            sekcje? Dobrze trafiłeś! Prowadzimy szkolenia Enduro/Downhill dla
            rowerzystów na każdym poziomie zaawansowania. Trenują z nami zarówno
            dzieciaki chcący poznać nową zajawkę jak i profesjonalni zawodnicy
            przygotowujący się do zawodów.
          </p>
          <div className="image-container-trainings">
            <img
              src="./images/szkoleniaInd1.jpg"
              alt="szkolInd1"
              className="trainings-image1"
            />
            <div className="trainings-title-skills">
              Na szkoleniach pracujemy nad :
            </div>
            {trainingFeatures.map((featureName, index) => (
              <div key={`${featureName}-${index}`} className="trainings-skill">
                {featureName}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="icon-trainings"
                />{" "}
              </div>
            ))}

            <div className="trainings-text2">
              Program każdego szkolenia dobierany jest indywidualnie do Twoich
              potrzeb oraz postępów 💪 <br />
            </div>

            <h1 style={{ fontStyle: "italic", fontSize: "3.75vh" }}>
              Cennik szkoleń
            </h1>
            <div
              style={{ fontFamily: "'Lato', sens-serif", fontSize: "2.75vh" }}
            >
              1 godzina - <strong>90zł</strong>
            </div>
            <div
              style={{ fontFamily: "'Lato', sens-serif", fontSize: "2.75vh" }}
            >
              2 godziny - <strong>160zł</strong>
            </div>
            <div
              style={{
                fontFamily: "'Lato', sens-serif",
                fontSize: "2.75vh",
                marginBottom: "3vh",
              }}
            >
              3 godziny - <strong>220zł</strong>
            </div>
            <div className="trainings-addInfo">
              Ceny za szkolenie grupowe ustalane są indywidualnie*
            </div>
            <div className="carousel-media carousel-trainings">
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={6000}
                keyBoardControl={true}
                transitionDuration={1500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {carouselItems.map(({ text, src }, index) => (
                  <div key={`${src}- ${index}`}>
                    <img
                      src={src}
                      alt={`${src}-${index}-alt`}
                      className="carousel-trainings-item"
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            <div
              style={{
                fontSize: "2.75vh",
                textAlign: "center",
                marginTop: "5vh",
                fontFamily: "'Lato', sens-serif",
              }}
            >
              Naszą bazą szkoleniową jest Bike Park Marcinka w Tarnowie. <br />
              Możliwość zorganizowania szkolenia grupowego w dowolnym Bike Parku
              w Całej Polsce!
            </div>
            <div
              style={{ fontSize: "2vh", marginTop: "5vh", fontWeight: "700" }}
            >
              Nadal trwa nabór do Szkółki Ride4Fun Academy na cotygodniowe
              treningi dla dzieci i młodzieży !
            </div>
            <h1 style={{ color: "#fafafa" }}>Masz pytania ? </h1>
            <div className='trainings-skontaktuj'>
              Skontaktuj się znami w zakładce <Link to="/contact">KONTAKT</Link>
            </div>
          </div>
        </div>
      )}
      {currentTab === 1 && (
        <div className="content-trainings">
          <h1 className="header-trainings"> Klub rowerowy Ride4Fun Academy</h1>

          <p className="content-text-trainings">
            Prowadzimy cotygodniowe zajęcia dla młodych adeptów kolarstwa
            górskiego, chcących w bezpieczny i kontrolowany sposób zgłębić
            tajniki jazdy Enduro i Downhill na rowerze górskim. Zajęcia
            prowadzimy w dwóch grupach zaawansowania tak by każdy znalazł coś
            dla siebie. Stawiamy nacisk na profesjonalne szkolenie pod czujnym
            okiem licencjonowanych instruktorów z wieloletnim doświadczeniem w
            pracy z młodzieżą oraz przede wszystkim na uśmiechy i radość z jazdy
            na rowerze. U nas nauczysz się szybko i skutecznie pokonywać leśne
            szlaki oraz Bike Parkowe przeszkody a co najważniejsze poznasz
            nowych rowerowych przyjaciół co w dalszej rowerowej przygodzie jest
            niezastąpione!
          </p>
          <div className="trainings-portfolioImages">
            <ImagesPortfolio />
            <div
              style={{
                fontSize: "2.5vh",
                display: "flex",
                flexDirection: "column",
                gap: "1.5vh",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "3.75vh",
                }}
              >
                <Button
                  variant="contained"
                  // color="success"
                  onClick={() => scrollToForm()}
                  className="button-zapisz"
                >
                  Zapisz się
                </Button>
              </div>

              <div
              className='trainings-text-r4f'
              >
                <b className="trainings-title-r4f">Termin:</b> Dokładnie dni
                treningów podane zostaną po zakończeniu naboru oraz ustaleniu
                grup. <br />
              </div>
              <div
              className='trainings-text-r4f'
              >
                <b className="trainings-title-r4f">Lokalizacja: </b> Trenujemy w
                Bike Park Marcinka zlokalizowanym przy Ul. Harcerskiej w
                Tarnowie. <br />
              </div>
              <div
              className='trainings-text-r4f'
              >
                <b className="trainings-title-r4f">Grupy: </b>
                Początkująca i Średniozaawansowana dla dzieci od 8 roku życia.
                Młodszych adeptów zapraszamy na zajęcia indywidualne ! <br />
              </div>
              <div
              className='trainings-text-r4f'
              >
                {" "}
                <b className="trainings-title-r4f">Czas trwania: </b> Trening
                trwa dwie godziny. <br />{" "}
              </div>

              <div
              className='trainings-text-r4f'
              >
                <b
                                className="trainings-title-r4f"

                >
                  Cena:{" "}
                </b>{" "}
                200pln/miesiąc <br />
              </div>
            </div>
          </div>
      
          <ContactAcademy />
          <div ref={contactRef}></div>
        </div>
      )}
      {currentTab === 2 && (
        <div className="content-trainings">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "2.5vh",
            }}
          >
            <div className="trainings-wyjazdy-main">
              Zapraszamy na jednodniowe wyjazdy szkoleniowe z Ride4Fun! <br />{" "}
              Cały dzień w najlepszych Polskich Bike Parkach pod okiem
              instruktora wraz z dobrą ekipą to recepta na udany weekend!
            </div>
            <img
              alt="wyjazdy1"
              src="./images/wyjazdy1.jpg"
              className="trainings-wyjazdy-img"
            />
            <h1 style={{ textAlign: "center" }}>Terminy już wkrótce!!!</h1>
          </div>
        </div>
      )}
    </Box>
  );
};

export default Trainings;

const trainingFeatures = [
  "Poprawnym ustawieniem sprzętu zawodnika",
  "Prawidłową pozycją na rowerze",
  "Bezpiecznym i efektywnym hamowaniu",
  "Poprawną Techniką pokonywania przeszkód na trasie",
  "Poprawną Techniką pokonywania band i zakrętów otwartych",
  "Dobieraniem odpowiedniej linii przejazdu",
  "Bezpieczną techniką skoków ",
  "Wideoanalizą",
];

const carouselItems = [
  { src: "./images/szkolenia/1.jpg", text: "none" },
  { src: "./images/szkolenia/2.jpg", text: "none" },
  { src: "./images/szkolenia/3.jpg", text: "none" },
  { src: "./images/szkolenia/4.jpg", text: "none" },
  { src: "./images/aboutUs3.jpg", text: "none" },
  // { src: "./images/szkolenia/6.jpg", text: "none" },
  // { src: "./images/szkolenia/7.png", text: "none" },
  { src: "./images/szkolenia/8.jpg", text: "none" },
  // { src: "./images/szkolenia/8.jpg", text: "none" },
  // { src: "./images/szkolenia/9.jpg", text: "none" },
  // { src: "./images/szkolenia/10.jpg", text: "none" },
  { src: "./images/szkolenia/11.jpg", text: "none" },
  // { src: "./images/szkolenia/12.jpg", text: "none" },
];

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
