import React from 'react';

import { PetsSearch } from './dog-search.interfaces';

import './dog-search.styles.scss';

export const DogSearch: React.FC<PetsSearch> = props => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    props.renderPets(e.target.value.toLowerCase());
  };

  return (
    <div className="search-container">
      <h2 className="searh-header">Знайти</h2>
      <input type="text" className="search-input" placeholder="Мопс..." onChange={onInputChange} />
    </div>
  );
};
