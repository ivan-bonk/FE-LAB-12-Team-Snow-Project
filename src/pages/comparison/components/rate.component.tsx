import React from 'react';
import './rate.css';

import { RateInterface } from '../interfaces/pet.interface';

export const Rate: React.FC<RateInterface> = props => {
  const { rate } = props;

  let clases: string[] = ['gy', 'gy', 'gy', 'gy', 'gy']; // gy - grey

  if (rate === 1) {
    clases[0] = 'r'; // r - red
  } else if (rate < 4) {
    for (let i = 0; i < rate; i++) {
      clases[i] = 'y'; // y - yellow
    }
  } else {
    for (let i = 0; i < rate; i++) {
      clases[i] = 'gr'; // gr - green
    }
  }

  let key: number = 0;
  const items = clases.map(el => {
    return <div key={key++} className={el}></div>;
  });

  return <div className="rate-bar">{items}</div>;
};
