import React, { useState } from 'react';
import { InpSwitch } from '../../../comparison/interfaces/filter.interface';

export const Slider: React.FC<InpSwitch> = props => {
  const [inpValue, setInpValue] = useState('0');
  const [positionValue, setPositionValue] = useState(0);

  const handlePostion = (e: React.FormEvent<EventTarget>, delta: any): void => {
    const target = e.target as HTMLInputElement;
    setPositionValue(parseInt(target.value) * target.offsetWidth * delta);
    setInpValue(target.value);
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
        onChange={(e): any => {
          handlePostion(e, props.delta);
        }}
      />
    </>
  );
};
