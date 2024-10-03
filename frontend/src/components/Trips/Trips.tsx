import React, { useState } from "react";
import "../trainings/Trainings.scss";
import CurrentTrips from "./CurrentTrips";
import "./Trips.scss";
import TripDescribtion from "./TripDescribtion";
import TripContact, { UserData } from "./TripContact";

const Trips: React.FC = () => {
  const [initialValues, setInitialValues] =
    useState<UserData>(initialValuesPattern);
  const [currentTrip, setCurrentTrip] = useState<number>(0);
  return (
    <div className="content-trainings">
      <h1 className="title-third-tab title-of-trainings">
        {" "}
        Wyjazdy szkoleniowe{" "}
      </h1>
      <CurrentTrips
        scrollToTripDescribtion={scrollToTripDescribtion}
        currentTrip={currentTrip}
        setCurrentTrip={setCurrentTrip}
        setInitialValues={setInitialValues}
      />
      <TripDescribtion currentTrip={currentTrip} />
      <TripContact initialValues={initialValues} />
    </div>
  );
};

function scrollToTripDescribtion() {
  const box = document.getElementById("trip-desc")?.getBoundingClientRect();
  if (box) {
    window.scrollTo({
      behavior: "smooth",
      top: box.bottom,
      left: 0,
    });
  }
}

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

const initialValuesPattern: UserData = {
  firstName: "",
  lastName: "",
  contact: "",
  age: "",
  turnus: "",
  // tripDestination: '',
  // tripDate: '',
  email: "",
};
