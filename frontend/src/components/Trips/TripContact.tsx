import React, { useRef, useState } from 'react'
import * as yup from 'yup';
import { Formik } from 'formik';
import { Box, Button, TextField } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import emailjs from '@emailjs/browser';
import SendAlert from '../contact/SendAlert';

export interface TripContactProps{
    initialValues: any,
}

const TripContact: React.FC<TripContactProps> = ({initialValues}) => {
    
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [isSuccess, setSuccess] = useState<boolean>(false);
    const isNonMobile = useMediaQuery("(min-width: 600px");
    const form = useRef();
    function handleSubmit(success: boolean, error: any = null){
        if(success){
            setSuccess(true);
        }else{
            setSuccess(false);
            if(error){
                console.log("error")
            }
        }
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 10000);
    }
    
    const sendEmail = (e: UserData) => {
        //@ts-ignore
        emailjs.sendForm('service_77bl8zu', 'template_l6itr04', form.current, '9Pv7XQijLGFDF5Ob_').then((result) => {
              result.text == 'OK' ? handleSubmit(true) : handleSubmit(false);
          }, (error) => {
            console.log(error);
                handleSubmit(false);
          });
      };
    
      return (
        <Box  className='trainings-contact'>
            {showAlert && <SendAlert setShowAlert={setShowAlert} success={isSuccess}/>}
            <Box className='contact-content'>
                <Formik onSubmit={sendEmail} initialValues={initialValues} validationSchema={userSchema} enableReinitialize={true}>
                    {({values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                        //@ts-ignore
                        <form onSubmit={handleSubmit} ref={form}>
                            <Box display='grid' gap='30px' gridTemplateColumns='repeat(4, minmax(0, 1fr)' sx={{"& > div" : {gridColumn: isNonMobile ? undefined : "span 4"}}}>
                                <TextField fullWidth variant='filled' type='text' label='Imie uczestnika' onBlur={handleBlur} onChange={handleChange} value={values.firstName} name='firstName' error={!!touched.firstName && !!errors.firstName} helperText={touched.firstName && errors.firstName} sx={{gridColumn: 'span 2'}}/>
                                <TextField fullWidth variant='filled' type='text' label='Nazwisko uczestnika' onBlur={handleBlur} onChange={handleChange} value={values.lastName} name='lastName' error={!!touched.lastName && !!errors.lastName} helperText={touched.lastName && errors.lastName} sx={{gridColumn: 'span 2'}}/>
                                <TextField fullWidth variant='filled' type='text' label='Telefon kontaktowy' onBlur={handleBlur} onChange={handleChange} value={values.contact} name='contact' error={!!touched.contact && !!errors.contact} helperText={touched.contact && errors.contact} sx={{gridColumn: 'span 1'}}/>
                                <TextField fullWidth variant='filled' type='text' label='Wiek' onBlur={handleBlur} onChange={handleChange} name='age' value={values.age} sx={{gridColumn: 'span 1'}} error={!!touched.age && !!errors.age} helperText={touched.age && errors.age}/>
                                <TextField fullWidth variant='filled' type='text' label='Email' onBlur={handleBlur} onChange={handleChange} name='email' value={values.email} sx={{gridColumn: 'span 2'}} error={!!touched.email && !!errors.email} helperText={touched.email && errors.email}/>
                                <TextField fullWidth variant='filled' type='text' label='Miejsce Wyjazdu' onBlur={handleBlur} onChange={handleChange} name='tripDestination' value={values.tripDestination} sx={{gridColumn: 'span 1'}} error={!!touched.tripDestination && !!errors.tripDestination} helperText={touched.tripDestination && errors.tripDestination}/>
                                <TextField fullWidth variant='filled' type='text' label='Data' onBlur={handleBlur} onChange={handleChange} name='tripDate' value={values.tripDate} sx={{gridColumn: 'span 1 '}} error={!!touched.tripDate && !!errors.tripDate} helperText={touched.tripDate && errors.tripDate}/>

                            </Box>
                            <Box display='flex' justifyContent='end' mt='20px'>
                                <Button type='submit' color='secondary' variant='contained'>
                                    Wyślij
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box>
        </Box>
      )
    }
    
    export default TripContact;
    
    
    export type UserData  = {
        firstName: string;
        lastName: string; 
        contact: string;
        tripDestination: string;
        age: string;
        tripDate: string;
        email: string;
    }
      
      const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
      
      const userSchema = yup.object().shape({
        firstName: yup.string().required("Wymagane"),
        lastName: yup.string().required("Wymagane"),
        contact: yup.string().matches(phoneRegExp, "Nieprawidłowy numer").required('Wymagane'), //Regex validation and required
        age: yup.string().required('Wymagane'),
        tripDestination: yup.string().required("Wymagane"),
        tripDate: yup.string().required("Wymagane"), // TODO regex for correct date
        email: yup.string().email("Nieprawidłowy email").required("Podaj swój e-mail"),
    })
      

