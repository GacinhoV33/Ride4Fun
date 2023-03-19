import React from "react";
import "./OurOffer.scss";
import { TrainingItemProps } from "./TrainingItem";
import TrainingItem from "./TrainingItem";
import {faPersonBiking} from '@fortawesome/free-solid-svg-icons'
import {faMountainSun} from '@fortawesome/free-solid-svg-icons'
import {faCar} from '@fortawesome/free-solid-svg-icons'

export interface OurOfferProps{
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}

const OurOffer: React.FC<OurOfferProps> = ({setCurrentTab}) => {
  const trainingItem = [
    { textTitle: <span style={{fontSize: '3.5vh', textAlign: 'center'}}> Szkolenia indywidualne <br/> i grupowe </span>, icon: faPersonBiking, description: 'Chciałbyś poprawić swoją technikę jazdy i poczuć się pewniej w terenie? Na zajęciach indywidualnych zrobisz największy progres!', color: 'red', srcPath: 'item1.jpg', linkPath: 'trainings', buttonText: 'SZKOLENIA'},
    { textTitle: <span style={{fontSize: '3.5vh', textAlign: 'center'}}>Klub Rowerowy <br/>Ride4Fun Academy</span>, icon: faMountainSun, description: 'Szkółka Enduro/Downhill dla dzieci i młodzieży. Systematyczny trening pod okiem licencjonowanego instruktora to dobra szansa na szybkie postępy i rozpoczęcie nowych znajomości!', color: 'yellow', srcPath: 'item2.jpg', linkPath: 'trainings', buttonText: 'SZKOLENIA'},
    { textTitle: <span style={{fontSize: '3.5vh', textAlign: 'center'}}>Jednodniowe <br/> wyjazdy</span>, icon: faCar, description: 'Szkolenia jednodniowe to dobra propozycja na aktywny dzień pod okiem naszej kadry! Latem odwiedzamy najlepsze miejscówki i Bike Parki w Polsce, zimą zaś szkolimy na nartach i snowboardzie.', color: 'green', srcPath: 'item3.jpg', linkPath: 'trainings', buttonText: 'SZKOLENIA'},
  ];
  return (
    <div className="ouroffer-main">
      <div className="ouroffer-content">
        {trainingItem.map((item, index) => (
            <TrainingItem {...item} key={`item.title ${index}`} setCurrentTab={setCurrentTab} index={index}/>
        ))}
      </div>
    </div>
  );
};

export default OurOffer;

