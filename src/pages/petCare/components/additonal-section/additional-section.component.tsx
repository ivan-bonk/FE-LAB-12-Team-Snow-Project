import React from 'react';
import { AdditionalItemCare } from '../additional-item/additonal-item.component';
import styles from './additional-section.module.scss';
import { CareBodyProps } from '../care-body/careBody.interface';

// remove contentForShow whet page will be ready, its just for monday meet

const contentForShow =
  'Мопс - это очень древняя и известная во всем мире порода. Как именно возникли эти собаки, до сих пор неясно. Но, возможно, они были получены путем скрещивания других пород в Древнем Китае, в эпоху династии Хань';

export const AdditionalSection: React.FC<CareBodyProps> = props => {
  const additionalInfo = props.pet.additionalInfo?.about;
  return (
    <div className={styles.petCareFooter}>
      <h2 className={styles.petCareFooter__title}>Додаткова інформація</h2>

      {/* // remove next component vs contentForShow whet page will be ready */}

      <AdditionalItemCare content={contentForShow} />
      <AdditionalItemCare content={additionalInfo} />
    </div>
  );
};
