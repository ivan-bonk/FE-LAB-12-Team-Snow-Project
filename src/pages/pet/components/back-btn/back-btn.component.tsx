import React from 'react';
import { Link } from 'react-router-dom';
import style from './back-btn.module.scss';
import { ROUTES } from 'shared/constants/routes.constants';

export const BackBtn: React.FC = () => {
  return (
    <div className={style.container}>
      <Link to={ROUTES.result} className={style.backButton}>
        Повернутись
      </Link>
    </div>
  );
};
