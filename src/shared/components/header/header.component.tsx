import React from 'react';
import { Logo } from 'shared/components/logo/logo.component';
import { Navigation } from './components/navigation/navigation.component';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContainer__logo}>
        <Logo />
      </div>
      <Navigation />
    </div>
  );
};
