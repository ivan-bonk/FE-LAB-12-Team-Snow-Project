import React from 'react';
import { PetCareHeader } from './components/header.component/petCare-header.component';
import { PetCareBody } from './components/care-body/care-body.component';
import styles from './pet-care.module.scss';

export const PetCare: React.FC = () => {
  return (
    <div className={styles.container}>
      <PetCareHeader />
      <PetCareBody />
    </div>
  );
};
