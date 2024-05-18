import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Trips.scss";
import { CurrentTripsContent } from "./Content/TripCardsContent";
import { UserData } from "./TripContact";
import { TripContentData } from "./Content/TripContent";
import { isMobile } from "react-device-detect";

export interface CurrentTripsProps {
  scrollToTripDescribtion: () => void;
  setCurrentTrip: React.Dispatch<React.SetStateAction<number>>,
  currentTrip: number,
  setInitialValues: React.Dispatch<React.SetStateAction<UserData>>
}

const CurrentTrips: React.FC<CurrentTripsProps> = ({
  scrollToTripDescribtion,
  setCurrentTrip,
  currentTrip,
  setInitialValues,

}) => {
  return (
    <div>
            <Typography gutterBottom variant={isMobile ? "h6" :"h4"} component="div">
            Nadchodzące wyjazdy:
            </Typography>

      {/* <h3>Nadchodzące wyjazdy</h3> */}
      <div className="current-cards">
        {CurrentTripsContent.map((item, index) => (
          <TripCard
            {...item}
            key={`card-${index}`}
            currentTrip={currentTrip}
            setCurrentTrip={setCurrentTrip}
            scrollToTripDescribtion={scrollToTripDescribtion}
            setInitialValues={setInitialValues}
          />
        ))}
      </div>
    </div>
  );
};

export interface TripCardProps {
  imgPath: string;
  title: string;
  content: any;
  date: string;
  tripId: number;
  currentTrip?: number;
  setCurrentTrip?: React.Dispatch<React.SetStateAction<number>>;
  scrollToTripDescribtion?: () => void;
  setInitialValues?: React.Dispatch<React.SetStateAction<UserData>>;
}

const TripCard: React.FC<TripCardProps> = ({
  imgPath,
  title,
  content,
  tripId,
  date,
  currentTrip,
  setCurrentTrip,
  scrollToTripDescribtion,
  setInitialValues
}) => {
  function handleClick(tripId: number) {
    if (setCurrentTrip) {
      setCurrentTrip(tripId);
    }
  }

  function handleSign(){
    if (setCurrentTrip) {
      setCurrentTrip(tripId);
    }
    if (scrollToTripDescribtion) {
      scrollToTripDescribtion();
    }
    const {date, city} = TripContentData[tripId];
    if(setInitialValues){
      setInitialValues({
        firstName: '',
        lastName: '',
        contact: '',
        age: '',
        // tripDestination: city,
        // tripDate: date,
        email: ''
      })
    }
  }
  return (
    <Card
      // sx={ isMobile ? {width: 300} :{ width: 375 }}
      className="tripcard"
      style={
        tripId === currentTrip ? { border: "1px solid #B70000" } : undefined
      }
      onClick={() => handleClick(tripId)}
    >
      <CardMedia
        component="img"
        alt={`tripImg-${tripId}`}
        height="140"
        image={imgPath}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleSign()}>Zapisz się </Button>
      </CardActions>
    </Card>
  );
};

export default CurrentTrips;
