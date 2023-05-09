import React from "react";
import "./Trips.scss";
import { TripContentData } from "./Content/TripContent";
import { Typography } from "@mui/material";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile } from "react-device-detect";
export interface TripDescribtionProps {
  currentTrip: number;
}

const TripDescribtion: React.FC<TripDescribtionProps> = ({ currentTrip }) => {
  const {
    title,
    imgMain,
    imgMaps,
    contentHeader,
    bikeParkDescribtion,
    roadsDescribtion,
    timeLine,
  } = TripContentData[currentTrip];
  return (
    <div
      className="trip-describtion"
      id="trip-desc"
      style={{ background: "rgba(38, 38, 38, 0.75)" }}
    >
      <Typography variant="h3" sx={{ p: "20px" }}>
        {title}
      </Typography>
      <img src={imgMain} width="70%" alt={`main-${title}`} />
      <Typography sx={{ p: "2% 10%", fontSize: "20px" }}>
        {contentHeader}
      </Typography>
      <br />
      <Typography sx={{ color: "#ccc", p: "2% 10%", fontSize: "18px" }}>
        {bikeParkDescribtion}
      </Typography>
      <div style={isMobile ? { display: "flex", gap: "2.5%", flexDirection: 'column' }: { display: "flex", gap: "2.5%", flexDirection: 'row' }}>
        <img src={imgMaps} alt={`maps-${title}`} width="500" />
        <Typography
          sx={{ color: "#ccc", p: "2%", fontSize: "18px", width: "600px" }}
        >
          {roadsDescribtion}
        </Typography>
      </div>
      <Typography
        style={{
          margin: "80px",
          borderTop: "1px solid #eee",
          padding: "0px 40px",
          paddingTop: "50px",
        }}
        variant="h5"
      >
        Nasi instruktorzy zapewnią opiekę oraz profesjonalne szkolenie rowerowe
        dostosowane do poziomu grupy, a co najważniejsze dużo jazdy i masę
        frajdy!
      </Typography>
      <div style={{flexGrow: '1', textAlign: 'center',}}>
          <div style={{ fontSize: '28px', color: '#ccc', fontWeight: '600'}}>
          Wymagania:
          </div>
          <Typography variant="h6">
            Sprawny rower górski z amortyzacją z przodu{" "}
            <FontAwesomeIcon icon={faCircleCheck} style={{ width: "3vh" }} />
          </Typography>
          <Typography variant="h6">
            Kask (full face) i ochraniacze{" "}
            <FontAwesomeIcon icon={faCircleCheck} style={{ width: "3vh" }} />
          </Typography>
          <Typography variant="h6">
            Dużo zajawki i chęci jazdy
            <FontAwesomeIcon icon={faCircleCheck} style={{ width: "3vh" }} />
          </Typography>
        </div>
        <div style={{textAlign: 'center', fontSize: '28px', color: '#ccc', fontWeight: '600', marginTop: '35px'}}>
          Cena: 220zł
          </div>
      <div style={isMobile ? { display: "flex", flexDirection: 'column', textAlign: 'center', gap: '100px', justifyContent: 'space-evenly', width: '75%', marginTop: '15px' } :{ display: "flex", textAlign: 'center', gap: '100px', justifyContent: 'space-evenly', width: '75%', marginTop: '15px' }}>
        
        <div style={{flexGrow:'1'}}>
          
          <Typography variant="h6" color='lightgreen'>
            Cena Obejmuje:
          </Typography>
          <Typography variant="h6">
          - 5h szkolenia rowerowego pod okiem instruktora 
          </Typography>
          <Typography variant="h6">
          - Transport 
          </Typography>
          <Typography variant="h6">
          - Ubezpieczenie NNW od sportów ekstremalnych 
          </Typography>
        </div>
        <div style={{flexGrow:'1'}}>
          <div style={{textAlign: 'center', fontSize: '28px', color: '#ccc', fontWeight: '600'}}>
          </div>
          <Typography variant="h6" color='red'>
          Cena nie obejmuje:
          </Typography>
          <Typography variant="h6">
          - Karnetu na wyciąg <br/>(110zł z ważną legitymacją uczniowską)
          </Typography>
          <Typography variant="h6">
          - Posiłku podczas przerwy 
          </Typography>
          
        </div>
      </div>

      
      <Typography variant="h3" style={{ margin: "30px 0" }}>
        {" "}
        Plan wyjazdu
      </Typography>
      {timeLine}
      <Typography style={{ marginBottom: "15px" }}>
        {" "}
        *Ilość miejsc ograniczona <br/>
        **W przypadku złej pogody możliwość przeniesienia wyjazdu na Niedzielę 14.05.
      </Typography>
    </div>
  );
};

export default TripDescribtion;
