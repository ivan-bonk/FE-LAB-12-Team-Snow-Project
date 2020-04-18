import React, { useState, useRef } from 'react';
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
  const menuRef = useRef<HTMLDivElement>(null);

  const onBurgerClick = () => {
    setNavigationMenu(!navigationMenu);

    setAppStyles(document.body.style.overflow);
  };

  const onLinkClick = () => {
    if (document.documentElement.clientWidth < 800) {
      setNavigationMenu(!navigationMenu);

      setAppStyles('hidden');
    }
  };

  const renderContent = () => {
    if (navigationMenu) {
      if (menuRef.current) {
        menuRef.current!.style.display = 'initial';
      }

      return (
        <>
          <span className={`${styles.icon} material-icons`} onClick={onBurgerClick}>
            close
          </span>
        </>
      );
    }

    if (menuRef.current && document.documentElement.clientWidth < 800) {
      menuRef.current!.style.display = 'none';
    }

    return (
      <span className={`${styles.icon} material-icons`} onClick={onBurgerClick}>
        menu
      </span>
    );
  };

  return (
    <>
      <div className={styles.menu} ref={menuRef}>
        <Menu onLinkClick={onLinkClick} />
      </div>
      {renderContent()}
    </>
  );
};
