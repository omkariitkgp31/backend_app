import React from 'react';
import './Topfold.css';
import carImage from './assets/images/image-car.png';

const Topfold = ({ onOpenModal }) => {
    return (
        <div className="topfold-container">
            <div className="topfold-inner">
                <div className="topfold-image">
                    <img src={carImage} alt="Eyebrow model" />
                </div>
                <div className="topfold-textbox">
                    <h2>WE CHANGE THE WORLD</h2>
                    <h2 className="highlight">ONE EYEBROW</h2>
                    <h2>AT A TIME</h2>
                    <button onClick={onOpenModal} className="topfold-link">
                        Book an Appointment →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Topfold;
