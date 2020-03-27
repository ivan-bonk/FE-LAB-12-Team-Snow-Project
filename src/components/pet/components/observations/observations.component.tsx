import React from 'react';
import { Observations } from '../../pet.models';
import './observations.css';

interface ObservationProps {
  data: Observations;
}

export const ObservationsComponent = (props: ObservationProps): React.ReactElement => {
  const { country, life, height, weight, price, carePrice, careTime } = props.data;
  return (
    <ul className="obs">
      <li>
        <p className="obs-title">Країна</p> <p className="plain-text">{country}</p>
      </li>
      <li>
        <p className="obs-title">Тривалість життя</p> <p className="plain-text">{`${life} років`}</p>{' '}
      </li>
      <li>
        <p className="obs-title">Висота</p> <p className="plain-text">{`${height} см`}</p>
      </li>
      <li>
        <p className="obs-title">Вага</p> <p className="plain-text">{`${weight} кг`}</p>
      </li>
      <li>
        <p className="obs-title">Вартість</p> <p className="plain-text">{`${price} грн`}</p>
      </li>
      <li>
        <p className="obs-title">Ціна утримання</p> <p className="plain-text">{`${carePrice} грн`}</p>
      </li>
      <li>
        <p className="obs-title">Час догляду</p> <p className="plain-text">{`~ ${careTime} години в день`}</p>
      </li>
    </ul>
  );
};
