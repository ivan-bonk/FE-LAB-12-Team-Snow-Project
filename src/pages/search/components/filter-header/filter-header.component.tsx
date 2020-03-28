import React from 'react';
import Logo from '../../../../images/paw-solid.svg';

export const FilterHeader: React.FC = () => {
  return (
    <div className="header">
      <div className="search-logo-container">
        <img className="search-logo" src={Logo} alt="pet-logo" />
        <span>МійПес </span>
      </div>
      <h1 className="search-header">Фільтр</h1>
    </div>
  );
};
