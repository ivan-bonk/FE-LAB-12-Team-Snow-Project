import React from 'react';
import { InputRadioProps } from '../../filter.interface';
import style from './input-switch.module.scss';

export const InputSwitch: React.FC<Partial<InputRadioProps>> = props => {
  return (
    <div className={style.switch}>
      <input type="checkbox" name={props.name} ref={props.refAttribute} />
      <span className={style.slider}></span>
    </div>
  );
};
