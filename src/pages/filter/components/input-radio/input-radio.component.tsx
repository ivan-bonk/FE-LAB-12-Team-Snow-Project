import React from 'react';
import { useSelector } from 'react-redux';
import { InputRadioProps } from '../../filter.interface';
import { RootState } from '../filter-body/bodyFilter.intarface';
import './input-radio.module.scss';

export const InputRadio: React.FC<Partial<InputRadioProps>> = props => {
  const filterData = useSelector((state: RootState) => state.filter);
  let checked = false;
  if (filterData) {
    checked =
      (filterData.timePerMonth === props.value && props.name === 'timePerMonth') ||
      (filterData.petSize === props.value && props.name === 'petSize');
  }

  return (
    <>
      <input
        id={props.id}
        type="radio"
        defaultChecked={checked}
        name={props.name}
        value={props.value}
        ref={props.refAttribute}
      />
      <label htmlFor={props.id}>{props.lable}</label>
    </>
  );
};
