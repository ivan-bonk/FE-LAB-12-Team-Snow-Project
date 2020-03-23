import React from 'react';
import Modal from 'react-modal';
import { Search } from '../pages/search/search.component';

type HomeProps<T = unknown> = {
  name: string;
  type: T;
  test: boolean;
};
Modal.setAppElement('#root');

export const Home: React.FC<HomeProps> = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(): void {
    setIsOpen(true);
  }
  // function closeModal(): void {
  //   setIsOpen(false);
  // }
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={openModal}>Підібрати</button>
      <Modal isOpen={modalIsOpen}>
        <Search />
      </Modal>
    </div>
  );
};
