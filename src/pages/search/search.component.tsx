import React from 'react';
import { ModalHeader } from './components/modalHeader.component';
import { ModalBody } from './components/modalBody.component';
import { SearchInterface } from './search.interfaces';
import './search.css';

export const Search: React.FC<SearchInterface> = (props: SearchInterface) => {
  return (
    <div className="search-modal">
      <ModalHeader />
      <ModalBody closeModal={props.closeModal} />
    </div>
  );
};
