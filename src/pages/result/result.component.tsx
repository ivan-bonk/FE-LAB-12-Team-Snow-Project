import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Logo } from 'shared/components/logo/logo.component';
import { DogSearch } from './components/dog-search/dog-search.component';
import { FilterButton } from './components/filter-button/filter-button.component';
import { Dog } from './components/dog/dog.component';
import { fetchPetsAsync } from 'store/result/actions/result.actions';
import { RootState, ResultProps } from './result.interfaces';
import { PetProfile } from 'shared/interfaces';
import { getFiltredPets } from './utils/filter.util';
import { getUrlFilterValues } from './utils/getUrlValues.util';
import { getNumberOfFilters } from './utils/numberOfFilters.util';
import { LoadingSpinner } from 'shared/components/loading-spinner/loading-spinner';
import { AddPetToCompare } from 'shared/components/add-pet-to-compare/add-pet-to-compare.component';
import {ErrorHandling} from 'shared/components/error-handling/error-handling.component';

import styles from './result.module.scss';

export const Result: React.FC<ResultProps> = props => {
  const [searchedPetsArray, setSearchedPetsArray] = useState<JSX.Element[]>([]);
  const [searchedPetsValue, setSearchedPetsValue] = useState<string>('');
  const storeFilterValues = useSelector((state: RootState) => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPetsAsync.request());
  }, []);

  const pets = useSelector((state: RootState) => state.result.resultStore);
  const errors = !!useSelector((state: RootState) => state.result.errors);
  const filterValues = props.location.search ? getUrlFilterValues(props.location.search) : storeFilterValues;

  const mapArrayOfPets = (petsArray: PetProfile[]): JSX.Element[] => {
    return petsArray.map(pet => {
      return (
        <div key={pet._id}>
          <Dog name={pet.breed} observations={pet.observations} images={pet.imgUrl} id={pet._id} />
          <div className={styles.addPetBtn}>
            <AddPetToCompare id={pet._id} />
          </div>
        </div>
      );
    });
  };

  const handleSearchValue = (searchText: string): void => {
    if (searchText) {
      const filtredPets = getFiltredPets(pets, filterValues).filter(pet =>
        pet.breed.toLowerCase().includes(searchText),
      );

      setSearchedPetsValue(searchText);
      setSearchedPetsArray(mapArrayOfPets(filtredPets));
    } else {
      setSearchedPetsValue(searchText);
    }
  };

  const renderPets = (): JSX.Element[] => {
    const key = 1;

    if (pets.length === 0) {
      return [
        <div key={key}>
          <LoadingSpinner />
        </div>,
      ];
    }
    
    if (errors) {
      return [
        <ErrorHandling/>
      ];
    }

    if (searchedPetsValue) {
      const searchPetsFail = [
        <h4 key={key} className={styles.searchPetsFail}>
          За вашим запитом нічого не знайдено...
        </h4>,
      ];

      return searchedPetsArray.length ? searchedPetsArray : searchPetsFail;
    }

    const petsArray = mapArrayOfPets(getFiltredPets(pets, filterValues));

    return petsArray.length === 0
      ? [
          <h4 key={key} className={styles.searchPetsFail}>
            За вказаним фільтром немає результатів.
          </h4>,
        ]
      : petsArray;
  };

  return (
    <div className={styles.wrapper}>
      <Logo />
      <DogSearch renderPets={handleSearchValue} pets={pets} />
      <FilterButton numberOfFilters={getNumberOfFilters(filterValues)} />
      {renderPets()}
    </div>
  );
};
