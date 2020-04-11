import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { filterAction } from 'store/filter/actions/filter.action';
import { OverviewCheckboxes } from '../overview-checkboxes/overview-checkboxes.component';
import { PetSizeCheckboxes } from '../petSize-checkboxes/petSize-checkboxes.component';
import { SliderSection } from '../slider-section/slider-section.component';
import { TimePerMonthCheckboxes } from '../timePerMonth-checkboxes/timePerMonth-checkboxes.component';
import { Button } from '../button/button.component';
import { BodyProps, Data, RootState } from './bodyFilter.intarface';

export const FilterBody: React.FC<Partial<BodyProps>> = () => {
  const { register, handleSubmit } = useForm<Data>();
  const dispatch = useDispatch();
  const history = useHistory();
  const filterData = useSelector((state: RootState) => state.filter);

  const goBack = (): void => {
    dispatch(filterAction(null));
    history.push('/result');
  };
  const onSubmit = (data: Data): void => {
    dispatch(filterAction(data));
    history.push('/result');
  };

  const deltaPositionTime = 0.0038;
  const deltaMinTime = 40;
  const deltaPositionMoney = 0.000345;
  const deltaMinMoney = 360;
  const deltaPositionSecurity = 0.0096;
  const deltaMinSecurity = 20;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SliderSection
        name="timeWolk"
        refAttribute={register}
        delta={deltaPositionTime}
        deltaMin={deltaMinTime}
        defaultValue={filterData ? filterData.timeWolk : deltaMinTime.toString()}
        min="40"
        max="240"
        step="10"
        units="хв"
        lable="Щодня зможу проводити з ним"
      />

      <SliderSection
        name="moneyPerMonth"
        refAttribute={register}
        delta={deltaPositionMoney}
        deltaMin={deltaMinMoney}
        defaultValue={filterData ? filterData.moneyPerMonth : deltaMinMoney.toString()}
        min="360"
        max="2500"
        step="20"
        units="грн"
        lable="На місяць зможу витрачати максимум"
      />

      <TimePerMonthCheckboxes refAttribute={register} />

      <SliderSection
        name="securityLevel"
        refAttribute={register}
        delta={deltaPositionSecurity}
        deltaMin={deltaMinSecurity}
        defaultValue={filterData ? filterData.securityLevel : deltaMinSecurity.toString()}
        min="20"
        max="100"
        step="1"
        units="%"
        lable="Захисник та охоронець на"
      />

      <PetSizeCheckboxes refAttribute={register} />

      <OverviewCheckboxes refAttribute={register} />

      <Button className="btn btn__apply" text="Застосувати" onClick={handleSubmit(onSubmit)} />
      <Button className="btn btn__cancel" text="Назад" onClick={goBack} />
    </form>
  );
};
