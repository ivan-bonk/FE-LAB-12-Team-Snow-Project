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
const userNumber = '8';

export const AnalysisItem: React.FC<CareBodyProps> = props => {
  // -------------------
  // we don't have this data so i need to comment this part of code:
  // -------------------
  // const walkNumber = props.pet.observations?.walkNumber as string;
  // const mealNumber = props.pet.observations?.mealNumber as string;
  // const mealWeight = props.pet.observations?.mealWeight as string;
  // const medCheckUp = props.pet.observations?.MedCheckUp as string;
  const walkNumber = ' 9-11 вигулювання ';
  const mealNumber = ' 3-5 прийомів';
  const mealWeight = ' 1-20 грам ';
  const medCheckUp = ' 8-12 чекап ';
  const weight = props.pet.observations?.weight as string;

  const getNumber = (str: string) => {
    let result: string[] = [];

    let userData;
    if (str !== undefined) {
      userData = str.replace(/[^\d-]/g, '').split('-');
    }
    if (userData && parseInt(userNumber) < parseInt(userData[0])) {
      result = ['Збільшити', 'result_red', str, userNumber];
    } else if (userData && parseInt(userNumber) > parseInt(userData[1])) {
      result = ['Зменшити', 'result_red', str, userNumber];
    } else {
      result = ['', 'result', str, userNumber];
    }
    return result;
  };

  return (
    <div className={styles.analysisItem}>
      {/* --------------- */}
      {/* it is commented on until the base and filter are ready */}
      {/* --------------- */}
      {/* {title.map((item, index) => (
        <>
          <h1 className={styles.analysisItem__title}>{title[index]} кг</h1>
          <AnalysisResult title={title[index]} data={getNumber(weight)} />
        </>
      ))} */}
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
