import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getPets } from 'store/care/actions/care.actions';
import { ResultStore } from './careBody.interface';
import { CareBodyPet } from './careBody.interface';

import styles from './care-body.module.scss';
import { BodyHeader } from '../body-header/body-header.component';
import { AnalysisSection } from '../analysis-section/analysis-section.component';
import { AdditionalSection } from '../additonal-section/additional-section.component';
import { QuizData } from '../analysis-item/analysis-item.interface';
import { Data } from '../analysis-item/analysis-item.interface';

import { ErrorHandling } from 'shared/components/error-handling/error-handling.component';

export const PetCareBody: React.FC = () => {
  const location = useLocation();
  const locState: Data = location.state!;

  const quizData = useSelector((state: QuizData) => state.quiz);

  const petBreed = locState.breed ? locState.breed : quizData.breed;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPets.request());
  }, [dispatch]);

  let pet: CareBodyPet = {};

  const pets = useSelector((state: ResultStore) => state.care);

  const checkBreeds = () => {
    if (pets) {
      Object.entries(pets).forEach(el => {
        if (el[1].breed === petBreed) {
          pet = Object.assign({}, el[1]);
        }
      });
    }
  };
  checkBreeds();

  const renderBody = () => {
    if (!pets) {
      return <ErrorHandling />;
    } else if (pet.imgUrl) {
      return (
        <div className={styles.careBody}>
          <BodyHeader pet={pet} />
          <AnalysisSection pet={pet} />
          <AdditionalSection pet={pet} />
        </div>
      );
    } else {
      return <div className={styles.card}></div>;
    }
  };

  return <>{renderBody()}</>;
};
