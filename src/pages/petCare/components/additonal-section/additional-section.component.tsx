import React from 'react';
import { AdditionalItemCare } from '../additional-item/additonal-item.component';
import styles from './additional-section.module.scss';

const content =
  'Мопс - это очень древняя и известная во всем мире порода. Как именно возникли эти собаки, до сих пор неясно. Но, возможно, они были получены путем скрещивания других пород в Древнем Китае, в эпоху династии Хань';

export const AdditionalSection: React.FC = () => {
  return (
    <div className={styles.petCareFooter}>
      <h2 className={styles.petCareFooter__title}>Додаткова інформація</h2>
      <AdditionalItemCare content={content} />
    </div>
  );
};
