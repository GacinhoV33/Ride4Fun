import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import {AiOutlineCopy} from 'react-icons/ai';
import Alert from 'react-bootstrap/Alert';

const EMAIL_BARTEK = 'bartosz_wajda@gmail.com'; // #TODO Change

const SocialMedia: React.FC<SocialMediaProps> = ({orientation = 'row'}) => {
  const [showCopyAlert, setShowCopyAlert] = useState<boolean>(false);
  function copyEmailToClipboard(){
    // Do stuff 
    navigator.clipboard.writeText(EMAIL_BARTEK);
    setShowCopyAlert(true);
    setTimeout(() => {
      setShowCopyAlert(false)
    }, 4000);
  }
  
  return (
    <div style={{height: '100%', gap: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', ...{...orientation === 'row' ? {flexDirection: 'row'} : {flexDirection: 'column'}}}}>
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
           <FontAwesomeIcon 
            // color='pink'
            icon={faTiktok} 
            className='icon-social'
            onClick={copyEmailToClipboard}
          /> 
          {showCopyAlert ? 
            <Alert variant='secondary'>
              <AiOutlineCopy size={24}/>
              gacek.filip12@gmail.com copied to the clipboard.
            </Alert> : <div style={{height: '8vh'}}> - </div>} 
    </div>
  )
}

export default SocialMedia;

export type OrientationType = 'row' | 'column';

export interface SocialMediaProps{
  orientation?: OrientationType
};