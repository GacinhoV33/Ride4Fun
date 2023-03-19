import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PlaceHolder from "../common/PlaceHolder";
import "./Trainings.scss";

export interface TrainingProps {
  currentTab: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}

const Trainings: React.FC<TrainingProps> = ({ currentTab, setCurrentTab }) => {
  const handleChange = (event: React.SyntheticEvent, newTab: number) => {
    setCurrentTab(newTab);
  };
  return (
    <Box sx={{ width: "100%", bgcolor: "#eee" }}>
      <PlaceHolder />
      <Tabs value={currentTab} centered style={{ marginTop: "4vh" }}>
        <Tab
          label="R4F Academy"
          onClick={(event) => handleChange(event, 0)}
          className="section-styles"
        />
        <Tab
          label="Wyjazdy"
          onClick={(event) => handleChange(event, 1)}
          className="section-styles"
        />
        <Tab
          label="Półkolonie"
          onClick={(event) => handleChange(event, 2)}
          className="section-styles"
        />
      </Tabs>
      {currentTab === 0 && (
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
          <div>
            <b>Termin:</b>  Dokładnie dni treningów podane zostaną po zakończeniu naboru oraz ustaleniu grup. <br/>
            
            <b>Lokalizacja:</b> Trenujemy w Bike Park Marcinka zlokalizowanym przy Ul. Harcerskiej w Tarnowie. <br/>
            <b>Grupy: </b>Początkująca i Średniozaawansowana dla dzieci od 8 roku życia. Młodszych adeptów zapraszamy na zajęcia indywidualne ! <br/>
            <b>Czas trwania:</b> Trening trwa dwie godziny. <br/>
            <b>Cena:</b> 200pln/miesiąc <br/>
            ZAPISZE SIĘ - ButTON <br/>
          </div>

          {/* <img alt='R4F-academy' src=''/> */}
        </div>
      )}
      {currentTab === 1 && <div className="content-trainings">Wyjazdy</div>}
      {currentTab === 2 && <div className="content-trainings">Półkolonie</div>}
    </Box>
  );
};

export default Trainings;
