import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPets } from '../../../../store/care/actions/care.actions';

import styles from './care-body.module.scss';
import { BodyHeader } from '../body-header/body-header.component';
import { AnalysisSection } from '../analysis-section/analysis-section.component';
import { ResultStore } from './careBody.interface';

export const PetCareBody: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPets.request());
  }, []);

  const pets = useSelector((state: ResultStore) => state.care);
  Object.entries(pets).forEach(el => {
    console.log(el);
  });

  return (
    <div className={styles.careBody}>
      <BodyHeader />
      <AnalysisSection />
    </div>
  );
};
