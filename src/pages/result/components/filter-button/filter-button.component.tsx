import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/constants/routes.constants';

import styles from './filter-button.module.scss';

export const FilterButton: React.FC = () => {
  return (
    <div className={styles.filterButtonContainer}>
      <Link to={ROUTES.filter} className={styles.filterButtonContainer__filterButton}>
        <span className={styles.filterButtonContainer__filterButton__filterButtonText}>Застосувати фільтр</span>
      </Link>
    </div>
  );
};
