import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { searchAction } from '../../../../store/actions/filter.action';
import { OverviewCheckboxes } from '../overview-checkboxes/overview-checkboxes.component';
import { PetSizeCheckboxes } from '../petSize-checkboxes/petSize-checkboxes.component';
import { SliderSection } from '../slider-section/slider-section.component';
import { TimePerMonthCheckboxes } from '../timePerMonth-checkboxes/timePerMonth-checkboxes.component';
import { Body } from '../../../comparison/interfaces/filter.interface';

export const FilterBody: React.FC<Body> = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const goHome = (): void => {
    dispatch(searchAction({}));
    history.push('/');
  };
  const onSubmit = (data: {}): void => {
    dispatch(searchAction(data));
    history.push('/result');
  };

  const _deltaPositionTime = 0.0155;
  const _deltaPositionMoney = 0.00087;
  const _deltaPositionSecurity = 0.0093;

  return (
    <span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SliderSection
          name="timeWolk"
          refAttribute={register}
          delta={_deltaPositionTime}
          min="0"
          max="60"
          step="1"
          units="хв"
          lable="Щодня зможу проводити з ним"
        />

        <SliderSection
          name="moneyPerMonth"
          refAttribute={register}
          delta={_deltaPositionMoney}
          min="0"
          max="1000"
          step="50"
          units="грн"
          lable="На місяць зможу витрачати максимум"
        />

        <h2>Зможу осилити час догляду</h2>

        <TimePerMonthCheckboxes refAttribute={register({ required: true })} />
        {/* {errors.exampleRequired && <span>This field is required</span>} */}

        <SliderSection
          name="securityLevel"
          refAttribute={register}
          delta={_deltaPositionSecurity}
          min="0"
          max="100"
          step="1"
          units="%"
          lable="Захисник та охоронець на"
        />

        <h2>Розмір собаки</h2>
        <PetSizeCheckboxes refAttribute={register} />
        <OverviewCheckboxes refAttribute={register} />
        <button type="submit" className="btn btn-apply">
          Застосувати
        </button>
        <button className="btn btn-cancel" onClick={goHome}>
          Назад
        </button>
      </form>
    </span>
  );
};
