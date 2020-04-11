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
        <Characteristics data={props.pets[CR.POPULARITY]} />
        <h3 className={style.characteristics__secondaryHeader}>Тренування</h3>
        <Characteristics data={props.pets[CR.TRAINING]} />
        <h3 className={style.characteristics__secondaryHeader}>Розмір</h3>
        <Characteristics data={props.pets[CR.SIZE]} />
        <h3 className={style.characteristics__secondaryHeader}>Розум</h3>
        <Characteristics data={props.pets[CR.BRAIN]} />
        <h3 className={style.characteristics__secondaryHeader}>Захист</h3>
        <Characteristics data={props.pets[CR.SECURITY]} />
        <h3 className={style.characteristics__secondaryHeader}>Відносини з дітьми</h3>
        <Characteristics data={props.pets[CR.CHILD_FRIENDLY]} />
        <h3 className={style.characteristics__secondaryHeader}>Спритність</h3>
        <Characteristics data={props.pets[CR.AGILITY]} />
        <h3 className={style.characteristics__secondaryHeader}>Проблематичність</h3>
        <Characteristics data={props.pets[CR.PROBLEMATIC]} />
      </div>
      <div className={style.specificityCare}>
        <h2 className={style.specificityCare__mainHeader}>Особливості</h2>
        <h3 className={style.specificityCare__secondaryHeader}>Країна</h3>
        <Characteristics data={props.pets[CR.COUNTRY]} />
        <h3 className={style.specificityCare__secondaryHeader}>Тривалість життя</h3>
        <Characteristics data={props.pets[CR.LIFETIME]} />
        <h3 className={style.specificityCare__secondaryHeader}>Висота</h3>
        <Characteristics data={props.pets[CR.HEIGHT]} />
        <h3 className={style.specificityCare__secondaryHeader}>Вага</h3>
        <Characteristics data={props.pets[CR.WEIGHT]} />
        <h3 className={style.specificityCare__secondaryHeader}>Ціна</h3>
        <Characteristics data={props.pets[CR.PRICE]} />
        <h3 className={style.specificityCare__secondaryHeader}>Вартість утримання (Грн. в місяць)</h3>
        <Characteristics data={props.pets[CR.CARE_PRICE]} />
        <h3 className={style.specificityCare__secondaryHeader}>Час піклування (год. на день)</h3>
        <Characteristics data={props.pets[CR.CARE_TIME]} />
      </div>
    </>
  );
};
