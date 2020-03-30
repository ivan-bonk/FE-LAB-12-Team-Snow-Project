import React from 'react';
import Logo from '../../../../images/paw-solid.svg';

export const FilterHeader: React.FC = () => {
  return (
    <div className="header">
      <div className="filter-logo-container">
        <img className="filter-logo" src={Logo} alt="pet-logo" />
        <span>МійПес </span>
      </div>
      <h1 className="filter-header">Фільтр</h1>
    </div>
  );
};
