import React from 'react';

import styles from './landing-page.module.scss';
import logo from '../../images/paw-solid.svg';

import { FindOut } from './components/find-out/find-out.component';
import { ToPickUp } from './components/to-pick-up/to-pick-up.component';

export const LandinPage: React.FC<{}> = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.header__logo}>
          <img src={logo}></img>
          <span>МійПес</span>
        </div>
      </header>
      <div className={styles.container}>
        <FindOut />
        <ToPickUp />
      </div>
    </div>
  );
};
