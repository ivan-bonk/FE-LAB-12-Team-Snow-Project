import React from 'react';
import { ModalHeader } from './components/modalHeader.component';
import { ModalBody } from './components/modalBody.component';
// import { ModalFooter } from './components/modalFooter.component';
import './search.css';
type HomeProps = {
  closeModal: any;
};
export const Search: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <div className="search-modal">
      <ModalHeader />
      <ModalBody closeModal={props.closeModal} />
    </div>
  );
};
