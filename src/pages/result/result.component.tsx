import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Logo } from '../../shared/logo/logo.component';
import { DogSearch } from './components/dog-search/dog-search.component';
import { FilterButton } from './components/filter-button/filter-button.component';
import { Dog } from './components/dog/dog.component';
import { fetchPetsAsync } from '../../store/result/actions/result.actions';
import { RootState } from './result.interfaces';
import { PetProfile } from '../../shared/interfaces';
import { FilterValues } from './result.interfaces';
import { getFiltredPets } from './utils/filter.util';

import styles from './result.module.scss';

export const Result: React.FC = () => {
  const [searchedPets, setSearchedPets] = useState<JSX.Element[] | string>('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPetsAsync.request());
  }, []);

  const pets = useSelector((state: RootState) => state.result.resultStore);

  // Hardcoden values for filter
  const filterValues: FilterValues = {
    carePrice: '1000',
    price: 'any',
  };

  const mapArrayOfPets = (petsArray: PetProfile[]): JSX.Element[] => {
    return petsArray.map(pet => <Dog key={pet._id} name={pet.breed} observations={pet.observations} />);
  };

  const handleSearchValue = (searchText: string): void => {
    if (!searchText) setSearchedPets(searchText);

    const filtredPets = pets.filter(pet => pet.breed.toLowerCase().includes(searchText));

    setSearchedPets(mapArrayOfPets(filtredPets));
  };

  const renderPets = (): string | JSX.Element | JSX.Element[] => {
    if (searchedPets) {
      const searchPetsFail = <h4>За вашим запитом нічого не знайдено...</h4>;

      return searchedPets.length ? searchedPets : searchPetsFail;
    }

    if (Object.keys(filterValues).length) {
      return mapArrayOfPets(getFiltredPets(pets, filterValues));
    } else if (pets.length) {
      return mapArrayOfPets(pets);
    }

    return '';
  };

  return (
    <div className={styles.wrapper}>
      <Logo />
      <DogSearch renderPets={handleSearchValue} pets={pets} />
      <FilterButton />
      {renderPets()}
    </div>
  );
};
