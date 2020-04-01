import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import logo2 from './logo2.svg';
import './logo.css';

export const Logo: React.FC<{}> = () => {
  return (
    <Link to="/">
      <div className="logo">
        <img src={logo} alt="logo" />
        <img src={logo2} alt="logo" />
      </div>
    </Link>
  );
};
