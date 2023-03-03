import React from 'react';
import PlaceHolder from '../common/PlaceHolder';
import SocialMedia from '../common/SocialMedia';
import './Slides.scss';

export interface FirstSlideProps{

}

const FirstSlide: React.FC<FirstSlideProps> = ({}) => {
  return (
    <div className='slide-first'>
      <PlaceHolder/>
      <div className='social-container'>
        <SocialMedia orientation='row' copyOrientation='down'/>
      </div>
    </div>
  )
}

export default FirstSlide