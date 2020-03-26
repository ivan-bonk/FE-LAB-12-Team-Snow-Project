import React, { useEffect } from 'react';
import { Logo } from '../../shared/logo/logo.component';

import { DogSearch } from './components/dog-search/dog-search.component';
import { FilterButton } from './components/filter-button/filter-button.component';

import './result.styles.css';

type ResultProps<T = any> = {
  name: string;
  type: T;
};

export const Result: React.FC<ResultProps> = props => {
  return (
    <div className="wrapper">
      <Logo />
      <DogSearch />
      <FilterButton />
    </div>
  );
};
