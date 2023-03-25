import React from "react";
import FormComponent from "./FormComponent";
import ContactInfo from "./ContactInfo";
import PlaceHolder from "../common/PlaceHolder";
import "./styles.scss";
import { SocialIcon } from "react-social-icons";

const Contact: React.FC = () => {
  return (
    <React.Fragment>
      {/* <PlaceHolder/> */}
      <div className="contact">
        <ContactInfo />
        <FormComponent />
        <div style={{ textAlign: "center" }}>
          Lub zadzwoń na numer: <span style={{fontFamily: "'Lato', sans-serif", fontWeight: 800}}>+48 796 210 700</span> <br />
        </div>
        <div style={{textAlign: 'center', marginTop: '2.5vh'}}>Albo napisz na mail: <span style={{fontFamily: "'Lato', sans-serif", fontWeight: 800}}>SzkoleniaRide4Fun@gmail.com</span> </div>
        <img
          className="logo-first-slide"
          src={"./images/Logo_biale.png"}
          alt="logo"
        />
        <div className='socials'>
          <SocialIcon url={'https://www.facebook.com/profile.php?id=100083105601877'} target='_blank' className="social-icon-aboutUs"/>
            <SocialIcon url={'https://www.instagram.com/szkoleniaride4fun.pl/'} target='_blank' className="social-icon-aboutUs"/>
            <SocialIcon url={'https://www.youtube.com/channel/UCwR8Nug7AmiUP4W4t5SSJJA'} target='_blank' className="social-icon-aboutUs"/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
