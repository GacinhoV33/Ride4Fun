import React, { useEffect } from "react";
import PlaceHolder from "../common/PlaceHolder";
import "./AboutUs.scss";
import { SocialIcon } from "react-social-icons";
import Iframe from "react-iframe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import { responsive } from "../trainings/Trainings";
import "react-multi-carousel/lib/styles.css";

const AboutUs: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
  return (
    <div className="aboutUs-main">
      <PlaceHolder />
      <div className="first-title">
        Jesteśmy Tarnowską ekipą zrzeszającą pasjonatów kolarstwa górskiego
        nastawionych przede wszystkim na czerpaniu jak największej radości{" "}
        <br />z tej wspaniałej rowerowej zajawki.
      </div>

      <img
        src="./images/aboutUs1.jpg"
        alt="aboutUs1"
        className="photo-aboutUs"
      />
      <div className="aboutUs-w-sezonie">
        W sezonie spotkasz nas na trasach, eventach oraz zawodach w całej
        Polsce.
      </div>
      <img
        src="./images/aboutUs2.jpg"
        alt="aboutUs2"
        className="photo-aboutUs"
      />
      <div className="aboutUs-poza-rower">
        Poza rowerowym teamem odpalamy szkolenia z techniki jazdy indywidualne
        oraz grupowe na różnym poziomie zaawansowania.
      </div>
      <img
        src="./images/aboutUs3.jpg"
        alt="aboutUs3"
        className="photo-aboutUs"
      />

      <div className="aboutUs-szkolenia">
        Za szkolenia odpowiedzialny jest założyciel Ride4Fun{" "}
        <b style={{ fontStyle: "italic" }}>Bartosz Wajda</b>.
      </div>
      <div className="aboutUs-jestBartek">
        <b className="jestBartek-strong">Hej! Jestem Bartek.</b> <br />
        <span className="aboutUs-Bartek-text">
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

      <div
        // style={{ width: "90vw", height: "75vh", margin: "4vh" }}
        className="carousel-media carousel-aboutUs"
      >
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          transitionDuration={1500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {carouselItems.map(({ text, src }, index) => (
            <div key={`${src}- ${index}`}>
              <img
                src={src}
                alt={`${src}-${index}-alt`}
                className='carousel-aboutUs-item'
                
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="aboutUs-od5lat">
        Od 5 lat w raz z ekipą Ride4Fun i Stowarzyszeniem Sportowym Sokół Tarnów
        organizuję jedyne downhillowe zawody w okolicy z Cyklu „ Tarnowskie
        ściganki”.
      </div>
      <div className="aboutUs-sprawdz-to">
        Sprawdź jak wyglądały zawody na otwarcie Bike Parku !
      </div>
      <Iframe
        url={`https://www.youtube.com/embed/u-UEgCDADvI`}
        className="iframe-styles"
        title="Youtube-Video"
      />

      <div className="aboutUs-widzac" style={{}}>
        Widząc ogromne zainteresowanie tym miejscem, rosnącą społeczność
        rowerową oraz masę nowych młodych osób chcący zaznać adrenaliny i
        spróbować swoich sił w tej stosunkowo świeżej dyscyplinie postanowiłem
        pomóc wielu osobom bezpiecznie i przede wszystkim świadomie stawiać
        pierwsze kroki w rowerowej ekstremie czego efektem jest Ride4Fun!
      </div>
      
      <div className="footer-about">
        <FontAwesomeIcon icon={faUser} className="footer-user-icon" />
        <span className="footer-title">Sprawdź nasze socjale </span>
        <SocialIcon
          url={"https://www.facebook.com/profile.php?id=100083105601877"}
          target="_blank"
          className="social-icon-aboutUs"
          fgColor="#f2f2f2"
        />
        <SocialIcon
          url={"https://www.instagram.com/szkoleniaride4fun.pl/"}
          target="_blank"
          fgColor="#f2f2f2"
          className="social-icon-aboutUs"
        />
        <SocialIcon
          url={"https://www.youtube.com/channel/UCwR8Nug7AmiUP4W4t5SSJJA"}
          target="_blank"
          fgColor="#f2f2f2"
          className="social-icon-aboutUs"
        />
      </div>
    </div>
  );
};

export default AboutUs;

const carouselItems = [
  { src: "./images/aboutUs/1.jpg", text: "none" },
  { src: "./images/aboutUs/2.jpg", text: " none" },
  { src: "./images/aboutUs/3.jpg", text: " none" },
  { src: "./images/aboutUs/4.jpg", text: " none" },
  { src: "./images/aboutUs/5.jpg", text: " none" },
  { src: "./images/aboutUs/6.jpg", text: " none" },
  { src: "./images/aboutUs/7.jpg", text: " none" },
  { src: "./images/aboutUs/8.jpg", text: " none" },
  { src: "./images/aboutUs/9.jpg", text: " none" },
  { src: "./images/aboutUs/10.jpg", text: " none" },
  { src: "./images/aboutUs/11.jpg", text: " none" },
  { src: "./images/aboutUs/12.jpg", text: " none" },
];
