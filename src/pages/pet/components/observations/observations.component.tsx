import React from 'react';
import { ObservationProps } from '../../props.models';
import style from './observations.module.scss';

export const ObservationsComponent: React.FC<ObservationProps> = props => {
  const { country, lifetime, height, weight, price, carePrice, careTime } = props.data;
  const blocks = {
    Країна: country,
    'Тривалість життя': `${lifetime} років`,
    Висота: `${height} см`,
    Вага: `${weight} кг`,
    Вартість: `${price} грн`,
    'Ціна утримання': `${carePrice} грн`,
    'Час догляду': `${careTime} год на день`,
  };
  const blocksArray = Object.entries(blocks);
  return (
    <ul className={style.obsContainer}>
      {blocksArray.map((entry, index) => (
        <li className={style.obsItem} key={index}>
          <p className={style.obsTitle}>{entry[0]}</p> <p className={style.plainText}>{entry[1]}</p>
        </li>
      ))}
    </ul>
  );
};
