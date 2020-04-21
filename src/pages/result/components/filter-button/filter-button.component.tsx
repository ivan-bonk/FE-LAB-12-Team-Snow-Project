import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FilterButtonProps } from './filter-button.interfaces';
import { ROUTES } from 'shared/constants/routes.constants';
import { filterAction } from 'store/filter/actions/filter.action';

import styles from './filter-button.module.scss';

export const FilterButton: React.FC<FilterButtonProps> = props => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onDivClick = () => {
    if (props.numberOfFilters) {
      dispatch(filterAction(null));

      history.push(ROUTES.result);
    }
  };

  const renderButtons = () => {
    if (props.numberOfFilters) {
      return (
        <>
          <Link to={ROUTES.filter} className={`${styles.filterButtonsContainer__filterButton} ${styles.button}`}>
            <span className={styles.buttonText}>Застосувати фільтр {props.numberOfFilters}</span>
          </Link>
          <div className={`${styles.filterButtonsContainer__clearFilterButton} ${styles.button}`} onClick={onDivClick}>
            <span className={styles.buttonText}>Скинути фільтр</span>
          </div>
        </>
      );
    } else {
      return (
        <Link to={ROUTES.filter} className={`${styles.filterButtonsContainer__filterButton} ${styles.button}`}>
          <span className={styles.buttonText}>Застосувати фільтр {props.numberOfFilters}</span>
        </Link>
      );
    }
  };

  return <div className={styles.filterButtonsContainer}>{renderButtons()}</div>;
};
