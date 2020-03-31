import React from 'react';
import { InputRadioProps } from '../../../comparison/interfaces/filter.interface';
import { Slider } from '../slider/slider.component';

export const SliderSection: React.FC<InputRadioProps> = props => {
  return (
    <section className="range-slider">
      <label>{props.lable}</label>
      <Slider
        name={props.name}
        refAttribute={props.refAttribute}
        delta={props.delta}
        min={props.min}
        max={props.max}
        step={props.step}
        units={props.units}
      />
    </section>
  );
};
