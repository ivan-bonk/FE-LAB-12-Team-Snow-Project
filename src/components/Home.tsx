import React from 'react';
import Modal from 'react-modal';
import { Search } from '../pages/search/search.component';

type HomeProps = {
  closeModal: void;
  onKeyDown: any;
};
Modal.setAppElement('#root');

export const Home: React.FC<HomeProps> = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(): void {
    setIsOpen(true);
  }
  function closeModal(): void {
    setIsOpen(false);
  }
  function handleKeyDown(e: any): void {
    if (e.keyCode === 27) {
      setIsOpen(false);
    }
  }

  return (
    // Whet page will be done, copy and past in to real Home Page,  just Modal !!!!!!!!!!!!!!!!!

    <div onKeyUp={handleKeyDown}>
      <h1>Home page</h1>
      <button onClick={openModal}>Підібрати</button>
      <Modal isOpen={modalIsOpen} className="modal">
        <Search closeModal={closeModal.bind(Home)} />
      </Modal>
    </div>
  );
};
