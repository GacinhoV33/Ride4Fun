import React, { useRef } from 'react'
import * as yup from 'yup';
import { Formik } from 'formik';
import { Box, Button, TextField } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import emailjs from '@emailjs/browser';

export type UserData  = {
    firstName: string;
    lastName: string; 
    email: string;
    contact: string;
    message: string;
}

const initialValues: UserData = {
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    message: ' '
  }
  
  const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  
  const userSchema = yup.object().shape({
    firstName: yup.string().required("Wymagane"),
    lastName: yup.string().required("Wymagane"),
    email: yup.string().email("Nieprawidłowy email").required("Wymagane"),  // email validation is build-in yup
    contact: yup.string().matches(phoneRegExp, "Nieprawidłowy numer").required("Wymagane"), //Regex validation and required
    message: yup.string()
  })
  

// const client = new SMTPClient({
//     user: process.env.REACT_APP_USER,
//     password: process.env.REACT_APP_PASSWORD,
//     host: process.env.REACT_APP_HOST,
//     ssl: true,
// })
// 
// const client = new SMTPClient({
//     user: "master_of_volley@tlen.pl",
//     password: "mining23",
//     host: "smtp.your-email.com",
//     ssl: true,
// })

const FormComponent: React.FC = () => {

const isNonMobile = useMediaQuery("(min-width: 600px");
// const handleFormSubmit = (e: any) => {
//     e.preventDefault();
//     // Here we handle submit form submitions
//     // Validating - Adding to Database - Response with success/failure
//     sendEmail(e);
//     // console.log(values);
// }
const form = useRef();

function handleSubmit(success: boolean, error: any = null){
    if(success){
        console.log("It's success");
    }else{
        console.log("It's not success");
        if(error){
            console.log("error")
        }
    }
}

const sendEmail = (e: UserData) => {
    //@ts-ignore
    emailjs.sendForm('service_vpzn6cc', 'template_4c2k2il', form.current, 'wgvECPZIuSzFYwy-j').then((result) => {
          result.text == 'OK' ? handleSubmit(true) : handleSubmit(false);
      }, (error) => {
            handleSubmit(false);
      });
  };

  return (
    <Box width='100vw' display='flex' justifyContent='center'>
        <Box m='20px' width='50%' >
            <Formik onSubmit={sendEmail} initialValues={initialValues} validationSchema={userSchema}>
                {({values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                    //@ts-ignore
                    <form onSubmit={handleSubmit} ref={form}>
                        <Box display='grid' gap='30px' gridTemplateColumns='repeat(4, minmax(0, 1fr)' sx={{"& > div" : {gridColumn: isNonMobile ? undefined : "span 4"}}}>
                            <TextField fullWidth variant='filled' type='text' label='Imie' onBlur={handleBlur} onChange={handleChange} value={values.firstName} name='firstName' error={!!touched.firstName && !!errors.firstName} helperText={touched.firstName && errors.firstName} sx={{gridColumn: 'span 2'}}/>
                            <TextField fullWidth variant='filled' type='text' label='Nazwisko' onBlur={handleBlur} onChange={handleChange} value={values.lastName} name='lastName' error={!!touched.lastName && !!errors.lastName} helperText={touched.lastName && errors.lastName} sx={{gridColumn: 'span 2'}}/>
                            <TextField fullWidth variant='filled' type='text' label='Email' onBlur={handleBlur} onChange={handleChange} value={values.email} name='email' error={!!touched.email && !!errors.email} helperText={touched.email && errors.email} sx={{gridColumn: 'span 4'}}/>
                            <TextField fullWidth variant='filled' type='text' label='Numer Telefonu' onBlur={handleBlur} onChange={handleChange} value={values.contact} name='contact' error={!!touched.contact && !!errors.contact} helperText={touched.contact && errors.contact} sx={{gridColumn: 'span 4'}}/>
                            <TextField fullWidth variant='filled' type='text' label='Wiadomość' onBlur={handleBlur} onChange={handleChange} name='message' sx={{gridColumn: 'span 4'}}/>

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

export default FormComponent