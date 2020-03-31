import React from 'react';
import { InputRadioProps } from '../../../comparison/interfaces/filter.interface';

export const InputRadio: React.FC<Partial<InputRadioProps>> = props => {
  return (
    <>
      <input id={props.id} type="radio" name={props.name} value={props.value} ref={props.refAttribute} />
      <label htmlFor={props.id}>{props.lable}</label>
    </>
  );
};
