import React from 'react';
import './navbar.css';
import { FaBars, FaBell, FaCog, FaCalendarAlt, FaTh, FaRedo, FaMapMarkerAlt, FaKeyboard } from 'react-icons/fa';
import { MdOutlineLightbulb } from 'react-icons/md';

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="left-section">
        <img src="https://via.placeholder.com/40x40?text=🗂️" alt="No Image" />
        <FaBars className="icon" />
      </div>

      <div className="right-section">
        <FaKeyboard className="icon" />
        <FaMapMarkerAlt className="icon" />
        <FaCog className="icon" />
        <FaCalendarAlt className="icon" />
        <FaTh className="icon" />
        <div className="icon notification">
          <FaBell />
          <span className="badge">1</span>
        </div>
        <FaRedo className="icon" />
        <img
          src="https://via.placeholder.com/32/7B61FF/FFFFFF?text=VA"
          alt="User"
          className="profile-icon"
        />
      </div>
    </div>
  );
};

export default TopNavbar;
