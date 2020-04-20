import React, { useState } from 'react';

import { MealProps } from './meal-input.intarface';
import styles from './meal-input.module.scss';

export const MealInput: React.FC<MealProps> = ({ name, refAttribute }) => {
  const [mealValue, setMealValue] = useState<any>('');

  const inputValidation = (event: any) => {
    if (event.target.value === '') {
      setMealValue(event.target.value);
    } else {
      const numb = parseInt(event.target.value);

      if (isNaN(numb)) {
        setMealValue(mealValue.trim());
      } else {
        setMealValue(numb);
      }
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.container__label}>Кількість їжі на порцію(гр.)</p>
      <input
        type="text"
        name={name}
        onChange={inputValidation}
        ref={refAttribute}
        className={styles.container__inout}
        value={mealValue}
        placeholder="введіть вагу порції"
      />
    </div>
  );
};
