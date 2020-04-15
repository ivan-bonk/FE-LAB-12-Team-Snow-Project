import React, { useState } from 'react';
import burger from 'shared/components/header/icons/burger-icon.svg';
import cross from 'shared/components/header/icons/cross-icon.svg';

import { Menu } from '../menu/menu.component';

import styles from './navigation.module.scss';

const setAppStyles = (overflow: string) => {
  // I don't know how to override 'as' syntax yet
  const appWrapper = document.querySelector('#app-wrapper') as HTMLElement;

  if (overflow === 'hidden') {
    document.body.style.overflow = '';
    appWrapper.style.filter = '';
  } else {
    document.body.style.overflow = 'hidden';
    appWrapper.style.filter = 'blur(4px)';
  }
};

export const Navigation: React.FC = () => {
  const [navigationMenu, setNavigationMenu] = useState<boolean>(false);

  const onBurgerClick = () => {
    setNavigationMenu(!navigationMenu);

    setAppStyles(document.body.style.overflow);
  };

  const onLinkClick = () => {
    setNavigationMenu(!navigationMenu);

    setAppStyles('hidden');
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
