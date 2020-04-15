import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/constants/routes.constants';
import { useSelector } from 'react-redux';
import { MenuProps, RootState } from './menu.interfaces';

import home from 'shared/components/header/icons/home-icon.svg';
import paw from 'shared/components/header/icons/paw-icon.svg';
import like from 'shared/components/header/icons/like-icon.svg';
import question from 'shared/components/header/icons/question-icon.svg';
import search from 'shared/components/header/icons/search-icon.svg';

import styles from './menu.module.scss';

export const Menu: React.FC<MenuProps> = props => {
  const idsToCompare = useSelector((state: RootState) => state.comparisonHandler.idsToCompare);

  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menuContainer__menu} onClick={props.onLinkClick}>
        <li className={styles.menuContainer__menu__menuItem}>
          <img src={home} alt="home-icon" />
          <Link to={ROUTES.home} className={styles.menuLink}>
            Головна
          </Link>
        </li>
        <li className={styles.menuContainer__menu__menuItem}>
          <img src={paw} alt="home-icon" />
          <Link to={ROUTES.result} className={styles.menuLink}>
            Породи
          </Link>
        </li>
        <li className={styles.menuContainer__menu__menuItem}>
          <img src={search} alt="home-icon" />
          <Link to={ROUTES.filter} className={styles.menuLink}>
            Підібрати
          </Link>
        </li>
        <li className={styles.menuContainer__menu__menuItem}>
          <img src={like} alt="home-icon" />
          <Link to={`/comparison/${idsToCompare.join('-')}`} className={styles.menuLink}>
            Порівняти
          </Link>
        </li>
        <li className={styles.menuContainer__menu__menuItem}>
          <img src={question} alt="home-icon" />
          <Link to={ROUTES.quiz} className={styles.menuLink}>
            Чи хороший я власник
          </Link>
        </li>
      </ul>
    </div>
  );
};
