import React from 'react';

import { SelectProps } from './select.intarface';
import styles from './select.module.scss';

export const Select: React.FC<SelectProps> = ({ name, elements, refAttribute, lable }) => {
  const pet = elements.map((el: string, i: number) => {
    return (
      <option key={i} value={el}>
        {el}
      </option>
    );
  });
  return (
    <div className={styles.block}>
      <p className={styles.label}>{lable}</p>
      <div className={styles.select}>
        <select name={name} ref={refAttribute} className={styles.select__box}>
          {pet}
        </select>
      </div>
    </div>
  );
};
