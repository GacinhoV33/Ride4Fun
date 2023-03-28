import React from 'react';
import './styles.scss';

const ContactInfo: React.FC = () => {
  return (
    <div  className='contact-info'>
        <h1>
          Masz jakieś pytania? 
        </h1>
        <div style={{fontSize: '22px'}}>
          Skontaktuj się z nami za pomocą formularza 
        </div>
    </div>
  )
}

export default ContactInfo