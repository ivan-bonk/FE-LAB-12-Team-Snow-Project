import React, { useState } from 'react';
import burger from 'shared/components/header/icons/burger-icon.svg';
import cross from 'shared/components/header/icons/cross-icon.svg';

import { Menu } from '../menu/menu.component';

import styles from './navigation.module.scss';

export const Navigation: React.FC = () => {
  const [navigationMenu, setNavigationMenu] = useState<boolean>(false);
  // let overflow = '';

  const onBurgerClick = () => {
    setNavigationMenu(!navigationMenu);

    const bodyOverflow = document.body.style.overflow;

    document.body.style.overflow = bodyOverflow === 'hidden' ? '' : 'hidden';
  };

  const onLinkClick = () => {
    setNavigationMenu(!navigationMenu);
    document.body.style.overflow = '';
  };

  const renderContent = () => {
    if (navigationMenu) {
      return (
        <>
          <Menu onLinkClick={onLinkClick} />
          <img src={cross} className={styles.icon} alt="burger-menu-icon" onClick={onBurgerClick} />
        </>
      );
    }

    return <img src={burger} className={styles.icon} alt="burger-menu-icon" onClick={onBurgerClick} />;
  };

  return <>{renderContent()}</>;
};
