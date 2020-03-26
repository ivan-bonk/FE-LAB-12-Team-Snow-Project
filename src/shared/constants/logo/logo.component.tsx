import React from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.image.svg';
import logo2 from './logo2.image.svg';

export const Logo: React.FC = (): React.ReactElement => {
    return (
        <Link to="/">
            <div className="logo-container">
                <img src={logo} alt="logo" />
                <img src={logo2} alt="logo2" />
            </div>
        </Link>
    );


};