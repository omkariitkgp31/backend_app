import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupModal.css';

const SignupModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleSignupClick = () => {
        onClose();
        navigate('/signup');
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                <h2>Let's get started!</h2>
                <input type="email" placeholder="Enter your email" />
                <button className="email-button" onClick={handleSignupClick}>Sign in with Email</button>
                <div className="divider">
                    <span>OR</span>
                </div>
                <button className="google-button" onClick={handleSignupClick}>
                    <span className="google-icon">G</span> Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default SignupModal;
