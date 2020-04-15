import React from 'react';
import styles from './filter-header.module.scss';

export const FilterHeader: React.FC = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.filter__header}>Фільтр</h1>
    </div>
  );
};
