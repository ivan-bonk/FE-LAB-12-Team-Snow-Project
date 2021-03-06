import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from 'shared/components/logo/logo.component';
import { ROUTES } from 'shared/constants/routes.constants';
import style from './footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <div className={style.footerContainer}>
      <footer className={style.footer}>
        <div className={style.footer__copyright}>
          <span className={`${style.footer__copyright__icon} material-icons`}>favorite_border</span>
          <span className={style.footer__copyright__text}>University Program</span>
        </div>
        <div className={style.footer__logo}>
          <Logo />
        </div>
        <div className={style.footer__nav}>
          <Link className={style.footer__nav__link} to={ROUTES.home}>
            Головна
          </Link>
          <Link className={style.footer__nav__link} to={ROUTES.result}>
            Породи
          </Link>
          <Link className={style.footer__nav__link} to={ROUTES.filter}>
            Підібрати
          </Link>
        </div>
      </footer>
    </div>
  );
};
