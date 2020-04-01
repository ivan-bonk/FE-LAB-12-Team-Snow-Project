import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../shared/constants/routes.constants';

import './filter-button.styles.scss';

export const FilterButton: React.FC = () => {
  return (
    <div className="filter-button-container">
      <Link to={ROUTES.filter} className="filter-button">
        <span className="filter-button-text">Застосувати фільтр</span>
      </Link>
    </div>
  );
};
