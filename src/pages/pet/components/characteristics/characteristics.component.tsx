import React from 'react';
import style from './characteristics.module.scss';
import { CharacteristicsProps } from '../../props.models';
import { Rating } from '../rating/rating.component';

export const CharacteristicsComponent: React.FC<CharacteristicsProps> = props => {
  const { popularity, training, size, brain, security, childFriendly, agility, problematic } = props.data;
  const blocks = {
    Популярність: popularity,
    Тренування: training,
    Розмір: size,
    Розум: brain,
    Охорона: security,
    'Відносини з дітьми': childFriendly,
    Спритність: agility,
    Проблемність: problematic,
  };
  const blocksArray = Object.entries(blocks);
  return (
    <ul>
      {blocksArray.map((entry, index) => (
        <li className={style.charItem} key={index}>
          <span>{entry[0]} </span> <Rating rating={entry[1]} />
        </li>
      ))}
    </ul>
  );
};
