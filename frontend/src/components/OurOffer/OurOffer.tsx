import React from "react";
import "./OurOffer.scss";
import TrainingItem from "./TrainingItem";
import { faPersonBiking } from "@fortawesome/free-solid-svg-icons";
import { faMountainSun } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import { responsive } from "../trainings/Trainings";
import "react-multi-carousel/lib/styles.css";
import {isMobile} from 'react-device-detect';
export interface OurOfferProps {
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}

const OurOffer: React.FC<OurOfferProps> = ({ setCurrentTab }) => {
  console.log(isMobile)
  const trainingItem = [
    {
      textTitle: (
        <span className='ourOffer-title'>
          {" "}
          {/* Szkolenia indywidualne <br /> i grupowe{" "} */}
          SZKOLENIA INDYWIDUALNE <br /> I GRUPOWE{" "}

        </span>
      ),
      icon: faPersonBiking,
      description: <span>Chciałbyś poprawić swoją technikę jazdy {isMobile ? null : <br/>}i poczuć się pewniej w terenie? Na zajęciach indywidualnych zrobisz największy progres!</span>,
        // "Chciałbyś poprawić swoją technikę jazdy i poczuć się pewniej w terenie? Na zajęciach indywidualnych zrobisz największy progres!",
      color: "#B70000",
      srcPath: "item1.jpg",
      linkPath: "trainings",
      buttonText: "SPRAWDŹ OFERTĘ",
    },
    {
      textTitle: (
        <span className='ourOffer-title'>
          Klub Rowerowy <br />
          Ride4Fun Academy
        </span>
      ),
      icon: faMountainSun,
      description: <span>Szkółka Enduro/Downhill dla dzieci i młodzieży. Systematyczny trening pod okiem licencjonowanego instruktora to dobra szansa na szybkie postępy {isMobile ? <br/> : null}i rozpoczęcie nowych znajomości!</span>,
        // "Szkółka Enduro/Downhill dla dzieci i młodzieży. Systematyczny trening pod okiem licencjonowanego instruktora to dobra szansa na szybkie postępy i rozpoczęcie nowych znajomości!",
      color: "#B70000",
      srcPath: "item2.jpg",
      linkPath: "trainings",
      buttonText: "DOŁĄCZ DO NAS",
    },
    {
      textTitle: (
        <span className='ourOffer-title'>
          Jednodniowe <br /> wyjazdy
        </span>
      ),
      icon: faCar,
      description: <span>Szkolenia jednodniowe to dobra propozycja {isMobile ? null : <br/>}na aktywny dzień pod okiem naszej kadry! Latem odwiedzamy najlepsze miejscówki i Bike Parki {isMobile ? <br/> : null}w Polsce, zimą zaś szkolimy na nartach {isMobile ? null : <br/>}i snowboardzie.</span>,
        // "Szkolenia jednodniowe to dobra propozycja na aktywny dzień pod okiem naszej kadry! Latem odwiedzamy najlepsze miejscówki i Bike Parki w Polsce, zimą zaś szkolimy na nartach i snowboardzie.",
      color: "#B70000",
      srcPath: "item3.jpg",
      linkPath: "trainings",
      buttonText: "ZOBACZ WIĘCEJ",
    },
  ];
  return (
    <div className="ouroffer-main">
      <div className="ouroffer-content">
        {trainingItem.map((item, index) => (
          <TrainingItem
            {...item}
            key={`item.title ${index}`}
            setCurrentTab={setCurrentTab}
            index={index}
          />
        ))}
      </div>
      <div className='ouroffer-content-mobile carousel-media'>
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
          {trainingItem.map((item, index) => (
            <div  key={`${item.icon} - carousel`}>
              
              <TrainingItem
                  {...item}
                  key={`${item.buttonText} ${index}-mobile`}
                  setCurrentTab={setCurrentTab}
                  index={index}
                />
            </div>
          
        ))}
        </Carousel>
      </div>
    </div>
  );
};

export default OurOffer;
