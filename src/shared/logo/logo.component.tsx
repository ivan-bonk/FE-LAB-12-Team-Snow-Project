import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes.constants';

import logo from 'images/Logo/logo.image.svg';
import logo2 from 'images/Logo/logo2.image.svg';

import styles from './logo.module.scss';

export const Logo: React.FC = (): React.ReactElement => {
  return (
    <Link to={ROUTES.home}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" />
        <img src={logo2} className={styles.logoContainer__logo2} alt="logo2" />
      </div>
    </Link>
  );
};
