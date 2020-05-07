import React, { useState, useEffect } from 'react';
import { InputRadioProps } from 'pages/filter/filter.interface';
import './slider.module.scss';

export const Slider: React.FC<Partial<InputRadioProps>> = props => {
  const [inpValue, setInpValue] = useState(() => props.defaultValue);
  const [positionValue, setPositionValue] = useState(() => 0);

  const handlePostion = (e: React.FormEvent<EventTarget>): void => {
    const target = e.target as HTMLInputElement;

    if (props.delta && props.deltaMin) {
      setPositionValue((parseInt(target.value) - props.deltaMin) / props.delta);
      setInpValue(target.value);
    }
  };

  const outputValue = () => {
    return inpValue === props.min ? `Не обрано` : `${inpValue} ${props.units}`;
  };

  useEffect(() => {
    if (props.delta && props.defaultValue && props.deltaMin) {
      setPositionValue((parseInt(props.defaultValue) - props.deltaMin) / props.delta);
    }
  }, []);

  return (
    <>
      <output htmlFor="timeWolk" style={{ left: `${positionValue}%` }}>
        {outputValue()}
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
