import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Logo } from '../../shared/logo/logo.component';
import { DogSearch } from './components/dog-search/dog-search.component';
import { FilterButton } from './components/filter-button/filter-button.component';
import { Dog } from './components/dog/dog.component';
import { fetchPetsAsync } from '../../store/result/actions/result.actions';
import { RootState, Pet } from './result.interfaces';

import './result.styles.css';

export const Result: React.FC = () => {
  const [searchedPets, setSearchedPets] = useState<JSX.Element[] | string>('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPetsAsync.request());
  }, []);

  const pets = useSelector((state: RootState) => state.resultReducer.data);

  const mapArrayOfPets = (petsArray: Pet[]): JSX.Element[] => {
    return petsArray.map(pet => <Dog key={pet.id} name={pet.name} characteristics={pet.characteristics} />);
  };

  const handleSearchValue = (searchText: string): void => {
    if (!searchText) setSearchedPets(searchText);

    const filtredPets = pets.filter(pet => pet.name.toLowerCase().includes(searchText));

    setSearchedPets(mapArrayOfPets(filtredPets));
  };

  const renderPets = (): string | JSX.Element | JSX.Element[] => {
    if (searchedPets) {
      const searchPetsFail = <h4>За вашим запитом нічого не знайдено...</h4>;

      return searchedPets.length ? searchedPets : searchPetsFail;
    }

    if (pets.length) {
      return mapArrayOfPets(pets);
    }

    return [];
  };

  return (
    <div className="wrapper">
      <Logo />
      <DogSearch renderPets={handleSearchValue} pets={pets} />
      <FilterButton />
      {renderPets()}
    </div>
  );
};
