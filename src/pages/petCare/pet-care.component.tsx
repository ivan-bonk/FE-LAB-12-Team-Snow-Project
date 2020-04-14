import React from 'react';
import { PetCareBody } from './components/care-body/care-body.component';
import {Logo} from 'shared/components/logo/logo.component';
import styles from './pet-care.module.scss';

export const PetCare: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo/>
      </div>
      <PetCareBody />
    </div>
  );
};
