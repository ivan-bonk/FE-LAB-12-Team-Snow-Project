import React from 'react';
import { PetCareHeader } from './components/header.component/petCare-header.component';
import { PetCareBody } from './components/care-body/care-body.component';
import styles from './pet-care.module.scss';

import { useHistory } from 'react-router-dom';

export const PetCare: React.FC = () => {
  const test = useHistory();
  console.log(test.location);

  return (
    <div className={styles.container}>
      <PetCareHeader />
      <PetCareBody />
    </div>
  );
};
