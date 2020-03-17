import React from 'react';

type AddPetProps<T = any> = {
  name: string;
  type: T;
};

export const AddPet: React.FC<AddPetProps> = props => {
  return (
    <div>
      <h1>Add new Pet</h1>
    </div>
  );
};
