import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Header.css';
import logo from './assets/images/image-cat.png';

const Header = ({ onOpenModal }) => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.error('Failed to log out:', error);
        }
    };

    const handleAuthClick = () => {
        if (currentUser) {
            navigate('/dashboard');
        } else {
            onOpenModal();
        }
    };

    return (
        <header className="header-container">
            <div className="header-inner">
                <div className="header-logo" onClick={() => navigate('/')}>
                    <img src={logo} alt="BRW Bar Logo" />
                </div>
                <nav className="header-nav">
                    <a href="#about">About</a>
                    <a href="#treatments">Treatments</a>
                    <a href="#packages">Packages</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className="header-actions">
                    {currentUser ? (
                        <>
                            <button onClick={() => navigate('/dashboard')} className="header-login">
                                Dashboard
                            </button>
                            <button onClick={handleLogout} className="header-logout">
                                Log Out
                            </button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => navigate('/signin')} className="header-signin">Sign In</button>
                            <button onClick={handleAuthClick} className="header-login">Log In</button>
                        </>
                    )}
                    <div className="header-cart">
                        🛒<span className="cart-count">0</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
