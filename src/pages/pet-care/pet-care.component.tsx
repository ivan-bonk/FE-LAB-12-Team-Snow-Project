import React from 'react';
import { PetCareBody } from './components/care-body/care-body.component';

import styles from './pet-care.module.scss';

export const PetCare: React.FC = () => {
  return (
    <div className={styles.container}>
      <PetCareBody />
    </div>
  );
};
