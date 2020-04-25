import React from 'react';
import { Logo } from 'shared/components/logo/logo.component';
import { Navigation } from './components/navigation/navigation.component';
import { useSelector } from 'react-redux';
import { RootState } from './components/navigation/navigation.interfaces';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  const isMenuOn = useSelector((state: RootState) => state.menu.menuOn);
  const logoStyle = isMenuOn ? styles.headerContainer__logo_hiden : styles.headerContainer__logo;
  return (
    <div className={styles.headerContainer}>
      <div className={logoStyle}>
        <Logo />
      </div>
      <Navigation />
    </div>
  );
};
