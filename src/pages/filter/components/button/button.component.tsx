import React from 'react';
import { ButtonProps } from '../../../comparison/interfaces/filter.interface';
import './button.scss';

export const Button: React.FC<ButtonProps> = props => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.text}
    </button>
  );
};
