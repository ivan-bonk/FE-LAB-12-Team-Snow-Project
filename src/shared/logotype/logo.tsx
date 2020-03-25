import React from 'react';
import { Link } from 'react-router-dom';
import './logo.css';

import logo from './logo.svg';
import logo2 from './logo2.svg';

export const Logo = (): React.ReactElement => {
    return (
        <Link to="/">
            <div className="logotype">
                <img src={logo} alt="logo"/>
                <img className="logo" src={logo2} alt="logo"/>
            </div>
        </Link>
    );
};