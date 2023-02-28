import React from 'react'
import FormComponent from './FormComponent';
import ContactInfo from './ContactInfo';
import PlaceHolder from '../common/PlaceHolder';





const Contact: React.FC = () => {
  
  return (
    <div>
        <PlaceHolder/>
        <ContactInfo/>
        <FormComponent/>
    </div>
  )
}

export default Contact;