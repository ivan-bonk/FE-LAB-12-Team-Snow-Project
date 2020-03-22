import React from 'react';

type PetProps<T = any> = {
  name: string;
  type: T;
};

export const Pet: React.FC<PetProps> = props => {
  return (
    <div>
      <h1>Pet Page</h1>
    </div>
  );
};
