import React from 'react';
import { Field, reduxForm } from 'redux-form';

export const ModalBody: React.FC = () => {
  function handleSubmit(): void {
    console.log('form work');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="range"
          min="0"
          max="60"
          step="1"
          onChange={(e): any => {
            console.log(e.target);
          }}
        />
      </form>
    </div>
  );
};
