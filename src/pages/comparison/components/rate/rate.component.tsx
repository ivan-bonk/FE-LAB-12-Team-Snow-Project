import React from 'react';
import './rate.scss';
import { rate } from './rate-logic.service';

import { RateProps } from './rate.interface';

export const Rate: React.FC<RateProps> = props => {
  const items = rate(props.rate).map((el, index) => {
    return <div key={index} className={el}></div>;
  });

  return <div className="rate-bar">{items}</div>;
};
