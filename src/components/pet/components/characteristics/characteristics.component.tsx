import React from 'react';
import './characteristics.css';
import { Characteristics } from '../../pet.models';
import { Circles } from '../circles/circles.component';

interface CharacteristicsProps {
  data: Characteristics;
}
export const CharacteristicsComponent = (props: CharacteristicsProps): React.ReactElement => {
  const { popularity, trainings, size, brain, security, childrens, agility, problems } = props.data;
  return (
    <ul>
      <li className="char-item plain-text">
        <span>Популярність </span> <Circles rating={popularity} />
      </li>
      <li className="char-item plain-text">
        <span>Тренування </span>
        <Circles rating={trainings} />
      </li>
      <li className="char-item plain-text">
        <span>Розмір </span> <Circles rating={size} />
      </li>
      <li className="char-item plain-text">
        <span>Розум </span> <Circles rating={brain} />
      </li>
      <li className="char-item plain-text">
        <span>Охорона </span> <Circles rating={security} />
      </li>
      <li className="char-item plain-text">
        <span>Відносини з дітьми</span> <Circles rating={childrens} />
      </li>
      <li className="char-item plain-text">
        <span>Спритність </span> <Circles rating={agility} />
      </li>
      <li className="char-item plain-text">
        <span>Проблемність </span> <Circles rating={problems} />
      </li>
    </ul>
  );
};
