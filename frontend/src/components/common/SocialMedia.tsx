import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import {AiOutlineCopy} from 'react-icons/ai';
import Alert from 'react-bootstrap/Alert';

const EMAIL_BARTEK = 'bartosz_wajda@gmail.com'; // #TODO Change

const SocialMedia: React.FC<SocialMediaProps> = ({orientation = 'row', copyOrientation='up'}) => {
  const [showCopyAlert, setShowCopyAlert] = useState<boolean>(false);
  function copyEmailToClipboard(){
    // Do stuff 
    navigator.clipboard.writeText(EMAIL_BARTEK);
    setShowCopyAlert(true);
    setTimeout(() => {
      setShowCopyAlert(false)
    }, 7000);
  }
  
  return (
    <div style={{height: '100%', width: '100%', gap: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', ...{...orientation === 'row' ? {flexDirection: 'row'} : {flexDirection: 'column'}}}}>
        <FontAwesomeIcon 
            icon={faGoogle} 
            className='icon-social'
            onClick={copyEmailToClipboard}
          /> 
          <FontAwesomeIcon 
            icon={faFacebook} 
            className='icon-social'
            onClick={copyEmailToClipboard}
          /> 
           <FontAwesomeIcon 
            icon={faInstagram} 
            className='icon-social'
            onClick={copyEmailToClipboard}
          /> 
          {showCopyAlert ? 
            <Alert variant='secondary' style={{position: 'absolute', textAlign: 'center', ...{...copyOrientation === 'up' ? {bottom: '100%'} : {top: '70%'}}}}>
              <h4>Adres gacek.filip12@gmail.com został skopiowany do schowka.</h4>
            </Alert> : null} 
    </div>
  )
}

export default SocialMedia;

export type OrientationType = 'row' | 'column';
export type CopyOrientationType = 'down' | 'up'
export interface SocialMediaProps{
  orientation?: OrientationType
  copyOrientation?: CopyOrientationType
};