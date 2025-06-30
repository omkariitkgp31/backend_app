import React from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import './Dashboard.css';

const Dashboard = () => {
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

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Welcome, {currentUser?.displayName || 'User'}!</h1>
          <p>You are successfully signed in.</p>
        </div>
        
        <div className="user-info">
          <div className="user-avatar">
            {currentUser?.photoURL ? (
              <img src={currentUser.photoURL} alt="Profile" />
            ) : (
              <div className="avatar-placeholder">
                {currentUser?.displayName?.charAt(0) || 'U'}
              </div>
            )}
          </div>
          
          <div className="user-details">
            <h3>Account Information</h3>
            <p><strong>Name:</strong> {currentUser?.displayName || 'Not provided'}</p>
            <p><strong>Email:</strong> {currentUser?.email || 'Not provided'}</p>
            <p><strong>Account Created:</strong> {currentUser?.metadata?.creationTime ? new Date(currentUser.metadata.creationTime).toLocaleDateString() : 'Unknown'}</p>
          </div>
        </div>

        <div className="dashboard-actions">
          <button className="logout-button" onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 