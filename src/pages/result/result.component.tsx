import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Logo } from '../../shared/logo/logo.component';
import { DogSearch } from './components/dog-search/dog-search.component';
import { FilterButton } from './components/filter-button/filter-button.component';
import { Dog } from './components/dog/dog.component';
import { fetchPets } from '../../store/result/result.actions';

import './result.styles.css';

type ResultProps<T = any> = {
  name: string;
  type: T;
};

export const Result: React.FC<ResultProps> = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPets());
  }, []);

  return (
    <div className="wrapper">
      <Logo />
      <DogSearch />
      <FilterButton />
      <Dog name="Коргі"/>
      <Dog name="Коргі 2" />
    </div>
  );
};
