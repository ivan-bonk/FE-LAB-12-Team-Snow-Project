import React from 'react';
import { CareBodyPet } from '../care-body/careBody.interface';
import './analysis-result.module.scss';

export const AnalysisResult: React.FC<Partial<CareBodyPet>> = props => {
  let advice = '';
  let classAtr = '';
  let normal = '';
  let userNumber = '';
  let checkIcon = '';

  if (props.data) {
    advice = props.data[0];
    classAtr = props.data[1];
    normal = props.data[2];
    userNumber = props.data[3];
    checkIcon = props.data[1] === 'result' ? 'done' : 'error_outline';
  }

  return (
    <div className={classAtr}>
      <h4>{userNumber}</h4>
      <span>Норма: {normal}</span>
      <span className="material-icons">{checkIcon}</span>
      {advice.length > 0 && (
        <>
          <h4>Порада:</h4>
          <span>{advice}</span>
          <span>{props.title === 'Вага' ? 'кількість їжі, та перевірити фізичну активність собаки' : props.title}</span>
        </>
      )}
    </div>
  );
};
