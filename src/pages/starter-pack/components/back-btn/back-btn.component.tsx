import React from 'react';
import { Link } from 'react-router-dom';
import style from './back-btn.module.scss';
import { ROUTES } from 'shared/constants/routes.constants';
import { BackBtnProps } from './back-btn.interface';

export const BackBtn: React.FC<BackBtnProps> = props => {
  return (
    <div className={style.container}>
      <Link to={ROUTES.pet.route(props.id)} className={style.backButton}>
        Повернутись
      </Link>
    </div>
  );
};
