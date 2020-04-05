import React from 'react';
import styles from './analysis-section.module.scss';
import { AnalysisItem } from '../analysis-item/analysis-item.component';
import { CareBodyProps } from '../care-body/careBody.interface';

export const AnalysisSection: React.FC<CareBodyProps> = props => {
  return (
    <div className={styles.analysis}>
      <h1 className={styles.analysis__title}>Аналіз</h1>

      <AnalysisItem pet={props.pet} />
    </div>
  );
};
