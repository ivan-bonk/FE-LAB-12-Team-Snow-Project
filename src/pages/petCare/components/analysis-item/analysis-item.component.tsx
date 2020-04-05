import React from 'react';
import styles from './analysis-item.module.scss';
import { AnalysisResult } from '../analysis-result/analysis-result.component';
import { CareBodyProps } from '../care-body/careBody.interface';

const red = 'result_red';
const green = 'result';
const title = [
  'Вага',
  'Кількість вигулювань',
  'Кількість прийомів їжі на день',
  'Кількість грам в порції',
  'Кількість медичних чекапів на рік',
];

export const AnalysisItem: React.FC<CareBodyProps> = props => {
  // const walkNumber = props.pet.observations?.weight;
  // const mealNumber = props.pet.observations?.weight;
  // const mealWeight = props.pet.observations?.weight;
  // const MedCheckUp = props.pet.observations?.weight;
  const weight = props.pet.observations?.weight as string;
  console.log(weight);

  const num = 7;

  const getNumber = (str: string) => {
    // const result = {
    //   message: '',
    //   classAtr: '',
    // };

    let result: string[] = [];

    let userData;
    if (str !== undefined) {
      userData = str.replace(/[^\d-]/g, '').split('-');
    }
    if (userData && num < parseInt(userData[0])) {
      // result.message = ' Збільшити ..';
      // result.classAtr = 'result_red';
      result = ['Збільшити', 'result_red'];
    } else if (userData && num > parseInt(userData[1])) {
      // result.message = 'Зменшити ..';
      // result.classAtr = 'result_red';
      result = ['Зменшити', 'result_red', str];
    } else {
      result = ['', 'result', str];
    }
    return result;
  };
  console.log(getNumber(weight));

  return (
    <div className={styles.analysisItem}>
      <h1 className={styles.analysisItem__title}>{title[0]} кг</h1>
      <AnalysisResult classAtr={green} data={getNumber(weight)} />

      <h1 className={styles.analysisItem__title}>{title[1]}</h1>
      <AnalysisResult classAtr={red} data={getNumber(weight)} />

      <h1 className={styles.analysisItem__title}>{title[2]}</h1>
      <AnalysisResult classAtr={red} data={getNumber(weight)} />

      <h1 className={styles.analysisItem__title}>{title[3]}</h1>
      <AnalysisResult classAtr={red} data={getNumber(weight)} />

      <h1 className={styles.analysisItem__title}>{title[4]}</h1>
      <AnalysisResult classAtr={red} data={getNumber(weight)} />
    </div>
  );
};
