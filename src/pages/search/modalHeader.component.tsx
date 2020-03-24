import React from 'react';

export const ModalHeader: React.FC = () => {
  return (
    <div>
      <div className="search-logo-container">
        <img className="search-logo" src="/" alt="pet-logo" />
        <span>МійПес </span>
      </div>
      <h1 className="search-header">Фільтр</h1>
    </div>
  );
};
