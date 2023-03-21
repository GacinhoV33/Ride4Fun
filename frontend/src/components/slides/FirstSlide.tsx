import React from 'react';
import { Link } from 'react-router-dom';
import PlaceHolder from '../common/PlaceHolder';
import SocialMedia from '../common/SocialMedia';
import './Slides.scss';

export interface FirstSlideProps{

}

const FirstSlide: React.FC<FirstSlideProps> = ({}) => {
  return (
    <div className='slide-first'>
      <div style={{position: 'absolute', left: '12vw', top: '15vh'}}>
          <img src={'./images/Logo_biale.png'} alt='logo' style={{width: '50vh', height: '50vh'}}/>
      </div>
      <div style={{fontSize: '7vh', color: '#eee', fontWeight: 800, marginTop: '20vh', marginRight: '25vw', textAlign: 'right', lineHeight: '7.3vh', letterSpacing: '0.4vh'}}>
        SZKOLENIA <br/>ROWEROWE
      </div>
      <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '3vh', gap: '1.5vw', marginRight: '15vw'}}>
        <Link to='/' style={{textDecoration: 'none'}}>
          <div className='navs'>
            SZKÓŁKA R4F ACADEMY
          </div>
        </Link>
        <Link to='/' style={{textDecoration: 'none'}}>
          <div className='navs'>
            WYJAZDY
          </div>
        </Link>
        <Link to='/' style={{textDecoration: 'none'}}>
          <div className='navs'>
            PÓŁKOLONIE
          </div>
        </Link>
      </div>
      {/* <PlaceHolder/>
      <div className='social-container'>
        <SocialMedia orientation='row' copyOrientation='down'/>
      </div> */}
    </div>
  )
}

export default FirstSlide