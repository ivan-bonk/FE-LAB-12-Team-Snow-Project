import React from 'react';

import { RadioProps } from './radio.intarface';
import styles from './radio.module.scss';

export const Radio: React.FC<RadioProps> = ({ name, lable, value, refAttribute }) => {
  const inputs = value.map((el: string, i: number) => {
    return (
      <label key={i} className={styles.radio__lable}>
        <input type="radio" name={name} value={el} ref={refAttribute} className={styles.radio__check}></input>
        <span className={styles.radio__title}> {el} </span>
      </label>
    );
  });

  return (
    <div className={styles.radio}>
      <p className={styles.radio__header}>{lable}</p>
      {inputs}
    </div>
  );
};
