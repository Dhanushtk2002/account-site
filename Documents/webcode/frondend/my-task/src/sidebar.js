// Sidebar.js
import React from 'react';
import './sidebar.css'; // Custom CSS

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="nav-item active">
        <span className="icon">🏠</span>
        <span>Home</span>
      </div>
      <div className="nav-item">
        <span className="icon">🌲</span>
        <span>Zra</span>
      </div>
      <div className="nav-item">
        <span className="icon">🛒</span>
        <span>Sales</span>
      </div>
       <div className="nav-item">
        <span className="icon">🛍️</span>
        <span>Purchases</span>
      </div>
       <div className="nav-item">
        <span className="icon">📦</span>
        <span>Products</span>
      </div>
       <div className="nav-item">
        <span className="icon">🏭</span>
        <span>Warehouses</span>
        </div>
         <div className="nav-item">
        <span className="icon">📁</span>
        <span>Projects</span>
      </div> 
      <div className="nav-item">
        <span className="icon">🏦</span>
        <span>Banking</span>
      </div>
       <div className="nav-item">
        <span className="icon">💵</span>
        <span>Loans</span>
      </div>
       <div className="nav-item">
        <span className="icon">👤</span>
        <span>Users</span>
      </div>
       <div className="nav-item">
        <span className="icon">💳</span>
        <span>Payroll</span>
      </div>
       <div className="nav-item">
        <span className="icon">🧾</span>
        <span>Expenses</span>
      </div> 
      <div className="nav-item">
        <span className="icon">💰</span>
        <span>Budget</span>
      </div> 
      <div className="nav-item">
        <span className="icon"> 📈</span>
        <span>Spreadsheet</span>
      </div>
       <div className="nav-item">
        <span className="icon">🗓️</span>
        <span>Agenda</span>
      </div>
       <div className="nav-item">
        <span className="icon">🍽️</span>
        <span>Kitchen</span>
      </div> 
      <div className="nav-item">
        <span className="icon">🏗️</span>
        <span>Fixed Asset</span>
      </div>
       <div className="nav-item">
        <span className="icon">📒</span>
        <span>General Ledger</span>
      </div> 
      <div className="nav-item">
        <span className="icon">🎫</span>
        <span>Ticket</span>
      </div> 
      <div className="nav-item">
        <span className="icon">👨‍💼</span>
        <span>Administrator</span>
      </div> 
      <div className="nav-item">
        <span className="icon">🏭</span>
        <span>Production</span>
      </div> 
      <div className="nav-item">
        <span className="icon">📑</span>
        <span>Reports</span>
      </div>
    </div>
  );
};

export default Sidebar;
