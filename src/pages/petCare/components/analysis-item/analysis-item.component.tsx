import React from 'react';
import { useSelector } from 'react-redux';
import styles from './analysis-item.module.scss';
import { AnalysisResult } from '../analysis-result/analysis-result.component';
import { CareBodyProps } from '../care-body/careBody.interface';
import { QuizData } from './analysis-item.interface';

const title = [
  'Вага',
  'Кількість вигулювань',
  'Кількість прийомів їжі на день',
  'Кількість грам в порції',
  'Кількість медичних чекапів на рік',
];
const weightStrLength = 5;

export const AnalysisItem: React.FC<CareBodyProps> = props => {
  const quizData = useSelector((state: QuizData) => state.quiz);

  const userMealNumber = quizData.mealNumber;
  const userMealWeight = quizData.mealWeight;
  const userMedChekUp = quizData.medChekUp;
  const userWalkNumber = quizData.walkNumber;
  const userWeight = quizData.weight;

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

  const compare = (user: any, recomend: string) => {
    const tipIncrease = ['Збільшити', 'result_red', recomend, user];
    const tipReduce = ['Зменшити', 'result_red', recomend, user];
    const checkOk = ['', 'result', recomend, user];
    const userData = transformData(user);
    const recomendData = transformData(recomend);
    let result: string[] = [];

    if (recomendData) {
      console.log(userData);
      console.log(recomendData);
      if (parseInt(userData[0]) < parseInt(recomendData[0])) {
        result = tipIncrease;
      } else if (parseInt(userData[1]) > parseInt(recomendData[1])) {
        result = tipReduce;
      } else if (!recomendData[1] && parseInt(recomendData[0]) > parseInt(userData[0])) {
        result = tipIncrease;
      } else if (!recomendData[1] && parseInt(recomendData[0]) < parseInt(userData[0])) {
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
      <AnalysisResult title={title[0]} data={compare(userWeight, weight)} />
      <h1 className={styles.analysisItem__title}>{title[1]}</h1>
      <AnalysisResult title={title[1]} data={compare(userWalkNumber, walkNumber)} />
      <h1 className={styles.analysisItem__title}>{title[2]}</h1>
      <AnalysisResult title={title[2]} data={compare(userMealNumber, mealNumber)} />
      <h1 className={styles.analysisItem__title}>{title[3]}</h1>
      <AnalysisResult title={title[3]} data={compare(userMealWeight, mealWeight)} />
      <h1 className={styles.analysisItem__title}>{title[4]}</h1>
      <AnalysisResult title={title[4]} data={compare(userMedChekUp, medCheckUp)} />
    </div>
  );
};
