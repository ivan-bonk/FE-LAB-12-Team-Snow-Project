import React from 'react';
import { InputRadio } from '../input-radio/input-radio.component';

import { InpSwitch } from '../../../comparison/interfaces/filter.interface';

export const PetSizeCheckboxes: React.FC<InpSwitch> = props => {
  return (
    <section className="checkboxes form_radio_group">
      <InputRadio id="radio-5" name="petSize" lable="Любий" value="any" refAttribute={props.refAttribute} />
      <InputRadio id="radio-6" name="petSize" lable="S" value="low" refAttribute={props.refAttribute} />
      <InputRadio id="radio-7" name="petSize" lable="M" value="averege" refAttribute={props.refAttribute} />
      <InputRadio id="radio-8" name="petSize" lable="L" value="high" refAttribute={props.refAttribute} />
    </section>
  );
};