import React from 'react';
import './rate.scss';
import clases from './rate-logic.service';

import { RateProps } from '../interfaces/pet.interface';

export const Rate: React.FC<RateProps> = props => {

  const items = clases(props.rate).map((el, index) => {
    return <div key={index} className={el}></div>;
  });

  return <div className="rate-bar">{items}</div>;
};
