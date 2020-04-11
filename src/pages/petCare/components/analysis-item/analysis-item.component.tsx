import React from 'react';
import styles from './analysis-item.module.scss';
import { AnalysisResult } from '../analysis-result/analysis-result.component';
import { CareBodyProps } from '../care-body/careBody.interface';

const title = [
  'Вага',
  'Кількість вигулювань',
  'Кількість прийомів їжі на день',
  'Кількість грам в порції',
  'Кількість медичних чекапів на рік',
];
const weightStrLength = 5;

export const AnalysisItem: React.FC<CareBodyProps> = props => {
  // -------------------
  // we don't have this data so i need this for meet show :
  const userNumber = '35';
  // -------------------

  const walkNumber = props.pet.observations?.walkNumber as string;
  const mealNumber = props.pet.observations?.mealNumber as string;
  const mealWeight = props.pet.observations?.mealWeight as string;
  const medCheckUp = props.pet.observations?.medCheckUp as string;
  const weight = props.pet.observations?.weight as string;

  const transformData = (str: string) => {
    if (str !== undefined && str.length > weightStrLength) {
      return str.replace(/[^\d-]/g, '').split('-');
    } else {
      return [str];
    }
  };

  const getNumber = (str: string) => {
    const tipIncrease = ['Збільшити', 'result_red', str, userNumber];
    const tipReduce = ['Зменшити', 'result_red', str, userNumber];
    const checkOk = ['', 'result', str, userNumber];
    const userData = transformData(str);
    let result: string[] = [];

    if (userData) {
      if (parseInt(userNumber) < parseInt(userData[0])) {
        result = tipIncrease;
      } else if (parseInt(userNumber) > parseInt(userData[1])) {
        result = tipReduce;
      } else if (!userData[1] && parseInt(userData[0]) > parseInt(userNumber)) {
        result = tipIncrease;
      } else if (!userData[1] && parseInt(userData[0]) < parseInt(userNumber)) {
        result = tipReduce;
      } else {
        result = checkOk;
      }
      return result;
    }
  };

  return (
    <div className={styles.analysisItem}>
      {/* --------------- */}
      {/* it is commented on until the add page will be ready */}
      {/* --------------- */}
      {/* {title.map((item, index) => (
        <>
          <h1 className={styles.analysisItem__title}>{title[index]} кг</h1>
          <AnalysisResult title={title[index]} data={getNumber(weight)} />
        </>
      ))} */}

      {/* --------------- */}

      <h1 className={styles.analysisItem__title}>{title[0]} кг</h1>
      <AnalysisResult title={title[0]} data={getNumber(weight)} />

      <h1 className={styles.analysisItem__title}>{title[1]}</h1>
      <AnalysisResult title={title[1]} data={getNumber(walkNumber)} />

      <h1 className={styles.analysisItem__title}>{title[2]}</h1>
      <AnalysisResult title={title[2]} data={getNumber(mealNumber)} />

      <h1 className={styles.analysisItem__title}>{title[3]}</h1>
      <AnalysisResult title={title[3]} data={getNumber(mealWeight)} />

      <h1 className={styles.analysisItem__title}>{title[4]}</h1>
      <AnalysisResult title={title[4]} data={getNumber(medCheckUp)} />
    </div>
  );
};