import React from 'react';
import './Header.css';
import logo from './assets/images/image-cat.png';

const Header = ({ onOpenModal }) => {
    return (
        <header className="header-container">
            <div className="header-inner">
                <div className="header-logo">
                    <img src={logo} alt="BRW Bar Logo" />
                </div>
                <nav className="header-nav">
                    <a href="#about">About</a>
                    <a href="#treatments">Treatments</a>
                    <a href="#packages">Packages</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className="header-actions">
                    <button onClick={onOpenModal} className="header-login">Log In</button>
                    <div className="header-cart">
                        🛒<span className="cart-count">0</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
