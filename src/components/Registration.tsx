import React from 'react';

type RegistrationProps<T = any> = {
  name: string;
  type: T;
};
export const Registration: React.FC<RegistrationProps> = props => {
  return (
    <div>
      <h1>Registration Page</h1>
    </div>
  );
};
