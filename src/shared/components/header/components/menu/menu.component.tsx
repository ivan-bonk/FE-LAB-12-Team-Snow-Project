import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from 'shared/constants/routes.constants';
import { useSelector } from 'react-redux';
import { MenuProps, RootState } from './menu.interfaces';

import styles from './menu.module.scss';

export const Menu: React.FC<MenuProps> = props => {
  const idsToCompare = useSelector((state: RootState) => state.comparisonHandler.idsToCompare);
  const location = useLocation();
  const currentPage = location.pathname.replace(/\//g,'');
  console.log(currentPage);

  const activeStyle = styles.menuContainer__menu__menuItem_active;
  const passiveStyle = styles.menuContainer__menu__menuItem;

  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menuContainer__menu}>
        <li className={currentPage==='' ? activeStyle : passiveStyle}>
          <span className={`${styles.linkIcon} material-icons`}>home</span>
          <Link to={ROUTES.home} className={styles.menuLink} onClick={props.onLinkClick}>
            Головна
          </Link>
        </li>
        <li className={currentPage==='result' ? activeStyle : passiveStyle}>
          <span className={`${styles.linkIcon} material-icons`}>pets</span>
          <Link to={ROUTES.result} className={styles.menuLink} onClick={props.onLinkClick}>
            Породи
          </Link>
        </li>
        <li className={currentPage==='filter' ? activeStyle : passiveStyle}>
          <span className={`${styles.linkIcon} material-icons`}>search</span>
          <Link to={ROUTES.filter} className={styles.menuLink} onClick={props.onLinkClick}>
            Підібрати
          </Link>
        </li>
        <li className={currentPage.includes('comparison') ? activeStyle : passiveStyle}>
          <span className={`${styles.linkIcon} material-icons`}>thumbs_up_down</span>
          <Link to={`/comparison/${idsToCompare.join('-')}`} className={styles.menuLink} onClick={props.onLinkClick}>
            Порівняти ({idsToCompare.length})
          </Link>
        </li>
        <li className={currentPage==='quiz-page' || currentPage.includes('care') ? activeStyle : passiveStyle}>
          <span className={`${styles.linkIcon} material-icons`}>help</span>
          <Link to={ROUTES.quiz} className={styles.menuLink} onClick={props.onLinkClick}>
            Чи хороший я власник
          </Link>
        </li>
      </ul>
    </div>
  );
};
