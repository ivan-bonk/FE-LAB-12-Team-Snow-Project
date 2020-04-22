import React from 'react';
import style from './content-wrapper.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {menuOff} from 'store/menu/actions/menu.action';
import {RootState} from './content-wrapper.interfaces';



export const ContentWrapper: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const isMenuOn = useSelector((state: RootState) => state.menu.menuOn);
  const screenWidth = document.documentElement.clientWidth;
  const showDiv = isMenuOn&&screenWidth < 800;
  const handleClick = () => {
    if( screenWidth < 800) {
      dispatch(menuOff);
    }
  }
  
  return (
<div className={showDiv ? style.show : style.hide} id="app-wrapper" onClick={handleClick}>
</div>
  );
};