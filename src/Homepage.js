import React, { useState } from 'react';
import Header from './Header';
import Topfold from './Topfold';
import SignupModal from './SignupModal';
import './Homepage.css';

const Homepage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="homepage">
            <Header onOpenModal={handleOpenModal} />
            <Topfold onOpenModal={handleOpenModal} />
            <SignupModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default Homepage;
