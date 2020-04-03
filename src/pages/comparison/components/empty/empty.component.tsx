import React from 'react';
import { AddPetBtn } from '../add-pet-button/add-pet-button.component';

import style from'./empty.module.scss';

export const Empty = () => {
  return (
    <div className={style.emptyPage}>
      <div className={style.emptyPage__title}>Немає жодного песика для порівняня</div>
      <AddPetBtn />
    </div>
  );
};
