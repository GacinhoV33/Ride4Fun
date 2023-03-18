import React from "react";
import "./OurOffer.scss";
import { TrainingItemProps } from "./TrainingItem";
import TrainingItem from "./TrainingItem";
import {faPersonBiking} from '@fortawesome/free-solid-svg-icons'

const OurOffer: React.FC = () => {
  const trainingItem: TrainingItemProps[] = [
    { textTitle: <p style={{fontSize: '3.5vh', textAlign: 'center'}}> Szkolenia indywidualne <br/> i grupowe </p>, icon: faPersonBiking, description: 'Chciałbyś poprawić swoją technikę jazdy i poczuć się pewniej w terenie ? Na zajęciach indywidualnych zrobisz największy progres!', color: 'red', srcPath: 'testPhoto.jpg'},
    { textTitle: <p style={{fontSize: '3.5vh', textAlign: 'center'}}>Klub Rowerowy <br/>Ride4Fun Academy</p>, icon: faPersonBiking, description: 'Szkółka Enduro/Downhill dla dzieci i młodzieży. Systematyczny trening pod okiem licencjonowanego instruktora to dobra szansa na szybkie postępy i rozpoczęcie nowych znajomości !Cotygodniowe zajęcia w Bike Parku Marcinka w Tarnowie w dwóch grupach zaawansowania! ', color: 'yellow', srcPath: 'testPhoto.jpg' },
    { textTitle: <p style={{fontSize: '3.5vh', textAlign: 'center'}}>Jednodniowe <br/> wyjazdy</p>, icon: faPersonBiking, description: 'Szkolenia jednodniowe to dobra propozycja na aktywny dzień pod okiem naszej kadry! Latem odwiedzamy najlepsze miejscówki i Bike Parki w Polsce, zimą zaś szkolimy na nartach i snowboardzie.', color: 'green', srcPath: 'testPhoto.jpg'},
  ];
  return (
    <div className="ouroffer-main">
      <div className="ouroffer-content">
        {trainingItem.map((item, index) => (
            <TrainingItem {...item} key={`item.title ${index}`}/>
        ))}
      </div>
    </div>
  );
};

export default OurOffer;

