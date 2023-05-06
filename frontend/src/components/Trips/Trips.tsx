import React from "react";
import "../trainings/Trainings.scss";
import CurrentTrips from "./CurrentTrips";

const Trips: React.FC = () => {
  return (
    <div className="content-trainings">
      <h1 className="title-third-tab title-of-trainings">
        {" "}
        Jedniodniowe wyjazdy szkoleniowe{" "}
      </h1>
      <CurrentTrips/>
    </div>
  );
};

const TripsOld: React.FC = () => {
  return (
    <div className="content-trainings">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "2.5vh",
        }}
      >
        <h1 className="title-third-tab title-of-trainings">
          {" "}
          Jedniodniowe wyjazdy szkoleniowe{" "}
        </h1>
        <div className="trainings-wyjazdy-main">
          Zapraszamy na wyjazdy szkoleniowe z Ride4Fun! <br /> Cały dzień w
          najlepszych Polskich Bike Parkach pod okiem instruktora wraz z dobrą
          ekipą to recepta na udany weekend!
        </div>
        <img
          alt="wyjazdy1"
          src="./images/wyjazdy1.jpg"
          className="trainings-wyjazdy-img"
        />
        <h1 style={{ textAlign: "center" }}>Terminy już wkrótce!!!</h1>
      </div>
    </div>
  );
};

export default Trips;
