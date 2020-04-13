import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/constants/routes.constants';

import styles from './menu.module.scss';

interface MenuProps {
  onLinkClick(): void;
}

export const Menu: React.FC<MenuProps> = props => {
  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menuContainer__menu} onClick={props.onLinkClick}>
        <li className={styles.menuContainer__menu__menuItem}>
          <Link to={ROUTES.home} className={styles.menuLink}>
            Головна
          </Link>
        </li>
        <li className={styles.menuContainer__menu__menuItem}>
          <Link to={ROUTES.result} className={styles.menuLink}>
            Породи
          </Link>
        </li>
        <li className={styles.menuContainer__menu__menuItem}>
          <Link to={ROUTES.filter} className={styles.menuLink}>
            Підібрати
          </Link>
        </li>
        <li className={styles.menuContainer__menu__menuItem}>
          <Link to={ROUTES.comparison} className={styles.menuLink}>
            Порівняти
          </Link>
        </li>
        <li className={styles.menuContainer__menu__menuItem}>
          <Link to={ROUTES.quiz} className={styles.menuLink}>
            Чи хороший я власник
          </Link>
        </li>
      </ul>
    </div>
  );
};
