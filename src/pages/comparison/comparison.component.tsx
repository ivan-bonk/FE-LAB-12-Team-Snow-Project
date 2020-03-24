import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findPetsById } from '../../store/actions/comparison.action';

import './comparison.css';

import { Logo } from '../../shared/logotype/logo';
import { Characteristics } from './components/characteristics.component';

import { Pet } from './interfaces/pet.interface';

type ComparisonProps<T = any> = {
  name: string;
  type: T
};

interface RootState {
  data: object,
  pets_to_compare: Array<Pet>
}


export const Comparison: React.FC<ComparisonProps> = (props) => {
  const dispatch = useDispatch();
  const pets = useSelector((state: RootState) => state.pets_to_compare)

  useEffect(() => {
    // const url = window.location.pathname;
    dispatch(findPetsById(['122','223','334']));
  })

  return (
    <div className='comparison-page'>
      <Logo />
      <h1 className="header">Порівняння</h1>
      <div className='characteristics'>
        <h2>Характеристики</h2>
        <h3>Популярність</h3>
        <Characteristics 
          pets = { pets } 
          display="popularity"
          rate={true}/>
        <h3>Тренування</h3>
        <Characteristics 
          pets = { pets }
          display="training"
          rate={true}/>
      </div>
      <div className="specificity-care">
        <h2>Особливості догляду</h2>
        <h3>Час піклування (хв. на день)</h3>
        <Characteristics 
          pets = { pets }
          display="careTime"
          rate={false}/>
      </div>
    </div>
  );
};
