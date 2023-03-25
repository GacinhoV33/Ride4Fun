import React from 'react'

const ContactInfo: React.FC = () => {
  return (
    <div style={{width: '100%', height: '10vh', marginTop: '15vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
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