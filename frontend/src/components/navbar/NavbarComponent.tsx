import React from 'react';
import './NavbarComponent.scss';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const NavbarComponent: React.FC = ({ }) => {
  return (
        <AppBar color='transparent' className='navbar-main'>
            <Toolbar variant='regular'>
                <div className='logo'>
                    LOGO
                </div>
                <div className='element-nav'>
                    <Link to='/' className='nav-link'>
                        Strona Główna
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