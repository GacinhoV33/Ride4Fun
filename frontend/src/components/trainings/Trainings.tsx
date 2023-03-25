import React, { useRef } from "react";
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
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
export interface TrainingProps {
  currentTab: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}

const Trainings: React.FC<TrainingProps> = ({ currentTab, setCurrentTab }) => {
  function scrollToForm() {
    const { top } = contactRef.current.getBoundingClientRect();

    window.scrollTo({
      top: top,
      left: 0,
      behavior: "smooth",
    });
  }
  const contactRef = useRef<any>(null);
  const handleChange = (event: React.SyntheticEvent, newTab: number) => {
    setCurrentTab(newTab);
  };
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="./images/szkoleniaInd1.jpg"
              alt="szkolInd1"
              style={{ width: "80%", marginTop: "2vh" }}
            />
            <div
              style={{
                marginTop: "4vh",
                fontSize: "3.5vh",
                fontWeight: "700",
                textAlign: "center",
                color: "#fff",
                marginBottom: "2vh",
              }}
            >
              Na szkoleniach pracujemy nad :
            </div>
            {trainingFeatures.map((featureName, index) => (
              <div
                key={`${featureName}-${index}`}
                style={{
                  height: "5vh",
                  fontSize: "3vh",
                  display: "flex",
                  fontWeight: "700",
                  alignItems: "center",
                  gap: "0.75vw",
                }}
              >
                {featureName}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "lightgreen" }}
                />{" "}
              </div>
            ))}

            <div
              style={{
                fontSize: "2.75vh",
                textAlign: "center",
                marginTop: "5vh",
                fontFamily: "'Lato', sens-serif",
              }}
            >
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
            <div>Ceny za szkolenie grupowe ustalane są indywidualnie*</div>

            {/* <Carousel style={{width: '75vw', height: '50vh', display: 'flex'}}>
            
            <Carousel.Item  key={`${2}-index`}>
                <img
                  // className="d-block w-100"
                  src={'./images/aboutUs1.jpg'}
                  alt={`${2}-index-alt`}
                  style={{ height: '50%', display: 'block', width: '75%'}}
                />
                <Carousel.Caption>
                  <h3>text</h3>
                  <p>
                   text
                  </p>
                </Carousel.Caption>
              </Carousel.Item> */}
              {/* {carouselItems.map(({text, src}, index) => (
                <Carousel.Item interval={1000} key={`${src}-index`}>
                <img
                  // className="d-block w-100"
                  src={src}
                  alt={`${src}-index-alt`}
                  style={{ height: '50%', display: 'block', width: '75%'}}
                />
                <Carousel.Caption>
                  <h3>{text}</h3>
                  <p>
                   {text}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              ))} */}
              
            {/* </Carousel> */}

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
            <div style={{ fontSize: "2vh" }}>
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
          <div style={{ display: "flex", gap: "5vw", alignItems: "center" }}>
            <ImagesPortfolio />
            <div
              style={{
                fontSize: "2.5vh",
                display: "flex",
                flexDirection: "column",
                gap: "1.5vh",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center", fontSize: '3.75vh' }}>
                <Button
                  variant="contained"
                  // color="success"
                  onClick={() => scrollToForm()}
                  className='button-zapisz'
                >
                  Zapisz się
                </Button>
              </div>

              <div  style={{color: '#fafafa', fontFamily: "'Lato', sans-serif"}}>
                <b style={{color: '#B70000', fontFamily: "'Orbitron', sans-serif"}}>Termin:</b> Dokładnie dni treningów podane zostaną po
                zakończeniu naboru oraz ustaleniu grup. <br />
              </div>
              <div  style={{color: '#fafafa', fontFamily: "'Lato', sans-serif"}}>
                <b style={{color: '#B70000', fontFamily: "'Orbitron', sans-serif"}}>Lokalizacja: </b> Trenujemy w Bike Park Marcinka
                zlokalizowanym przy Ul. Harcerskiej w Tarnowie. <br />
              </div>
              <div  style={{color: '#fafafa', fontFamily: "'Lato', sans-serif"}}>
                <b style={{color: '#B70000', fontFamily: "'Orbitron', sans-serif"}}>Grupy: </b>Początkująca i Średniozaawansowana dla dzieci od 8
                roku życia. Młodszych adeptów zapraszamy na zajęcia indywidualne
                ! <br />
              </div>
              <div  style={{color: '#fafafa', fontFamily: "'Lato', sans-serif"}}>
                {" "}
                <b style={{color: '#B70000', fontFamily: "'Orbitron', sans-serif"}}>Czas trwania: </b> Trening trwa dwie godziny. <br />{" "}
              </div>

              <div  style={{color: '#fafafa', fontFamily: "'Lato', sans-serif"}}>
                <b style={{color: '#B70000', fontFamily: "'Orbitron', sans-serif"}}>Cena: </b> 200pln/miesiąc <br />
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
            <div style={{textAlign: 'center', fontFamily: "'Lato', sans-serif", marginBottom: '5vh', fontSize: '2.75vh'}}>
              Zapraszamy na jednodniowe wyjazdy szkoleniowe z Ride4Fun! <br/> Cały
              dzień w najlepszych Polskich Bike Parkach pod okiem instruktora
              wraz z dobrą ekipą to recepta na udany weekend!
            </div>
            <img
              alt="wyjazdy1"
              src="./images/wyjazdy1.jpg"
              style={{ width: "66%" }}
            />
            <h1>Terminy już wkrótce!!!</h1>
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
  {src: './images/AboutUs1.jpg', text: ' blabla'},
  {src: './images/AboutUs1.jpg', text: ' blabla'},
  {src: './images/AboutUs1.jpg', text: ' blabla'},
  {src: './images/AboutUs1.jpg', text: ' blabla'},
  {src: './images/AboutUs1.jpg', text: ' blabla'},
]
