import React from 'react';

export const ModalHeader: React.FC = () => {
  return (
    <div className="header">
      <div className="search-logo-container">
        <img className="search-logo" src={require('../../../images/paw-solid.svg')} alt="pet-logo" />
        <span>МійПес </span>
      </div>
      <h1 className="search-header">Фільтр</h1>
    </div>
  );
};
