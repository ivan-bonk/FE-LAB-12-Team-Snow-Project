import React from 'react';
// import { ResultProps } from './result.interface';
import { CareBodyPet } from '../care-body/careBody.interface';
import './analysis-result.module.scss';

export const AnalysisResult: React.FC<Partial<CareBodyPet>> = props => {
  // console.log(props.data[0]);
  let classAtr = '';
  let advice = '';
  let normal = '';
  if (props.data) {
    classAtr = props.data[1];
    advice = props.data[0];
    normal = props.data[2];
    console.log(props.data[0]);
  }
  return (
    <div className={classAtr}>
      <h4></h4>
      <span>Норма: {normal}</span>
      <h4>Порада:</h4>
      <span>{advice}</span>
    </div>
  );
};
