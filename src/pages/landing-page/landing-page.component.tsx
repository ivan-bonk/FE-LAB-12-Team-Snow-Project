import React from 'react';

import styles from './landing-page.module.scss';

import { FindOut } from './components/find-out/find-out.component';
import { ToPickUp } from './components/to-pick-up/to-pick-up.component';
import { Logo } from 'shared/logo/logo.component';

export const LandinPage: React.FC = () => {
  return (
    <div className={styles.landinPage}>
      <header className={styles.header}>
        <Logo />
      </header>
      <div className={styles.landinPage__container}>
        <FindOut />
        <ToPickUp />
      </div>
    </div>
  );
};
