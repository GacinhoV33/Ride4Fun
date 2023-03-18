import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

//<FontAwesomeIcon icon="fa-sharp fa-regular fa-person-biking-mountain" />
export type TrainingItemProps = {
  textTitle: JSX.Element;
  description: string;
  icon: IconDefinition;
  color: string;
  srcPath: string;
  linkPath: string;
  buttonText: string;
};

const TrainingItem: React.FC<TrainingItemProps> = ({
  textTitle,
  description,
  icon,
  color,
  srcPath,
  linkPath,
  buttonText,
}) => {
  function handleClick() {}
  return (
    <div
      style={{
        height: "80vh",
        width: "25vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <div>
        <img
          style={{ width: "25vw", height: "32.5vh", paddingBottom: "0px" }}
          src={`./images/${srcPath}`}
        ></img>
      </div>

      <div style={{ color: color, height: "10vh", textAlign: "center" }}>
        {textTitle}
      </div>
      <div
        style={{
          marginTop: "2vh",
          borderRight: color === "green" ? undefined : "1px solid black",
          width: "100%",
          textAlign: "center",
        }}
      >
        <FontAwesomeIcon
          icon={icon}
          style={{ margin: "0px 0px", height: "4vh" }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "30vh",
          marginBottom: "3vh",
          borderRight: color === "green" ? undefined : "1px solid black",
        }}
      >
        <div
          style={{
            padding: "5px 10px",
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            height: "100%",
            fontSize: "1.75",
            fontWeight: "600",
          }}
        >
          {description}
        </div>

        <div>
          <Link to={`${linkPath}`} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{ background: color, color: "white", padding: "10px" }}
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
