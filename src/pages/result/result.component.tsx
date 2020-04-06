import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Logo } from '../../shared/logo/logo.component';
import { DogSearch } from './components/dog-search/dog-search.component';
import { FilterButton } from './components/filter-button/filter-button.component';
import { Dog } from './components/dog/dog.component';
import { fetchPetsAsync } from '../../store/result/actions/result.actions';
import { RootState } from './result.interfaces';
import { PetProfile } from '../../shared/interfaces';
import { getFiltredPets } from './utils/filter.util';

import styles from './result.module.scss';

export const Result: React.FC = () => {
  const [searchedPetsArray, setSearchedPetsArray] = useState<JSX.Element[]>([]);
  const [searchedPetsValue, setSearchedPetsValue] = useState<string>('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPetsAsync.request());
  }, []);

  const pets = useSelector((state: RootState) => state.result.resultStore);
  const filterValues = useSelector((state: RootState) => state.filter);

  const mapArrayOfPets = (petsArray: PetProfile[]): JSX.Element[] => {
    return petsArray.map(pet => <Dog key={pet._id} name={pet.breed} observations={pet.observations} />);
  };

  const handleSearchValue = (searchText: string): void => {
    if (searchText) {
      const filtredPets = getFiltredPets(pets, filterValues).filter(pet =>
        pet.breed.toLowerCase().startsWith(searchText),
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
        <h4 key={key} className={styles.searchPetsFail}>
          Загрузка собачок
        </h4>,
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
      <FilterButton />
      {renderPets()}
    </div>
  );
};
