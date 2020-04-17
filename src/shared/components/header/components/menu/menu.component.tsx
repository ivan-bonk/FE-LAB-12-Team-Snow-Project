import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/constants/routes.constants';
import { useSelector } from 'react-redux';
import { MenuProps, RootState } from './menu.interfaces';

import styles from './menu.module.scss';

export const Menu: React.FC<MenuProps> = props => {
  const idsToCompare = useSelector((state: RootState) => state.comparisonHandler.idsToCompare);

  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menuContainer__menu} onClick={props.onLinkClick}>
        <li className={styles.menuContainer__menu__menuItem}>
          <span className="material-icons">home</span>
          <Link to={ROUTES.home} className={styles.menuLink}>
            Головна
          </Link>
        </li>
        <li className={styles.menuContainer__menu__menuItem}>
          <span className="material-icons">pets</span>
          <Link to={ROUTES.result} className={styles.menuLink}>
            Породи
          </Link>
        </li>
        <li className={styles.menuContainer__menu__menuItem}>
          <span className="material-icons">search</span>
          <Link to={ROUTES.filter} className={styles.menuLink}>
            Підібрати
          </Link>
        </li>
        <li className={styles.menuContainer__menu__menuItem}>
          <span className="material-icons">thumbs_up_down</span>
          <Link to={`/comparison/${idsToCompare.join('-')}`} className={styles.menuLink}>
            Порівняти ({idsToCompare.length})
          </Link>
        </li>
        <li className={styles.menuContainer__menu__menuItem}>
          <span className="material-icons">help</span>
          <Link to={ROUTES.quiz} className={styles.menuLink}>
            Чи хороший я власник
          </Link>
        </li>
      </ul>
    </div>
  );
};
