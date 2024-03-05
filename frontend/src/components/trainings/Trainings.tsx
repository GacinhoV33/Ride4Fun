import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PlaceHolder from "../common/PlaceHolder";
import "./Trainings.scss";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import ContactAcademy, { UserData } from "./ContactAcademy";
import ImagesPortfolio from "../slides/ImagesPortfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { isMobile } from "react-device-detect";
import { useParams } from "react-router-dom";
import Trips from "../Trips/Trips";

export interface TrainingProps {
  currentTab: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}

const Trainings: React.FC<TrainingProps> = ({ currentTab, setCurrentTab }) => {
  const [initialValues, setInitialValues] =
    useState<UserData>(initialValuesPattern);
  const { name } = useParams();

  const card1 = (
    <React.Fragment>
      <CardContent>
        <Typography
          sx={{ fontSize: 15, fontWeight: 600 }}
          color="text.secondary"
          gutterBottom
        >
          Grupa początkująca
        </Typography>
        <Typography variant="h5" component="div">
          Wtorek 17:00
        </Typography>
        <Typography variant="body2">
          Dzieci i młodzież od 7 roku życia rozpoczynające swoją przygodę <br />{" "}
          z kolarstwem górskim.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleBasic()}>
          Zapisz się
        </Button>
      </CardActions>
    </React.Fragment>
  );

  const card2 = (
    <React.Fragment>
      <CardContent>
        <Typography
          sx={{ fontSize: 15, fontWeight: 600 }}
          color="text.secondary"
          gutterBottom
        >
          Grupa średnio zaawansowana
        </Typography>
        <Typography variant="h5" component="div">
          Poniedziałek 16:30
        </Typography>
        <Typography variant="body2">
          Dzieci i młodzież chcąca doskonalić umiejętności i wejść na jeszcze
          wyższy poziom.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleSemiAdvanced()}>
          Zapisz się
        </Button>
      </CardActions>
    </React.Fragment>
  );

  const card3 = (
    <React.Fragment>
      <CardContent>
        <Typography
          sx={{ fontSize: 15, fontWeight: 600 }}
          color="text.secondary"
          gutterBottom
        >
          Trening motoryczny
        </Typography>
        <Typography variant="h5" component="div">
          Czwartek 17:00
        </Typography>
        <Typography variant="body2">
          Zajęcia skupiają się na poprawie koordynacji, wytrzymałości oraz
          ogólnej sprawności w grawitacyjnych odmianach kolarstwa górskiego.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleMotoric()}>
          Zapisz się
        </Button>
      </CardActions>
    </React.Fragment>
  );

  function handleSemiAdvanced() {
    const newInitialValues: UserData = {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      message: " ",
      age: "",
      level: "Średnio zaawansowany",
    };
    setInitialValues(newInitialValues);
    scrollToForm();
  }

  function handleBasic() {
    const newInitialValues: UserData = {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      message: " ",
      age: "",
      level: "Podstawowy",
    };
    setInitialValues(newInitialValues);
    scrollToForm();
  }

  function handleMotoric() {
    const newInitialValues: UserData = {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      message: " ",
      age: "",
      level: "Trening motoryczny",
    };
    setInitialValues(newInitialValues);
    scrollToForm();
  }

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

  const portfolioRef = useRef<any>(null);
  const topScrollPortfolio = portfolioRef.current
    ? portfolioRef.current.getBoundingClientRect().top
    : 400;

  useEffect(() => {
    if (name === "r4f") {
      setCurrentTab(1);
    } else if (name === "szkolenia") {
      setCurrentTab(0);
    } else if (name === "wyjazdy") {
      setCurrentTab(2);
    }

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
            dzieciaki chcący poznać nową zajawkę, jak i profesjonalni zawodnicy
            przygotowujący się do zawodów.
          </p>

          <div className="image-container-trainings">
            <img
              src="./images/szkoleniaInd1.jpg"
              alt="szkolInd1"
              className="trainings-image1"
            />
            <div className="trainings-title-skills">
              Na szkoleniach pracujemy nad:
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
              1 godzina - <strong>100zł</strong>
            </div>
            <div
              style={{ fontFamily: "'Lato', sens-serif", fontSize: "2.75vh" }}
            >
              2 godziny - <strong>180zł</strong>
            </div>
            <div
              style={{
                fontFamily: "'Lato', sens-serif",
                fontSize: "2.75vh",
                marginBottom: "3vh",
              }}
            >
              3 godziny - <strong>250zł</strong>
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
                keyBoardControl={true}
                transitionDuration={1500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {carouselItems.map(({ text, src }, index) => (
                  <div key={`${src}- ${index}`} className="carousel-cont-img">
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
              style={{
                fontSize: "2.75vh",
                marginTop: "5vh",
                fontWeight: "700",
                fontFamily: "'Lato', sens-serif",
                textAlign: "center",
              }}
            >
              Nadal trwa nabór do Szkółki Ride4Fun Academy na cotygodniowe
              treningi dla dzieci i młodzieży!
            </div>
            <h1 style={{ color: "#fafafa" }}>Masz pytania? </h1>
            <div className="trainings-skontaktuj">
              Skontaktuj się z nami w zakładce{" "}
              <Link to="/kontakt" style={{ color: "#B70000" }}>
                KONTAKT
              </Link>
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
            prowadzimy w dwóch grupach zaawansowania, tak by każdy znalazł coś
            dla siebie. Stawiamy nacisk na profesjonalne szkolenie pod czujnym
            okiem licencjonowanych instruktorów {isMobile ? null : <br />}z
            wieloletnim doświadczeniem w pracy z młodzieżą oraz przede wszystkim
            na uśmiechy i radość z jazdy na rowerze. {isMobile ? null : <br />}U
            nas nauczysz się szybko i skutecznie pokonywać leśne szlaki oraz
            Bike Parkowe przeszkody, a co najważniejsze poznasz nowych
            rowerowych przyjaciół, co w dalszej rowerowej przygodzie jest
            niezastąpione!
          </p>
          <div
            style={{
              color: "#B70000",
              fontFamily: "Lato, sans-serif",
              fontSize: "3vh",
              fontWeight: "700",
            }}
          >
            NOWOŚĆ!
          </div>
          <p
            className="content-text-trainings"
            style={{ marginBottom: "50px" }}
          >
            Nasze zajęcia treningu motorycznego skupiają się przede wszystkim na
            poprawie koordynacji, wytrzymałości oraz mają za zadanie stworzyć
            szeroki i stabilny fundament sprawnościowy . Skupiamy się na
            wykonywaniu różnorodnych działań ruchowych z akcentem na technikę
            oraz zadania funkcjonalne, charakterystyczne dla specyfiki jazdy na
            rowerze w enduro i downhillu. Zajęcia prowadzone są w małych grupach
            pod certyfikowanych trenerów personalnych oraz fizjoterapeuty.
          </p>
          <div className="trainings-portfolioImages" ref={portfolioRef}>
            <ImagesPortfolio topScroll={topScrollPortfolio} />
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
                {/* <Button
                  variant="contained"
                  // color="success"
                  onClick={() => scrollToForm()}
                  className="button-zapisz"
                >
                  Zapisz się
                </Button> */}
              </div>

              <div className="trainings-text-r4f cards-trainings-items">
                <Card variant="outlined" className="cards-size-trainings">
                  {card2}
                </Card>
                <Card variant="outlined" className="cards-size-trainings">
                  {card1}
                </Card>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Card variant="outlined" className="cards-size-trainings">
                  {card3}
                </Card>
              </div>
              <div className="trainings-text-r4f">
                <b className="trainings-title-r4f">Lokalizacja: </b> Trenujemy w
                Bike Park Marcinka zlokalizowanym przy Ul. Harcerskiej w
                Tarnowie. <br />
                <div style={!isMobile ? {fontSize: '1.45vh'} : {fontSize: '1vh'}}>
                  *W przypadku deszczu, Trening Motorczyny odbywa się w hali
                  sportowej
                </div>
              </div>
              <div className="trainings-text-r4f">
                <b className="trainings-title-r4f">Grupy: </b>
                Początkująca i Średniozaawansowana {isMobile ? null : <br />}dla
                dzieci od 7 roku życia. Młodszych adeptów zapraszamy na zajęcia
                indywidualne! <br />
              </div>
              <div className="trainings-text-r4f">
                {" "}
                <b className="trainings-title-r4f">Czas trwania: </b> Trening
                trwa dwie godziny. <br />{" "}
                <div style={!isMobile ? {fontSize: '1.45vh'} : {fontSize: '1vh'}}>
                  *Trening motoryczny trwa jedną godzinę i odbywa się co dwa tygodnie
                </div>
              </div>

              <div className="trainings-text-r4f">
                <b className="trainings-title-r4f">Cena: </b> 250pln/miesiąc{" "}
                <br />
                <div style={!isMobile ? {fontSize: '1.45vh'} : {fontSize: '1vh'}}>
                  *Cena zajęć rozszerzona o trening motoryczny realizowany raz na dwa tygodnie <br></br>wynosi 350pln
                </div>
              </div>
              
            </div>
          </div>

          <ContactAcademy initialValues={initialValues} />
          <div ref={contactRef}></div>
        </div>
      )}
      {currentTab === 2 && <Trips />}
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
  { src: "./images/szkolenia/8.jpg", text: "none" },
  { src: "./images/szkolenia/11.jpg", text: "none" },
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

const initialValuesPattern: UserData = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  message: " ",
  age: "",
  level: "",
};
