import React from 'react';
import { PetCareHeader } from './components/header.component/petCare-header.component';
import { AdditionalSection } from './components/additonal-section/additional-section.component';
import { PetCareBody } from './components/care-body/care-body.component';
import styles from './pet-care.module.scss';

export const PetCare: React.FC = () => {
  return (
    <div className={styles.container}>
      <PetCareHeader />
      <PetCareBody />
      <AdditionalSection />
    </div>
  );
};
