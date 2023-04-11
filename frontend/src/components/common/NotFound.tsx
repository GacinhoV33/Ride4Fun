import { useMediaQuery } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    const tabs = ['Strona Główna', 'Szkolenia', 'Kontakt', 'O nas']
    const isNonMobile = useMediaQuery("(min-width: 700px");

  return (
    <div style={{width: '99vw', height: '100vh', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column'}}>
        {isNonMobile ? <h1> Przepraszamy za problem, nie znaleziono witryny. <br/>Przejdź do innej zakładki:</h1>  : <h3> Przepraszamy za problem, <br/> nie znaleziono witryny. <br/>Przejdź do innej zakładki:</h3>}
        {['/', 'szkolenia', 'oNas', 'kontakt'].map((item, index)=> (
            <Link to={item} style={{textAlign: 'left', textDecoration: 'none', color: '#392'}}>

                <h2>{tabs[index]}<br/></h2> 
            </Link>
        ))}
    </div>
  )
}

export default NotFound