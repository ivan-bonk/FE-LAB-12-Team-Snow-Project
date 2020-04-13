import React, { useState } from 'react';
import burger from 'shared/components/header/icons/burger-icon.svg';
import cross from 'shared/components/header/icons/cross-icon.svg';

import { Menu } from '../menu/menu.component';

import styles from './navigation.module.scss';

export const Navigation: React.FC = () => {
  const [navigationMenu, setNavigationMenu] = useState<boolean>(false);

  const onBurgerClick = () => {
    setNavigationMenu(!navigationMenu);
  };

  const renderContent = () => {
    if (navigationMenu) {
      return (
        <>
          <Menu />
          <img src={cross} className={styles.icon} alt="burger-menu-icon" onClick={onBurgerClick} />
        </>
      );
    }

    return <img src={burger} className={styles.icon} alt="burger-menu-icon" onClick={onBurgerClick} />;
  };

  return <>{renderContent()}</>;
};
