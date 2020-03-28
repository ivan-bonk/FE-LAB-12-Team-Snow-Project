import React from 'react';
import { FilterHeader } from './components/filter-header/filter-header.component';
import { FilterBody } from './components/filter-body/filter-body.component';
import './filter.css';

export const Filter: React.FC = () => {
  return (
    <div className="search-modal">
      <FilterHeader />
      <FilterBody />
    </div>
  );
};
