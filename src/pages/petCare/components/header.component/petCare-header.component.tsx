import React from 'react';
import logo from './logo.svg';
import logo2 from './logo2.svg';
import styles from './petCare-header.module.scss';

export const PetCareHeader: React.FC = () => {
  return (
    <div className={styles.petCareHeader}>
      <div className={styles.logoSection}>
        <img className={styles.logoSection__logo} src={logo} alt="logo" />
        <img className={styles.logoSection__logo2} src={logo2} alt="logo" />
      </div>
      <h1 className={styles.petCareHeader__title}>На скільки добре ви піклуєтесь про свого собаку</h1>
    </div>
  );
};
