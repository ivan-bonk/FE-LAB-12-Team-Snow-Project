import React from 'react';
import { InputRadioProps } from '../../filter.interface';
import { Slider } from '../slider/slider.component';
import styles from './slider-section.module.scss';

export const SliderSection: React.FC<Partial<InputRadioProps>> = props => {
  return (
    <section className={styles.range__slider}>
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
