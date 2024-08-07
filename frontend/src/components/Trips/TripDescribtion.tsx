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
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1> Zakończenie lata w Auuuuuustrii</h1>
      <p>
        Niepowtarzalne przeżycia prawdziwej alpejskiej przygody. Rowerowa gratka
        dla pasjonatów ekstremy. Szalone wakacje dla miłośników dwóch kółek. Tak
        można określić nasz wyjazd do Saalbach-Hinterglemm i nie będzie w tym
        przesady.
      </p>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}
      >
        <img src="images/trip21.png" style={{ width: "50%" }} alt="rider" />
      </div>
      <h3>
        Jednak, trzymając się faktów i tego, co pragniemy Wam zaoferować, możemy
        ten wyjazd opisać też konkretami:{" "}
      </h3>
      <ul>
        <li>
          {" "}
          7 nocy w pięknej, alpejskiej chacie w pobliżu Saalbach-Hinterglemm.
        </li>
        <li>
          6 dni jazdy w najlepszych austriackich bikeparkach- Saalbach,
          Hinterglemm, Leogang oraz Schladming.{" "}
        </li>
        <li>
          {" "}
          Dwóch doświadczonych instruktorów, którzy zadbają o dobrą atmosferę i
          służą pomocą 24h/dobę.
        </li>
        <li>Transport komfortowym busem 9 osobowym z przyczepką na rowery.</li>
        <li> Codzienne, pyszne śniadanka.</li>
        <li> Możliwość odbycia szkoleń z techniki jazdy.</li>
        <li> Wsparcie serwisowe. </li>
        <li> Ubezpieczenie od sportów ekstremalnych. </li>
        <li> Sesje foto, obecność fotografa przez cały wyjazd! </li>
        <li> Gadżety firmy BIKEWEAR</li>
      </ul>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}
      >
        <img src="images/trip22.png" style={{ width: "50%" }} alt="rider" />
      </div>
      <h2>Bike parki: </h2>
      <p>
        Ponad 90 km najlepszych linii i szlaków oraz aż 9 ultranowoczesnych
        wyciągów w 7 górach zapewnia nieograniczoną przyjemność z jazdy na
        rowerze. Sześć nowoczesnych kolejek linowych w Saalbach Hinterglemm,
        dwie w Leogang i jedna w Fieberbrunn szybko i wygodnie zabiorą Was na
        najpiękniejsze szczyty górskie i najfajniejsze trasy. Odkryjemy setki
        kilometrów najlepszych tras zjazdowych o różnym stopniu trudności.
        Saalbach Hinterglemm to największy region rowerowy w Austrii. Będziemy
        jeździć na słynnych na całym świecie trasach takich jak 99 jumps,
        Hacklberg-Trail czy też trasa Mistrzostw Świata w Epic Bike Park
        Leogang!{" "}
      </p>
      <h2>Plan wyjazdu: </h2>
      • 21.09.2024 wyjazd z Polski (trasa
      Tarnów-Kraków-Bielsko-Biała-Saalbach-Hinterglemm <br />• 22-27.09 jazda w
      bikeparkach (jeździmy w Saalbach-Hinterglemm/Leogang/Schladming) wspólna
      integracja, sesyjki na Hopach i sporo jazdy i co najważniejsze wspaniała
      zabawa na rowerze! <br />• 28.09.2024 powrót do Polski (trasa
      Saalbach-Hinterglemm-Bielsko-Biała-Kraków-Tarnów)
      <h2>Cena:</h2>
      <div> 3500 PLN </div>
      <h3 style={{ color: "#AAA" }}> CENA NIE OBEJMUJE </h3>
      • Kosztów karnetów (262 Euro) <br />• Wyżywienia w Bike Parku oraz na
      Mieście
      <h3>
        Poziom Średniozaawansowany/Zaawansowany <br />
        Minimalny wiek uczestnika 16 lat.
      </h3>
      <h2>Kontakt</h2>
      
      <span id="trip-desc">Bartek 796210700</span>
      <span id="trip-desc">Piotrek 506172468</span>

      <h4>Email:</h4>
      <span>szkoleniaride4fun@gmail.com</span>
      <h2 style={{marginBottom: 0}}>ZAPISY</h2>
    </div>
  );
};

// const TripDescribtion: React.FC<TripDescribtionProps> = ({ currentTrip }) => {
//   const {
//     title,
//     imgMain,
//     imgMaps,
//     contentHeader,
//     bikeParkDescribtion,
//     roadsDescribtion,
//     timeLine,
//     additionalInfo
//   } = TripContentData[currentTrip];
//   return (
//     <div
//       className="trip-describtion"
//       id="trip-desc"
//     >
//       <Typography variant={isMobile ? 'h6' : 'h3'} sx={{ p: "20px" }}>
//         {title}
//       </Typography>
//       <img src={imgMain} width={isMobile ? '80vw' : '70%'} alt={`main-${title}`} />
//       <Typography sx={{ p: "2% 10%", fontSize: "20px" }}>
//         {contentHeader}
//       </Typography>
//       <br />
//       <Typography className='bike-park-desc'>
//         {bikeParkDescribtion}
//       </Typography>
//       <div className='roads-describtion'>
//         <img src={imgMaps} className='img-maps' alt={`maps-${title}`} />
//         <Typography
//         className='text-road-desc'
//         >
//           {roadsDescribtion}
//         </Typography>
//       </div>
//       <Typography
//         className='instructors'
//         variant={isMobile ?  undefined : 'h5' }
//       >
//         Nasi instruktorzy zapewnią opiekę oraz profesjonalne szkolenie rowerowe
//         dostosowane do poziomu grupy, a co najważniejsze dużo jazdy i masę
//         frajdy!
//       </Typography>
//       <div style={{flexGrow: '1', textAlign: 'center',}}>
//           <div style={{ fontSize: '28px', color: '#ccc', fontWeight: '600'}}>
//           Wymagania:
//           </div>
//           <Typography variant="h6">
//             Sprawny rower górski z amortyzacją z przodu{" "}
//             <FontAwesomeIcon icon={faCircleCheck} style={isMobile ? {width: '3vw'} : { width: "3vh" }} />
//           </Typography>
//           <Typography variant="h6">
//             Kask (full face) i ochraniacze{" "}
//             <FontAwesomeIcon icon={faCircleCheck} style={isMobile ? {width: '3vw'} : { width: "3vh" }} />
//           </Typography>
//           <Typography variant="h6">
//             Dużo zajawki i chęci jazdy
//             <FontAwesomeIcon icon={faCircleCheck} style={{ width: "3vh" }} />
//           </Typography>
//         </div>
//         <div style={{textAlign: 'center', fontSize: '28px', color: '#ccc', fontWeight: '600', marginTop: '35px'}}>
//           Cena: 220zł
//           </div>
//       <div style={isMobile ? { display: "flex", flexDirection: 'column', textAlign: 'center', gap: '100px', justifyContent: 'space-evenly', width: '75%', marginTop: '15px' } :{ display: "flex", textAlign: 'center', gap: '100px', justifyContent: 'space-evenly', width: '75%', marginTop: '15px' }}>

//         <div style={{flexGrow:'1'}}>

//           <Typography variant="h6" color='lightgreen'>
//             Cena Obejmuje:
//           </Typography>
//           <Typography variant="h6">
//           - 6h szkolenia rowerowego pod okiem instruktora
//           </Typography>
//           <Typography variant="h6">
//           - Transport
//           </Typography>
//           <Typography variant="h6">
//           - Ubezpieczenie NNW od sportów ekstremalnych
//           </Typography>
//         </div>
//         <div style={{flexGrow:'1'}}>
//           <div style={{textAlign: 'center', fontSize: '28px', color: '#ccc', fontWeight: '600'}}>
//           </div>
//           <Typography variant="h6" color='red'>
//           Cena nie obejmuje:
//           </Typography>
//           <Typography variant="h6">
//           - Karnetu na wyciąg <br/>(110zł z ważną legitymacją uczniowską)
//           </Typography>
//           <Typography variant="h6">
//           - Posiłku podczas przerwy
//           </Typography>

//         </div>
//       </div>

//       <Typography variant="h3" style={{ margin: "30px 0" }}>
//         {" "}
//         Plan wyjazdu
//       </Typography>
//       {timeLine}
//       {additionalInfo}
//     </div>
//   );
// };

export default TripDescribtion;
