import React, { useState, useRef } from 'react';
import { Menu } from '../menu/menu.component';
import { useDispatch, useSelector } from 'react-redux';
import {toggleMenu} from 'store/menu/actions/menu.action';
import styles from './navigation.module.scss';
import {RootState} from './navigation.interfaces';

export const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const isMenuOn = useSelector((state: RootState) => state.menu.menuOn);

  const menuRef = useRef<HTMLDivElement>(null);

  const onBurgerClick = () => {
    dispatch(toggleMenu);
  };
  
  const onLinkClick = () => {
    if (document.documentElement.clientWidth < 800) {
      dispatch(toggleMenu);
    }
  };

  const renderContent = () => {
    if (isMenuOn) {
      if (menuRef.current) {
        menuRef.current.style.display = 'initial';
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
      menuRef.current.style.display = 'none';
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
