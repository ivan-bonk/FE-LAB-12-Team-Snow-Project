import React from 'react';
import { useSelector } from 'react-redux';
import styles from './analysis-item.module.scss';
import { AnalysisResult } from '../analysis-result/analysis-result.component';
import { CareBodyProps } from '../care-body/careBody.interface';
import { QuizData } from './analysis-item.interface';
import { Data } from './analysis-item.interface';
import { useLocation } from 'react-router-dom';

const title = [
  'Вага',
  'Кількість вигулювань',
  'Кількість прийомів їжі на день',
  'Кількість грам в порції',
  'Кількість медичних оглядів на рік',
];

const weightStrLength = 5;

export const AnalysisItem: React.FC<CareBodyProps> = props => {
  const location = useLocation();
  const quizData = useSelector((state: QuizData) => state.quiz);
  const stateValue: Data | null = location.state ? location.state : null;

  const userMealNumber = stateValue ? stateValue?.mealNumber : quizData.mealNumber;
  const userMealWeight = stateValue ? stateValue?.mealWeight : quizData.mealWeight;
  const userMedCheckUp = stateValue ? stateValue?.medChekUp : quizData.medChekUp;
  const userWalkNumber = stateValue ? stateValue?.walkNumber : quizData.walkNumber;
  const userWeight = stateValue ? stateValue?.weight : quizData.weight;

  const userData = [userWeight, userWalkNumber, userMealNumber, userMealWeight, userMedCheckUp];

  const walkNumber = props.pet.observations?.walkNumber as string;
  const mealNumber = props.pet.observations?.mealNumber as string;
  const mealWeight = props.pet.observations?.mealWeight as string;
  const medCheckUp = props.pet.observations?.medCheckUp as string;
  const weight = props.pet.observations?.weight as string;

  const rocommendData = [weight, walkNumber, mealNumber, mealWeight, medCheckUp];

  const transformData = (str: string) => {
    if (str !== undefined && str.length > weightStrLength) {
      const res = str.split('-').map(el => {
        return el
          .split('')
          .filter(item => {
            return !isNaN(parseInt(item));
          })
          .join('');
      });
      return res;
    } else {
      return [str];
    }
  };

  const compare = (user: any, recomend: string) => {
    const tipIncrease = ['Збільшити ', 'result_red', recomend, user];
    const tipReduce = ['Зменшити ', 'result_red', recomend, user];
    const checkOk = ['', 'result', recomend, user];
    const userData = transformData(user);
    const recomendData = transformData(recomend);
    let result: string[] = [];

    if (recomendData) {
      if (!userData[1] && !recomendData[1] && parseInt(userData[0]) < parseInt(recomendData[0])) {
        result = tipIncrease;
      } else if (!userData[1] && !recomendData[1] && parseInt(userData[0]) > parseInt(recomendData[0])) {
        result = tipReduce;
      } else if (!userData[1] && parseInt(userData[0]) < parseInt(recomendData[0])) {
        result = tipIncrease;
      } else if (!userData[1] && parseInt(userData[0]) > parseInt(recomendData[1])) {
        result = tipReduce;
      } else if (!recomendData[1] && parseInt(userData[0]) < parseInt(recomendData[0])) {
        result = tipIncrease;
      } else if (!recomendData[1] && parseInt(userData[1]) > parseInt(recomendData[0])) {
        result = tipReduce;
      } else {
        result = checkOk;
      }
      return result;
    }
  };

  return (
    <div className={styles.analysisItem}>
      {title.map((title, index) => {
        return (
          <div key={index}>
            <h1 className={styles.analysisItem__title}>{title}</h1>
            <AnalysisResult title={title} data={compare(userData[index], rocommendData[index])} />
          </div>
        );
      })}
    </div>
  );
};
