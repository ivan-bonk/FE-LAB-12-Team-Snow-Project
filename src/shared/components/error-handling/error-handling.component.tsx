import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes.constants';
import err_img from 'images/error_dogs.png';
import style from './error-handling.module.scss';

export const ErrorHandling: React.FC = (): React.ReactElement => {
  return (
    <>
        <h2 className={style.error__header}>Упс, виникла помилка</h2>
        <img src={err_img} className={style.error__img}/>
        <Link to={ROUTES.home} className={style.error__back}>
            Повернутись на головну →
        </Link>
    </>
  );
};
