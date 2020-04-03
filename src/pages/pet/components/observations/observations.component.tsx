import React from 'react';
import { ObservationProps } from '../../props.models';
import style from './observations.module.scss';

export const ObservationsComponent: React.FC<ObservationProps> = props => {
  const { country, lifetime, height, weight, price, carePrice, careTime } = props.data;
  const blocks = {
    Країна: country,
    'Тривалість життя': lifetime,
    Висота: height,
    Вага: weight,
    Вартість: price,
    'Ціна утримання': carePrice,
    'Час догляду': `${careTime} год на день`,
  };
  const blocksArray = Object.entries(blocks);
  return (
    <ul className={style.obsContainer}>
      {blocksArray.map(([title, content], index) => (
        <li className={style.obsItem} key={index}>
          <p className={style.obsTitle}>{title}</p> <p className={style.plainText}>{content}</p>
        </li>
      ))}
    </ul>
  );
};
