import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPets } from 'store/care/actions/care.actions';
import { ResultStore } from './careBody.interface';
import { CareBodyPet } from './careBody.interface';

import styles from './care-body.module.scss';
import { BodyHeader } from '../body-header/body-header.component';
import { AnalysisSection } from '../analysis-section/analysis-section.component';
import { AdditionalSection } from '../additonal-section/additional-section.component';

export const PetCareBody: React.FC = () => {
  const petBreed = 'Акіта іну';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPets.request());
  }, []);

  let pet: CareBodyPet = {};

  const pets = useSelector((state: ResultStore) => state.care);
  Object.entries(pets).forEach(el => {
    if (el[1].breed === petBreed) {
      pet = Object.assign({}, el[1]);
    }
  });
  return (
    <div className={styles.careBody}>
      <BodyHeader pet={pet} />
      <AnalysisSection pet={pet} />
      <AdditionalSection pet={pet} />
    </div>
  );
};
