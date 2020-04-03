import React from 'react';
import * as CR from '../../comparison.constants';
import style from './comparison-display.module.scss';
import { Characteristics } from '../characteristics/characteristics.component';
import { ComparisonDisplayProps } from './comparison-display.interface';
import { RemovePetButton } from '../remove-pet-button/remove-pet-button.component';
import { AddPetBtn } from '../add-pet-button/add-pet-button.component';

export const ComparisonDisplay: React.FC<ComparisonDisplayProps> = props => {
  const items = props.pets[0].pets.map((pet, index) => {
    return <RemovePetButton key={index} ids={props.ids} id={pet.id} name={pet.breed} imgUrl={pet.imgUrl} />;
  });

  return (
    <>
      <div className={style.petsAgenda}>
        {items}
        <AddPetBtn />
      </div>
      <div className={style.characteristics}>
        <h2 className={style.characteristics__mainHeader}>Характеристики</h2>
        <h3 className={style.characteristics__secondaryHeader}>Популярність</h3>
        <Characteristics data={props.pets[CR.TRAINING]} />
        <h3 className={style.characteristics__secondaryHeader}>Тренування</h3>
        <Characteristics data={props.pets[CR.POPULARITY]} />
        <h3 className={style.characteristics__secondaryHeader}>Розмір</h3>
        <Characteristics data={props.pets[CR.SIZE]} />
        <h3 className={style.characteristics__secondaryHeader}>Вміння</h3>
        <Characteristics data={props.pets[CR.BRAIN]} />
      </div>
      <div className={style.specificityCare}>
        <h2 className={style.specificityCare__mainHeader}>Особливості догляду</h2>
        <h3 className={style.specificityCare__secondaryHeader}>Час піклування (год. на день)</h3>
        <Characteristics data={props.pets[CR.CARE_TIME]} />
      </div>
    </>
  );
};
