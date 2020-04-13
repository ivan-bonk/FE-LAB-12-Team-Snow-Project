import React from 'react';
import { AdditionalItemCare } from '../additional-item/additonal-item.component';
import styles from './additional-section.module.scss';
import { CareBodyProps } from '../care-body/careBody.interface';

export const AdditionalSection: React.FC<CareBodyProps> = props => {
  const additionalInfo = props.pet.additionalInfo?.specialties[0];
  return (
    <div className={styles.petCareFooter}>
      <h2 className={styles.petCareFooter__title}>Додаткова інформація</h2>

      <AdditionalItemCare content={additionalInfo} />
    </div>
  );
};
