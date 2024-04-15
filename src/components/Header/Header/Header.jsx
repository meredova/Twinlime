import React from 'react';
import Navbar from '../../Navbar/Navbar';
import './Header.css';
import logo from '../../../assets/chromeIcon.svg';

const Header = () => {
    
    return (
         <header className="header">
            <div className="header__logo">
                <a href=".#"><img src={logo} alt="Logo"/></a>
                <div className="logo__text">TWIN<span>LIME</span></div>
            </div>
            <Navbar/>
            <div className="header__lang">
                EN | <span>RU</span> | TM
            </div>
        </header>
    )
}

export default Header;