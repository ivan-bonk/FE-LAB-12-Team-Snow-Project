import React from 'react';
import { Link } from 'react-router-dom';

import { FilterButtonProps } from './filter-button.interfaces';
import { ROUTES } from 'shared/constants/routes.constants';

import styles from './filter-button.module.scss';

export const FilterButton: React.FC<FilterButtonProps> = props => {
  return (
    <div className={styles.filterButtonContainer}>
      <Link to={ROUTES.filter} className={styles.filterButtonContainer__filterButton}>
        <span className={styles.filterButtonContainer__filterButton__filterButtonText}>
          Застосувати фільтр {props.numberOfFilters}
        </span>
      </Link>
    </div>
  );
};
