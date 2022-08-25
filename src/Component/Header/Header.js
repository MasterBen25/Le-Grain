import React from 'react';
import logo from '../../img/coffee-beans-2.png';
import './Header.css';
import '../../Fonts/fonts.css';

function Header() {
    return (
        <div className="logo-title caveatbold">
            <p>Le Grain</p>
            <img src={logo} alt="logo" />
        </div>
    )
}

export default Header
