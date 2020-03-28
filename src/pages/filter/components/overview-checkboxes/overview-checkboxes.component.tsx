import React from 'react';
import { InputSwitch } from '../input-switch/input-switch.component';
import { InpSwitch } from '../../../comparison/interfaces/filter.interface';

export const OverviewCheckboxes: React.FC<InpSwitch> = props => {
  return (
    <section className="checkboxes general">
      <label>
        Легко дресерувати
        <InputSwitch name="easyToTrain" refAttribute={props.refAttribute} />
      </label>
      <label>
        Ідеальний для сімї
        <InputSwitch name="family" refAttribute={props.refAttribute} />
      </label>
      <label>
        Підходить для квартири
        <InputSwitch name="apartment" refAttribute={props.refAttribute} />
      </label>
      <label>
        Упс, в мене алергія
        <InputSwitch name="allergy" refAttribute={props.refAttribute} />
      </label>
    </section>
  );
};
