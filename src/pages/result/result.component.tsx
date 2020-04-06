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

import { AddPetToCompare } from '../../shared/components/add-pet-to-compare/add-pet-to-compare.component';

import styles from './result.module.scss';

export const Result: React.FC = () => {
  const [searchedPetsArray, setSearchedPetsArray] = useState<JSX.Element[]>([]);
  const [searchedPetsValue, setSearchedPetsValue] = useState<string>('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPetsAsync.request());
  }, []);

  const pets = useSelector((state: RootState) => state.result.resultStore);

  // Hardcoded values for filter
  const filterValues: FilterValues = {
    carePrice: '1000',
    price: 'any',
  };

  const mapArrayOfPets = (petsArray: PetProfile[]): JSX.Element[] => {
    return petsArray.map(pet => {
      return (
        <>
          <Dog key={pet._id} name={pet.breed} observations={pet.observations} />
          <AddPetToCompare id={pet._id}/>
        </>
      );
    });
  };

  const handleSearchValue = (searchText: string): void => {
    if (searchText) {
      const filtredPets = pets.filter(pet => pet.breed.toLowerCase().includes(searchText));

      setSearchedPetsValue(searchText);
      setSearchedPetsArray(mapArrayOfPets(filtredPets));
    } else {
      setSearchedPetsValue(searchText);
    }
  };

  const renderPets = (): JSX.Element[] => {
    if (searchedPetsValue) {
      const key = 1;
      //This array doesn't change, it has permanent state, so i desided to use hardcoded key value
      //I'll remove this commend in next Pull Request
      const searchPetsFail = [<h4 key={key}>За вашим запитом нічого не знайдено...</h4>];

      return searchedPetsArray.length ? searchedPetsArray : searchPetsFail;
    }

    if (Object.keys(filterValues).length) {
      return mapArrayOfPets(getFiltredPets(pets, filterValues));
    }

    return mapArrayOfPets(pets);
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
