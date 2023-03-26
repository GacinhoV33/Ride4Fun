import React from "react";
import PlaceHolder from "../common/PlaceHolder";
import "./AboutUs.scss";
import { SocialIcon } from "react-social-icons";
import Iframe from "react-iframe";

const AboutUs: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        background: "rgba(25, 25, 25, 0.95) !important"
      }}
    >
      <PlaceHolder />
      <div
        style={{
          letterSpacing: "0.2rem",
          fontSize: "2.75vh",
          fontWeight: "600",
          marginTop: "3.5vh",
          padding: "2.5vh 15%",
          textAlign: "center",
        }}
      >
        Jesteśmy Tarnowską ekipą zrzeszającą pasjonatów kolarstwa górskiego
        nastawionych przede wszystkim na czerpaniu jak największej radości{" "}
        <br />z tej wspaniałej rowerowej zajawki.
      </div>

      <img
        src="./images/aboutUs1.jpg"
        alt="aboutUs1"
        style={{ height: "65vh" }}
      />
      <div
        style={{
          letterSpacing: "0.2rem",
          fontSize: "3vh",
          fontWeight: "600",
          padding: "2.5% 15%",
        }}
      >
        W sezonie spotkasz nas na trasach, eventach oraz zawodach w całej
        Polsce.
      </div>
      <img
        src="./images/aboutUs2.jpg"
        alt="aboutUs2"
        style={{ height: "65vh" }}
      />
      <div
        style={{
          letterSpacing: "0.2rem",
          fontSize: "2.5vh",
          fontWeight: "600",
          padding: "2.5% 15%",
        }}
      >
        Poza rowerowym teamem odpalamy szkolenia z techniki jazdy indywidualne
        oraz grupowe na różnym poziomie zaawansowania.
      </div>
      <img
        src="./images/aboutUs3.jpg"
        alt="aboutUs3"
        style={{ height: "65vh" }}
      />

      <div style={{ fontSize: "3vh", marginTop: "5vh" }}>
        Za szkolenia odpowiedzialny jest założyciel Ride4Fun{" "}
        <b style={{ fontStyle: "italic" }}>Bartosz Wajda</b>.
      </div>
      <div
        style={{
          textAlign: "left",
          padding: "0 17.5%",
          marginTop: "5vh",
          fontSize: "2vh",
          height: "auto",
        }}
      >
        <b>Hej! Jestem Bartek.</b> <br />
        <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "2.5vh" }}>
          Pasjonuję się kolarstwem górskim od 13 lat. Od kilku lat jestem
          licencjonowanym instruktorem turystyki rowerowej, narciarstwa
          zjazdowego, a na Krakowskim AWF zbierałem niezbędne doświadczenie w
          pracy z dziećmi i młodzieżą. Skutecznie zarażam pasją do gór młodych i
          tych nieco starszych niezależnie czy to zima czy lato! Na Tarnowskiej
          scenie rowerowej działam od wielu lat tworząc trasy i całą
          „grawitacyjną społeczność”. Rok temu wraz z kilkoma zaangażowanymi
          ludźmi udało nam się stworzyć w pełni legalne miejsce do jazdy w
          Tarnowie pod nazwą Bike Park Marcinka.
        </span>
      </div>
      <div style={{display: "flex", gap: '4vw', justifyContent: 'center', height: 'auto', width: '100%'}}>
        <img
        src="./images/aboutUsBartek.jpg"
        alt='aboutus-bartek'
        style={{height: '70vh'}}
        />
        
        <img
         src="./images/aboutUsBartek2.jpg"
         alt='aboutus-bartek'
         style={{height: '70vh'}}
        />

      </div>
      <div  style={{ fontFamily: "'Lato', sans-serif", fontSize: "2.5vh", padding: '0 17.5%', marginTop: '5vh'}}>
        Od 5 lat w raz z ekipą Ride4Fun i Stowarzyszeniem Sportowym Sokół Tarnów
        organizuję jedyne downhillowe zawody w okolicy z Cyklu „ Tarnowskie
        ściganki”.
      </div>
      <div style={{ fontSize: "2.75vh", margin: "5vh 0", fontWeight: "600" }}>
        Sprawdź jak wyglądały zawody na otwarcie Bike Parku !
      </div>
      <Iframe
        url={`https://www.youtube.com/embed/u-UEgCDADvI`}
        className="iframe-styles"
        title="Youtube-Video"
      />

      <div
        style={{
          fontSize: "2.5vh",
          padding: "2% 15%",
          fontFamily: "'Lato', sans-serif",
        }}
      >
        Widząc ogromne zainteresowanie tym miejscem, rosnącą społeczność
        rowerową oraz masę nowych młodych osób chcący zaznać adrenaliny i
        spróbować swoich sił w tej stosunkowo świeżej dyscyplinie postanowiłem
        pomóc wielu osobom bezpiecznie i przede wszystkim świadomie stawiać
        pierwsze kroki w rowerowej ekstremie czego efektem jest Ride4Fun!
      </div>
      <div style={{ height: "10vh", width: "100%" }}>
        <br></br>
        <br />
        <br />
        <br />
      </div>
      <div className="footer-about">
        <span className="footer-title">Sprawdź nasze socjale </span>
        <SocialIcon
          url={"https://www.facebook.com/profile.php?id=100083105601877"}
          target="_blank"
          className="social-icon-aboutUs"
        />
        <SocialIcon
          url={"https://www.instagram.com/wajda_bartekk/"}
          target="_blank"
          className="social-icon-aboutUs"
        />
        <SocialIcon
          url={"https://www.tiktok.com/@marcinn_gortat?lang=pl-PL"}
          target="_blank"
          className="social-icon-aboutUs"
        />
      </div>
    </div>
  );
};

export default AboutUs;
