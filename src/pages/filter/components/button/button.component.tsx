import React from 'react';
import { ButtonProps } from './button.interface';
import './button.module.scss';

export const Button: React.FC<ButtonProps> = props => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.text}
    </button>
  );
};
