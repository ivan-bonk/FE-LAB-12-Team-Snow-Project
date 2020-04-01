import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetPeysById } from '../../store/actions/comparison.action';

import './comparison.scss';

import { Logo } from '../../shared/logotype/logo';
import { Characteristics } from './components/characteristics.component';

import {  ComparisonProps, PetsToCompareList, RootState } from './interfaces/pet.interface';

export const Comparison: React.FC<ComparisonProps> = props => {
  const { ids } = props.match.params; //extract pets to compare id from pathname

  const dispatch = useDispatch();

  const pets: PetsToCompareList[] = useSelector((state: RootState) => state.comparison.petsToCompare);

  useEffect(() => {
    dispatch(asyncGetPeysById.request(ids.split('-'))); //run action, which fetch pets by id from database
  },[]);

  return (
    <div className="comparison-page">
      <Logo />
      <h1 className="header">Порівняння</h1>
      {pets.length > 0 && (
        <>
          <div className="characteristics">
            <h2>Характеристики</h2>
            <h3>Популярність</h3>
            <Characteristics data={pets[0]} />
            <h3>Тренування</h3>
            <Characteristics data={pets[1]} />
            <h3>Розмір</h3>
            <Characteristics data={pets[2]} />
            <h3>Вміння</h3>
            <Characteristics data={pets[3]} />
          </div>
          <div className="specificity-care">
            <h2>Особливості догляду</h2>
            <h3>Час піклування (год. на день)</h3>
            <Characteristics data={pets[14]} />
          </div>
        </>
      )}
    </div>
  );
};
