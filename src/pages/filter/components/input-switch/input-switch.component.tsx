import React from 'react';
import { useSelector } from 'react-redux';
import { InputRadioProps } from '../../filter.interface';
import { RootState } from '../filter-body/bodyFilter.intarface';
import style from './input-switch.module.scss';

export const InputSwitch: React.FC<Partial<InputRadioProps>> = props => {
  const filterData = useSelector((state: RootState) => state.filter);
  let checked = false;
  if (filterData) {
    checked =
      (filterData.easyToTrain && props.name === 'easyToTrain') ||
      (filterData.family && props.name === 'family') ||
      (filterData.apartment && props.name === 'apartment') ||
      (filterData.allergy && props.name === 'allergy');
  }

  return (
    <div className={style.switch}>
      <input type="checkbox" name={props.name} ref={props.refAttribute} defaultChecked={checked} />
      <span className={style.slider}></span>
    </div>
  );
};
