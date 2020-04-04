import React from 'react';
import styles from './analysis-item.module.scss';
import { AnalysisResult } from '../analysis-result/analysis-result.component';

const red = 'result_red';
const green = 'result';

export const AnalysisItem: React.FC = () => {
  return (
    <div className={styles.analysisItem}>
      <h1 className={styles.analysisItem__title}>Вага, кг</h1>
      <AnalysisResult classAtr={green} />

      <h1 className={styles.analysisItem__title}>Кількість прийомів їжі за день</h1>

      <AnalysisResult classAtr={red} />
    </div>
  );
};
