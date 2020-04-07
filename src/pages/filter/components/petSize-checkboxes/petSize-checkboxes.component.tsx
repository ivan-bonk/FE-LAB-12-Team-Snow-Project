import React from 'react';
import { InputRadio } from '../input-radio/input-radio.component';
import { InputRadioProps } from '../../filter.interface';

export const PetSizeCheckboxes: React.FC<Partial<InputRadioProps>> = props => {
  return (
    <>
      <h2>Розмір собаки</h2>
      <section className="checkboxes form_radio_group">
        <InputRadio id="radio-5" name="petSize" lable="Any" value="any" refAttribute={props.refAttribute} />
        <InputRadio id="radio-6" name="petSize" lable="S" value="low" refAttribute={props.refAttribute} />
        <InputRadio id="radio-7" name="petSize" lable="M" value="average" refAttribute={props.refAttribute} />
        <InputRadio id="radio-8" name="petSize" lable="L" value="high" refAttribute={props.refAttribute} />
      </section>
    </>
  );
};
