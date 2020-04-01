import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPetsById } from '../../store/actions/comparison.action';

import * as CR from './comparison.constants';
import './comparison.scss';

import { Logo } from '../../shared/logotype/logo';
import { Characteristics } from './components/characteristics.component';

import { ComparisonProps, PetsToCompareList, RootState } from './interfaces/pet.interface';

export const Comparison: React.FC<ComparisonProps> = props => {
  const { ids } = props.match.params; //extract pets to compare id from pathname

  const dispatch = useDispatch();

  const pets: PetsToCompareList[] = useSelector((state: RootState) => state.comparison.petsToCompare);

  useEffect(() => {
    dispatch(GetPetsById.request(ids.split('-'))); //run action, which fetch pets by id from database
  }, []);

  return (
    <div className="comparison-page">
      <Logo />
      <h1 className="header">Порівняння</h1>
      {pets.length > 0 && (
        <>
          <div className="characteristics">
            <h2>Характеристики</h2>
            <h3>Популярність</h3>
            <Characteristics data={pets[CR.TRAINING]} />
            <h3>Тренування</h3>
            <Characteristics data={pets[CR.POPULARITY]} />
            <h3>Розмір</h3>
            <Characteristics data={pets[CR.SIZE]} />
            <h3>Вміння</h3>
            <Characteristics data={pets[CR.BRAIN]} />
          </div>
          <div className="specificity-care">
            <h2>Особливості догляду</h2>
            <h3>Час піклування (год. на день)</h3>
            <Characteristics data={pets[CR.CARE_TIME]} />
          </div>
        </>
      )}
    </div>
  );
};
