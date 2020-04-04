import React from 'react';
import styles from './analysis-section.module.scss';
import { AnalysisItem } from '../analysis-item/analysis-item.component';

export const AnalysisSection: React.FC = () => {
  return (
    <div className={styles.analysis}>
      <h1 className={styles.analysis__title}>Аналіз</h1>

      <AnalysisItem />
    </div>
  );
};
