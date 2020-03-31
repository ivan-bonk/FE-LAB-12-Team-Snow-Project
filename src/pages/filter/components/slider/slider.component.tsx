import React, { useState } from 'react';
import { InputRadioProps } from '../../../comparison/interfaces/filter.interface';
import './slider.scss';

export const Slider: React.FC<InputRadioProps> = props => {
  const [inpValue, setInpValue] = useState('0');
  const [positionValue, setPositionValue] = useState(0);

  const handlePostion = (e: React.FormEvent<EventTarget>): void => {
    const target = e.target as HTMLInputElement;
    if (props.delta) {
      setPositionValue(props.delta * parseInt(target.value) * target.offsetWidth);
      setInpValue(target.value);
    }
  };

  return (
    <>
      <output htmlFor="timeWolk" style={{ left: `${positionValue}px` }}>
        {inpValue}
        {props.units}
      </output>
      <input
        type="range"
        name={props.name}
        ref={props.refAttribute}
        min={props.min}
        max={props.max}
        step={props.step}
        value={inpValue}
        onChange={(e): void => {
          handlePostion(e);
        }}
      />
    </>
  );
};
