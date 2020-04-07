import React from 'react';
import { Logo } from '../../logo/logo.component';
import { Navigation } from './navigation/navigation.component';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <Navigation />
    </div>
  );
};
