import React from 'react';
// import Logo from '../../../../images/paw-solid.svg';
import styles from './filter-header.module.scss';
import { Logo } from '../../../../shared/logo/logo.component';

export const FilterHeader: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.filter_logo__container}>
        {/* <img className={styles.filter__logo} src={Logo} alt="pet-logo" /> */}
        <Logo />
        <div className="logo"></div>
        <span>МійПес </span>
      </div>
      <h1 className={styles.filter__header}>Фільтр</h1>
    </div>
  );
};
