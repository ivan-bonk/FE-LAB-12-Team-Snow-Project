import React from 'react';
import { Link } from 'react-router-dom';

import './filter-button.styles.scss';

export const FilterButton: React.FC = () => {
  return (
    <div className="filter-button-container">
      <Link to="/search" className="filter-button">
        <span className="filter-button-text">Застосувати фільтр</span>
      </Link>
    </div>
  );
};
