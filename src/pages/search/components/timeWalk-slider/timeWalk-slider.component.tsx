import React, { useState } from 'react';
import { InpSwitch } from '../../../comparison/interfaces/filter.interface';

export const TimeWalkSlider: React.FC<InpSwitch> = props => {
  const [time, setTime] = useState('0');
  const [posTime, setPosTime] = useState(0);

  const handlePostionT = (e: React.FormEvent<EventTarget>, delta: any): void => {
    const target = e.target as HTMLInputElement;
    setPosTime(parseInt(target.value) * target.offsetWidth * delta);
    setTime(target.value);
  };

  return (
    <section className="range-slider">
      <label>{props.lable}</label>
      <output htmlFor="timeWolk" style={{ left: `${posTime}px` }}>
        {time}
        {props.units}
      </output>
      <input
        type="range"
        name={props.name}
        ref={props.refAttribute}
        min={props.min}
        max={props.max}
        step={props.step}
        value={time}
        onChange={(e): any => {
          handlePostionT(e, props.delta);
        }}
      />
    </section>
  );
};
