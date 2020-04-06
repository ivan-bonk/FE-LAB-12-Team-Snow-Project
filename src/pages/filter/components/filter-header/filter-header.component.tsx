import React from 'react';
import Logo from 'images/paw-solid.svg';
import styles from './filter-header.module.scss';

export const FilterHeader: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.filter_logo__container}>
        <img className={styles.filter__logo} src={Logo} alt="pet-logo" />
        <span>МійПес </span>
      </div>
      <h1 className={styles.filter__header}>Фільтр</h1>
    </div>
  );
};
