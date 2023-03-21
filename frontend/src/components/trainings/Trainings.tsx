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
import Prices from "./Prices";
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
    <Box sx={{ width: "100%", bgcolor: "#eee" }}>
      <PlaceHolder />
      <Tabs value={currentTab} centered style={{ marginTop: "4vh" }}>
        <Tab
          label="Szkolenia"
          onClick={(event) => handleChange(event, 0)}
          className="section-styles"
        />
        <Tab
          label="R4F Academy"
          onClick={(event) => handleChange(event, 1)}
          className="section-styles"
        />
        <Tab
          label="Wyjazdy"
          onClick={(event) => handleChange(event, 2)}
          className="section-styles"
        />
      </Tabs>

      {currentTab === 0 && (
        <div className="content-trainings">
          <h1> Szkolenia indywidualne i grupowe </h1>
          <p style={{ fontSize: "2.75vh" }}>
            Chcesz poprawić swoją technikę jazdy, poczuć się bezpieczniej na
            trasach a może nauczyć się skakać i pokonywać trudne techniczne
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
            <div
              style={{
                fontSize: "4vh",
                fontWeight: "600",
                textAlign: "center",
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

            <img
              src="./images/szkoleniaInd1.jpg"
              alt="szkolInd1"
              style={{ width: "75%" }}
            />
            <div style={{ fontSize: "2.5vh", textAlign: "center" }}>
              Program każdego szkolenia dobierany jest indywidualnie do Twoich
              potrzeb oraz postępów 💪 <br />
              Naszą bazą szkoleniową jest Bike Park Marcinka w Tarnowie. <br />
              Możliwość zorganizowania szkolenia grupowego w dowolnym Bike Parku
              w Całej Polsce!
            </div>
            <Prices />
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
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => scrollToForm()}
                  style={{
                    width: "50%",
                    height: "5vh",
                    fontSize: "2.5vh",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  Zapisz się
                </Button>
              </div>

              <div>
                <b>Termin:</b> Dokładnie dni treningów podane zostaną po
                zakończeniu naboru oraz ustaleniu grup. <br />
              </div>
              <div>
                {" "}
                <b>Lokalizacja: </b> Trenujemy w Bike Park Marcinka
                zlokalizowanym przy Ul. Harcerskiej w Tarnowie. <br />
              </div>
              <div>
                <b>Grupy: </b>Początkująca i Średniozaawansowana dla dzieci od 8
                roku życia. Młodszych adeptów zapraszamy na zajęcia indywidualne
                ! <br />
              </div>
              <div>
                {" "}
                <b>Czas trwania: </b> Trening trwa dwie godziny. <br />{" "}
              </div>

              <div>
                <b>Cena: </b> 200pln/miesiąc <br />
              </div>
            </div>
          </div>

          <ContactAcademy />
          <div ref={contactRef}></div>
          {/* <img alt='R4F-academy' src=''/> */}
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
            <div>
              Zapraszamy na jednodniowe wyjazdy szkoleniowe z Ride4Fun! Cały
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
