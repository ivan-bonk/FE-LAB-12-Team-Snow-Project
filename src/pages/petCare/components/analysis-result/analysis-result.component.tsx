import React from 'react';
import { ResultProps } from './result.interface';
import './analysis-result.module.scss';

export const AnalysisResult: React.FC<ResultProps> = props => {
  return (
    <div className={props.classAtr}>
      <h4 className={props.classAtr}>10 кг</h4>
      <span>Норма: 10-14 кг</span>
    </div>
  );
};
