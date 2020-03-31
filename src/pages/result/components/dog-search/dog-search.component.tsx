import React from 'react';

import { Pet } from '../../result.interfaces';

import './dog-search.styles.css';

interface PetsSearch {
  renderPets: (searchString: string) => void;
  pets: Array<Pet>;
}

export const DogSearch: React.FC<PetsSearch> = props => {
  // const [searchValue, setSearchValue] = useState('');
  // const initialPetsArray = props.pets;

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
