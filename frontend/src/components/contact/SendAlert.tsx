import React from 'react'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const SendAlert: React.FC<SendAlertProps> = ({setShowAlert, success}) => {
  
    return (
    <Stack sx={{ width: '80%' }} spacing={2}>
        {success ? 
        <Alert onClose={() => {}}> Wiadomość została przesłana do naszych pracowników. Skontaktujemy się z tobą w ciągu najbliższych godzin.</Alert>
        : 
        <Alert onClose={() => {}} severity="error"> Wysyłanie wiadomości nie powiodło się. Spróbuj wysłać wiadomość ponownie lub uzupełnić brakujące pola.</Alert>
        }
        
    </Stack>
  )
}

export default SendAlert;

export interface SendAlertProps{
    setShowAlert: React.Dispatch<React.SetStateAction<boolean>>,
    success: boolean, 
}