// frontend/src/components/Header.tsx
import React from 'react';
import logo from '../logo.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} className="header-logo" alt="LTI Logo" />
        <h1 className="header-title">LTI</h1>
      </div>
      <div className="header-right">
        <h2 className="header-subtitle">Recruiter Portal</h2>
      </div>
    </header>
  );
};

export default Header;