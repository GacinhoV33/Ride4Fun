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
      {isMobile ? (
        <h3>
          {" "}
          PÓŁKOLONIE NARCIARSKIE I SNOWBOARDOWE W{" "}
          <span style={{ color: "##B70000" }}> TARNOWIE </span> <br /> FERIE PEŁNE
          ZIMOWEJ ZAJAWKI!{" "}
        </h3>
      ) : (
        <h1>
          {" "}
          PÓŁKOLONIE NARCIARSKIE I SNOWBOARDOWE W{" "}
          <span style={{ color: "##B70000" }}> TARNOWIE</span> <br /> FERIE PEŁNE
          ZIMOWEJ ZAJAWKI!{" "}
        </h1>
      )}
      <p>
        Zapraszamy na wyjątkowe półkolonie narciarskie i snowboardowe dla dzieci
        i młodzieży w wieku od 7 do 17 lat! <br /> Nasza zimowa przygoda to
        idealna okazja, aby spędzić aktywnie ferie zimowe na stokach w
        malowniczych ośrodkach narciarskich w Krynicy-Zdroju. Podczas półkolonii
        nasi uczestnicy będą mieli okazję uczyć się i doskonalić swoje
        umiejętności w trzech renomowanych ośrodkach, które oferują doskonałe
        warunki dla narciarzy na każdym poziomie zaawansowania. Pod opieką
        doświadczonych instruktorów oraz wykwalifikowanej kadry wychowawczej,
        dzieci będą mogły rozwijać swoją pasję do sportów zimowych w bezpiecznym
        i przyjaznym otoczeniu a oprócz nowych umiejętności spędzą tydzień na
        wspaniałej zabawie na świeżym powietrzu. W końcu nazwa naszej firmy nie
        wzięła się znikąd! <br />
        Na czym nie jeździmy, zawsze – Ride4FUN!
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: isMobile ? "20px 0" : "40px 0",
        }}
      >
        <img
          src="images/new_main/dziecko_narty.png"
          style={{ width: isMobile ? "95%" : "75%" }}
          // style={{ width: "50%", marginBottom: isMobile ? "-60px" : "-200px" }}
          alt="rider"
        />
      </div>
      <h3>CO OFERUJEMY?</h3>
      <ul>
        <li>
          Codzienne wyjazdy z Tarnowa do ośrodków narciarskich w Krynicy-Zdroju
          (Słotwiny Arena, Master Ski, Tylicz Ski).
        </li>
        <li>
          Profesjonalne szkolenie wykwalifikowanych instruktorów narciarstwa i
          snowboardu SITN, SITS, PZN, MENIS (5 dni x 4,5h szkolenia).
        </li>
        <li>
          Zajęcia dostosowane do poziomu zaawansowania – zarówno dla
          początkujących, jak i zaawansowanych narciarzy i snowboardzistów.
        </li>
        <li>Transport autobusem z Tarnowa na stok oraz z powrotem.</li>
        <li>
          Opieka wykwalifikowanej kadry (opieka na miejscu zbiórki, podczas
          transportu, na stoku w czasie przerwy).
        </li>
        <li>Obiad oraz ciepła herbata na stoku.</li>
        <li>Ubezpieczenie NNW dla każdego uczestnika.</li>
        <li>Fotorelacja z wyjazdu.</li>
        <li>Zawody z nagrodami!</li>
      </ul>
      {/* <div
        style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}
      >
        <img
          src="images/a1.png"
          style={{ width: "50%", marginBottom: isMobile ? "-50px" : "-230px" }}
          alt="rider"
        />
      </div> */}
      <h2>DLACZEGO WARTO WYBRAĆ NASZĄ OFERTĘ? </h2>
      <ul>
        <li>Indywidualne podejście do każdego uczestnika.</li>
        <li>Doświadczona energiczna kadra instruktorska i wychowawcza.</li>
        <li>
          Nauka poprzez zabawę – tworzymy atmosferę sprzyjającą rozwojowi, ale
          też dobrej zabawie i generowaniu fantastycznych wspomnień.
        </li>
        <li>
          Małe grupy – dzięki temu zapewniamy skuteczną i bezpieczną naukę.
        </li>
        <li>
          Brak nudy! – Nie jeździmy 5 dni po stoku z dwoma trasami. Odwiedzimy
          aż trzy lubiane ośrodki narciarskie w okolicy Krynicy z trasami
          dostosowanymi do nauki na każdym poziomie. Oprócz nauki na pewno
          wpadniemy pobawić się na fantastycznym Snowparku w Słotwiny Arena!
        </li>
      </ul>
      {/* <div
        style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}
      >
        <img src="images/a23.jpeg" style={{ width: "100%" }} alt="rider" />
      </div> */}
      {/* <p>
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
      </p> */}
      <h2>KIEDY?</h2>
      <div className="turnus-container">
        <h2 className="turnus-header">Zimowe Ferie 2025</h2>

        <div className="turnus-item">
          <h3>TURNUS I</h3>
          <p>20-24.01.2025 (Pierwszy tydzień ferii małopolskich)</p>
        </div>

        <div className="turnus-item">
          <h3>TURNUS II</h3>
          <p>27-31.01.2025 (Drugi tydzień ferii małopolskich)</p>
        </div>
      </div>
      {/* • 21.09.2024 wyjazd z Polski (trasa
      Tarnów-Kraków-Bielsko-Biała-Saalbach-Hinterglemm <br />• 22-27.09 jazda w
      bikeparkach (jeździmy w Saalbach-Hinterglemm/Leogang/Schladming) wspólna
      integracja, sesyjki na Hopach i sporo jazdy i co najważniejsze wspaniała
      zabawa na rowerze! <br />• 28.09.2024 powrót do Polski (trasa
      Saalbach-Hinterglemm-Bielsko-Biała-Kraków-Tarnów) */}
      <h2>MIEJSCE ZBIÓRKI </h2>
      <p>Parking przy Kościele Św. Gabriela w Tarnowie ul. Gumniska 24.</p>
      <h2>GODZINA ZBIÓRKI/ POWROTU </h2>
      <p>Zbiórka: 7:30 </p>
      <p>Wyjazd z Tarnowa: 7:45</p>
      <p>Szkolenie narciarskie/snowboardowe 10:00-12:30</p>
      <p>Przerwa na ciepły posiłek 12:30-13:00</p>
      <p>Szkolenie narciarskie/snowboardowe 13:00-14:30</p>
      <p>
        Powrót : 16:45* <br />
        <br />
        *Godzina powrotu może ulec zmianie o czym będziemy informować na
        bieżąco.
      </p>
      <h2>CENA</h2>
      <div> 1499 PLN </div>
      <h3 style={{ color: "#F26" }}> CENA NIE ZAWIERA </h3>
      Kosztu karnetów ( ok 500 pln* dokładny koszt podamy gdy poznamy cenniki na
      sezon 2025) , wypożyczenia sprzętu narciarskiego/snowboardowego
      {/* <div
        style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}
      >
        <img src="images/a3.JPG" style={{ width: "75%" }} alt="rider" />
      </div> */}
      <h2>LICZBA MIEJSC </h2>
      <p> 30 </p>
      <p>
        Nie czekaj, zarezerwuj miejsce dla swojego dziecka już dziś! Półkolonie
        narciarskie to gwarancja niezapomnianych wspomnień, nowych przyjaźni i
        oczywiście – ogromnej dawki sportowych emocji!
      </p>
      <h2>ZAPRASZAMY DO ZAPISÓW ORAZ PO WIĘCEJ INFORMACJI</h2>
      {/* <h3>
        Poziom Średniozaawansowany/Zaawansowany <br />
        Minimalny wiek uczestnika 16 lat.
      </h3> */}
      <h2>Tel. </h2>
      <span id="trip-desc">Bartek: +48 796 210 700</span>
      <span id="trip-desc">Justyna: +48 535 933 437</span>
      {/* <h4>Email:</h4>
      <span>szkoleniaride4fun@gmail.com</span> */}
      <h4>Do zobaczenia na stoku!</h4>
      <h2>EKIPA RIDE4FUN</h2>
      <h2 style={{ marginBottom: 0, textAlign: "center" }}>ZAPISY</h2>
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
