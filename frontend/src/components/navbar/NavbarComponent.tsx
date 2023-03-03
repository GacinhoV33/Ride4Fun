import React from 'react';
import './NavbarComponent.scss';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const NavbarComponent: React.FC = ({ }) => {
  return (
        <AppBar color='transparent' className='navbar-main'>
            <Toolbar variant='regular'>
                <div className='logo'>
                    <img src={require('../../images/Logo_czarne.png')} alt='logo_navbar' style={{height: '6vw', width: '6vw'}}/>
                </div>
                <div className='element-nav'>
                    <Link to='/' className='nav-link'>
                        Strona Główna
                    </Link>
                </div>
                <div className='element-nav'>
                    <Link to='/trainings' className='nav-link'>
                        Szkolenia
                    </Link>
                </div>
                <div className='element-nav'>
                    <Link to='/about' className='nav-link'>
                        O nas
                    </Link>
                </div>
                <div className='element-nav'>
                    <Link to='/contact' className='nav-link'>
                        Kontakt
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
  )
}

export default NavbarComponent;