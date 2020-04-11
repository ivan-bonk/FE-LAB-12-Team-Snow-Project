import React from 'react';
import { CareBodyPet } from '../care-body/careBody.interface';
import './analysis-result.module.scss';

export const AnalysisResult: React.FC<Partial<CareBodyPet>> = props => {
  let advice = '';
  let classAtr = '';
  let normal = '';
  let userNumber = '';
  if (props.data) {
    advice = props.data[0];
    classAtr = props.data[1];
    normal = props.data[2];
    userNumber = props.data[3];
  }

  return (
    <div className={classAtr}>
      <h4>{userNumber}</h4>
      <span>Норма: {normal}</span>

      {advice.length > 0 && (
        <>
          <h4>Порада:</h4>
          <span>{advice}</span>
          <span> {props.title}</span>
        </>
      )}
    </div>
  );
};
