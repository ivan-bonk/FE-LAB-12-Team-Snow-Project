import React from 'react';

import { MealProps } from './meal-input.intarface';
import styles from './meal-input.module.scss';

export const MealInput: React.FC<MealProps> = ({ name, refAttribute }) => {
  return (
    <div className={styles.container}>
      <p className={styles.container__label}>Кількість їжі на порцію(гр.)</p>
      <input
        type="number"
        name={name}
        ref={refAttribute}
        className={styles.container__inout}
        placeholder="введіть вагу порції"
        autoComplete="off"
        min="0"
      />
    </div>
  );
};
