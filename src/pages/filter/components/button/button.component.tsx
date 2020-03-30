import React from 'react';
import { Buttons } from '../../../comparison/interfaces/filter.interface';

export const Button: React.FC<Buttons> = props => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.text}
    </button>
  );
};
