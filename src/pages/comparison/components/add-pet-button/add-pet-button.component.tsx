import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/constants/routes.constants';

import style from './add-pet-btn.module.scss';

export const AddPetBtn = () => {
  return (
    <Link className={style.addPetLink} to={ROUTES.result}>
      <div className={style.addPetBtn}>+ Додати</div>
    </Link>
  );
};
