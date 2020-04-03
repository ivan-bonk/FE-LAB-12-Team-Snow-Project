import React from 'react';
import logo from './logo.svg';
import logo2 from './logo2.svg';
import styles from './petCare-header.module.scss';

export const PetCareHeader: React.FC = () => {
  return (
    <div className={styles.petCare_header}>
      <div className={styles.logo__section}>
        <img className={styles.logo} src={logo} alt="logo" />
        <img className={styles.logo2} src={logo2} alt="logo" />
      </div>
      <h1>На скільки добре ви піклуєтесь про свого собаку</h1>
    </div>
  );
};
