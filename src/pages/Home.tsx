import React from 'react';

type HomeProps<T = any> = {
  name: string;
  type: T;
};

export const Home: React.FC<HomeProps> = props => {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};
