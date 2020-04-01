import React from 'react';
import './rate.css';

export const Rate = (props: { rate: number }) => {
  const { rate } = props;

  const clases: string[] = ['gy', 'gy', 'gy', 'gy', 'gy']; // gy - grey

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

  let key = 0;
  const items = clases.map(el => {
    return <div key={key++} className={el}></div>;
  });

  return <div className="rate-bar">{items}</div>;
};
