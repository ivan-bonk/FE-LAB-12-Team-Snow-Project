import React from 'react';
import { ModalHeader } from './modalHeader.component';
import { ModalBody } from './modalBody.component';
import { ModalFooter } from './modalFooter.component';
import './search.css';
type HomeProps = {
  closeModal: any;
};
export const Search: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <div className="search-modal">
      <ModalHeader />
      <ModalBody />
      <ModalFooter closeModal={props.closeModal} />
    </div>
  );
};
