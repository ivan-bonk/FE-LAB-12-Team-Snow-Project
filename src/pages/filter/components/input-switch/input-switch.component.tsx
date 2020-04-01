import React from 'react';
import { InputRadioProps } from '../../../comparison/interfaces/filter.interface';

export const InputSwitch: React.FC<Partial<InputRadioProps>> = props => {
  return (
    <div className="switch">
      <input type="checkbox" name={props.name} ref={props.refAttribute} />
      <span className="slider"></span>
    </div>
  );
};
