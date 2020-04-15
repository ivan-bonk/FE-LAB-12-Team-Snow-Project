import React from 'react';

import styles from './petCare-header.module.scss';

export const PetCareHeader: React.FC = () => {
  return (
    <div className={styles.petCareHeader}>
      <h1 className={styles.petCareHeader__title}>На скільки добре ви піклуєтесь про свого собаку</h1>
    </div>
  );
};
