import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import './OurOffer.scss';

export type TrainingItemProps = {
  textTitle: JSX.Element;
  description: string;
  icon: IconDefinition;
  color: string;
  srcPath: string;
  linkPath: string;
  buttonText: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
  index: number;
};

const TrainingItem: React.FC<TrainingItemProps> = ({
  textTitle,
  description,
  icon,
  color,
  srcPath,
  linkPath,
  buttonText,
  setCurrentTab,
  index
}) => {
  function handleClick() {
    setCurrentTab(index);
  }
  return (
    <div
      className='training-item'
    >
      <div>
        <img
          className='training-img'
          src={`./images/${srcPath}`}
          alt={`${textTitle}img-training`}
        />
      </div>

      <div className='training-title' style={{color: color}}>
        {textTitle}
      </div>
      <div
        className='training-icon-content'
      >
        <FontAwesomeIcon
          icon={icon}
          className='training-icon'
        />
      </div>

      <div
        className='training-description'
        style={{
          borderRight: buttonText === "ZOBACZ WIĘCEJ" ? undefined : "1px solid #fafafa",
        }}
      >
        <div
        className="content-training-item"
        >
          {description}
        </div>

        <div>
          <Link to={`${linkPath}`} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              className='training-button'
              style={{ background: color}}
              onClick={() => handleClick()}
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainingItem;
