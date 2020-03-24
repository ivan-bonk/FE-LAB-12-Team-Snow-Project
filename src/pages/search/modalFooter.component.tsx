import React from 'react';

type HomeProps = {
  closeModal: any;
};

export const ModalFooter: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <div>
      <div className="search-footer">
        <button className="btn btn-apply">Застосувати</button>
        <button className="btn btn-cancel" onClick={props.closeModal}>
          Закрити
        </button>
      </div>
    </div>
  );
};
