import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SocialMedia from './SocialMedia'
import {faHandPointRight} from '@fortawesome/free-regular-svg-icons'
const Footer: React.FC = () => {
  return (
    <div className='footer-main'>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <h2>Sprawdź nasze Social Media </h2>
        <FontAwesomeIcon icon={faHandPointRight} style={{margin: '0 10px', height: '4vh'}}/>
      </div>
      <div style={{position: 'relative', width: '9%', height: '90%', marginLeft: '1.5vw'}}>
        <SocialMedia orientation='row'/>
      </div>
        <div>

        </div>
    </div>
  )
}

export default Footer