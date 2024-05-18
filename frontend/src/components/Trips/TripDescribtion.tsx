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
      <h1> Program Campu </h1>
      <p>
        Podczas obozu skupiamy się na szkoleniu rowerowym enduro/downhill
        prowadzonym przez wykwalifikowanych instruktorów. Codzienne treningi
        obejmują doskonalenie zdobytych już umiejętności a także poznanie nowych
        elementów jazdy na rowerze zjazdowym.{" "}
      </p>
      <p>
        W tym roku planujemy odwiedzić aż 3 Bike Parki w okolicy ośrodka w
        którym będziemy zakwaterowani. (Skolnity, Soszów, Szczyrk){" "}
      </p>
      <img src="images/beskidcamp2.jpeg" style={{width: "100%"}} alt="rider"/>
      <p>
        Ale to nie koniec atrakcji! Po intensywnych godzinach na rowerze
        zapewniamy chwile relaksu w sportowym stylu połączonych ze wspólną
        integracją. Zajęcia popołudniowe wypełnione będą grami zespołowymi,
        wyjściem na basen, konkursami o tematyce rowerowej. Na zakończenie
        wyjazdu czeka nas ognisko oraz podsumowanie wspólnie spędzonego czasu.
      </p>
      <h2> Szkolenie obejmuje: </h2>
      <ul>
        <li>Minimum 5h szkolenia rowerowego ( 5h x 6 dni=30h )</li>
        <li>
          Możliwa również dodatkowa jazda popołudniowa by zaspokoić najbardziej
          wytrwałych!
        </li>
        <li>
          Podział na małe grupy (grupa średniozaawansowana, zaawansowana){" "}
        </li>
        <li>Naukę i doskonalenie techniki zjazdów </li>
        <li>Zawody na koniec obozu </li>
      </ul>
      <h2> Kazdy uczestnik musi posiadać: </h2>
      <ul>
        <li>Sprawny rower górski</li>
        <li>Kask rowerowy - obowiązkowo full face</li>
        <li>Gogle rowerowe</li>
        <li>Ochraniacze na kolana</li>
        <li>Ochraniacze na łokcie, zbroja (zalecane)</li>
        <li>Odzież przeciwdeszczową </li>
        <li>Zapasowe dętki </li>
        <li>Buty sportowe na rower najlepiej z płaską podeszwą </li>
      </ul>
      <img src="images/beskidcamp3.jpeg" style={{width: "100%"}} alt="rider"/>

      <h2>ATRAKCJE </h2>
      <ul>
        <li>Gry zespołowe na terenie ośrodka</li>
        <li>Wyjście na basen</li>
        <li>Wspólne ognisko</li>
        <li>
          Zajęcia popołudniowe o tematyce rowerowej (serwis roweru, poprawne
          ustawianie zawieszenia)
        </li>
        <li>Warsztaty z Fizjoterapeutą: prewencja kontuzji, pierwsza pomoc</li>
        <li>Trening motoryczny w Kolarstwie zjazdowym</li>
        <li>
          Konkursy o tematyce rowerowej (Bunny hop, rowerowy zbijak, stójka)
        </li>
        <li>Wideoanaliza techniki jazdy</li>
        <li>Rowerowe Kino plenerowe</li>
      </ul>
      <h2> ZAKWATEROWANIE </h2>
      <p>Miejsce zakwaterowania : OW KŁOS , 43-460 Wisła ul.Na Stoku 2</p>
      <p>
        Link do ośrodka:{" "}
        <a
          href="https://klos.wisla.pl/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          https://klos.wisla.pl/
        </a>
      </p>
      <p>
        OW KŁOS to magiczne miejsce ukryte w dolinie Wisły – Nowej Osady.
        Ośrodek oferuje wiele atrakcji: Boisko, piłkarzyki stołowe, bilard,
        siłownia, miejsce na ognisko, miejsce do integracji oraz malowniczą
        okolicę, zadbaną stołówkę i świetlicę.
      </p>
      <p>Pokoje : 2, 3 i 4 osobowe z łazienką. </p>
      <h2>WYŻYWIENIE</h2>
      <p>
        Gwarantujemy 3 pełnowartościowe posiłki (śniadanie, dwudaniowy obiad +
        deser, kolacja) oraz nieograniczoną wodę do picia. Dodatkowo drożdżówki
        podczas przerwy na bike parku.
      </p>
      <h2>TRANSPORT</h2>
      <p>
        Zapewniamy transport busami wraz z rowerami w obie strony ( transport
        wliczony w cenę całościową){" "}
        <p>Miejsca zbiórki: Tarnów, Kraków, Myślenice.</p>
        <p>Podczas przejazdu zapewniamy opiekę teamu R4F.</p>
      </p>
      <h2> RAMOWY PROGRAM DNIA</h2>
      <p>7:30 Pobudka</p>
      <p>8:00 Śniadanie</p>
      <p>9:30-14:30 Szkolenie w Bike Parku</p>
      <p>15:00 Obiad</p>
      <p>16:00-19:00 Zajęcia popołudniowe/ popołudniowa jazda</p>
      <p>19:00 Kolacja</p>
      <p>19:30 Zajęcia wieczorne/ dyżur serwisowy</p>
      <p>21:30 Toaleta wieczorna</p>
      <p>22:00 Cisza nocna</p>
      <h2>CENA </h2>
      <p>2999 zł + cena karnetów w bike parkach </p>
      <h3>Cena objemuje </h3>
      <ul>
        <li>Transport w obie strony wraz z rowerami</li>
        <li>Transport na Bike Parki oddalone nieco dalej od ośrodka</li>
        <li>Opiekę wychowawców</li>
        <li>Ubezpieczenie NNW od sportów ekstremalnych</li>
        <li>Szkolenie pod okiem wykwalifikowanych instruktorów</li>
        <li>Zakwaterowanie wraz z wyżywieniem</li>
        <li>Odwiedzenie trzech Bike parków w okolicy Wisły</li>
        <li>Atrakcje i zajęcia popołudniowe</li>
        <li>Gadżety R4F i nagrody</li>
        <li>Obsługę medialną (fotorelacja)</li>
      </ul>
      <h3> Cena nie obejmuje</h3>
      <ul>
        <li>
          Kosztów karnetów (ok. 600 pln)* Dokładną cenę podamy 2 tygodnie przed
          wyjazdem Wypożyczenia{" "}
        </li>
        <li>
          sprzętu (istnieje możliwość wypożyczenia roweru za dodatkową opłatą i
          wcześniejszą informacją){" "}
        </li>
      </ul>
      <h2>Kontakt</h2>
      <h4>Telefon:</h4> 
      <span id="trip-desc">796210700</span>
      <h4>Email:</h4>
      <span>SzkoleniaRide4Fun@gmail.com</span>
      <h2 >ZAPISY</h2>
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
