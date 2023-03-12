import React from "react";
import "./OurOffer.scss";
import { TrainingItemProps } from "./TrainingItem";
import TrainingItem from "./TrainingItem";
import {faPersonBiking} from '@fortawesome/free-solid-svg-icons'

const OurOffer: React.FC = () => {
  const trainingItem: TrainingItemProps[] = [
    { title: "Obozy i półkolonie", icon: faPersonBiking, description: 'Wkręcamy zajawkę do aktywności fizycznej i zdrowego trybu życia podczas organizowanych przez nas obozów oraz półkolonii zimowych.', color: 'red', srcPath: 'testPhoto.jpg'},
    { title: "Jednodniowe wyjazdy", icon: faPersonBiking, description: 'Jednodniowe wyjazdy to dobra propozycja na krótki aktywny wypad w towarzystwie naszej kadry. W zimie organizujemy jednodniowe wypady narciarskie, a latem śmigamy na rowery eksplorując okoliczne ścieżki.', color: 'yellow', srcPath: 'testPhoto.jpg' },
    { title: "Nauka pływania", icon: faPersonBiking, description: 'Wkręcamy zajawkę do aktywności fizycznej i zdrowego trybu życia podczas organizowanych przez nas obozów oraz półkolonii zimowych', color: 'green', srcPath: 'testPhoto.jpg'},
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

