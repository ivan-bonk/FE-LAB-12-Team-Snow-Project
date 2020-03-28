import React from 'react';
import { InpSwitch } from '../../../comparison/interfaces/filter.interface';

export const InputSwitch: React.FC<InpSwitch> = props => {
  return (
    <div className="switch">
      <input type="checkbox" name={props.name} ref={props.refAttribute} />
      <span className="slider"></span>
    </div>
  );
};
