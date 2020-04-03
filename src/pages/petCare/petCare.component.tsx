import React from 'react';
import { PetCareHeader } from './components/header.component/petCare-header.component';
import { AdditionalSection } from './components/additonal-section/additional-section.component';
import styles from './petCare.module.scss';

export const PetCare: React.FC = () => {
  return (
    <div className={styles.container}>
      <PetCareHeader />
      <AdditionalSection />
    </div>
  );
};
