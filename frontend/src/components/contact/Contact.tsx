import React from 'react'
import FormComponent from './FormComponent';
import ContactInfo from './ContactInfo';
import PlaceHolder from '../common/PlaceHolder';
import './styles.scss';




const Contact: React.FC = () => {
  
  return (
    <React.Fragment>
      {/* <PlaceHolder/> */}
      <div  className='contact'>
        <ContactInfo/>
        <FormComponent/>
      </div>
    </React.Fragment>
    
  )
}

export default Contact;