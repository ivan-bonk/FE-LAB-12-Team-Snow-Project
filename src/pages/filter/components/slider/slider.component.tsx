import React, { useState } from 'react';
import { useEffect } from 'react';
import { InputRadioProps } from '../../filter.interface';
import './slider.module.scss';

export const Slider: React.FC<Partial<InputRadioProps>> = props => {
  const [inpValue, setInpValue] = useState(props.defaultValue);
  const [positionValue, setPositionValue] = useState(0);
  const windowsWidth = window.innerWidth > 560 ? 610 : window.innerWidth;

  const handlePostion = (e: React.FormEvent<EventTarget>): void => {
    const target = e.target as HTMLInputElement;

    if (props.delta) {
      setPositionValue(props.delta * parseInt(target.value) * windowsWidth);
      setInpValue(target.value);
    }
  };

  useEffect(() => {
    if (props.delta && props.defaultValue) {
      setPositionValue(props.delta * parseInt(props.defaultValue) * windowsWidth);
    }
  }, []);

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
