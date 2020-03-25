import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findPetsById } from '../../store/actions/comparison.action';

import './comparison.css';

import { Logo } from '../../shared/logotype/logo';
import { Characteristics } from './components/characteristics.component';

import { Pet } from './interfaces/pet.interface';

type ComparisonProps = {
  name: string;
  match: {
    params: {
      ids: string;
    };
  };
};

interface RootState {
  data: object;
  petsToCompare: Array<Pet>;
}

export function Comparison (props: ComparisonProps): React.ReactElement {
  const { ids } = props.match.params;

  const dispatch = useDispatch();
  const pets = useSelector((state: RootState) => state.petsToCompare);

  useEffect(() => {
    dispatch(findPetsById(ids.split('-')));
  });
  return (
    <div className="comparison-page">
      <Logo />
      <h1 className="header">Порівняння</h1>
      <div className="characteristics">
        <h2>Характеристики</h2>
        <h3>Популярність</h3>
        <Characteristics pets={ pets } display="popularity" rate={true}/>
        <h3>Тренування</h3>
        <Characteristics pets={ pets } display="training" rate={true}/>
      </div>
      <div className="specificity-care">
        <h2>Особливості догляду</h2>
        <h3>Час піклування (хв. на день)</h3>
        <Characteristics pets={ pets } display="careTime" rate={false}/>
      </div>
    </div>
  );
};
