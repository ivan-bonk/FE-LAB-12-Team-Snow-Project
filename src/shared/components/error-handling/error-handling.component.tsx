import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/constants/routes.constants';
import ErrorImg from 'images/error_dogs.png';
import style from './error-handling.module.scss';

export const ErrorHandling: React.FC = (): React.ReactElement => {
  return (
    <>
      <h2 className={style.error__header}>Упс, виникла помилка</h2>
      <img src={ErrorImg} className={style.error__img} alt="Nice dogs looking at you" />
      <Link to={ROUTES.home} className={style.error__back}>
        Повернутись на головну →
      </Link>
    </>
  );
};
