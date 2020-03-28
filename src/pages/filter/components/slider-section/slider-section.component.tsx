import React from 'react';
import { InpSwitch } from '../../../comparison/interfaces/filter.interface';
import { Slider } from '../slider/slider.component';

export const SliderSection: React.FC<InpSwitch> = props => {
  // const [time, setTime] = useState('0');
  // const [posTime, setPosTime] = useState(0);

  // const handlePostion = (e: React.FormEvent<EventTarget>, delta: any): void => {
  //   const target = e.target as HTMLInputElement;
  //   setPosTime(parseInt(target.value) * target.offsetWidth * delta);
  //   setTime(target.value);
  // };

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

{
  /* <output htmlFor="timeWolk" style={{ left: `${posTime}px` }}>
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
  handlePostion(e, props.delta);
}}
/> */
}
