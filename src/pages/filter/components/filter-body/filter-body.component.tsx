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

  const deltaPositionTime = 0.00415;
  const deltaMinTime = 55;
  const deltaPositionMoney = 0.000345;
  const deltaMinMoney = 340;
  const deltaPositionSecurity = 0.00955;
  const deltaMinSecurity = 19;

  const goBack = (): void => {
    dispatch(filterAction(null));
    history.push('/result');
  };

  const checkTouch = (data: string, delta: number) => {
    if (parseInt(data) === delta) {
      return '0';
    } else {
      return data;
    }
  };

  const setDefaultValue = (value: string, delta: number) => {
    if (filterData) {
      return value === '0' ? delta.toString() : value;
    }
  };

  const onSubmit = (data: Data): void => {
    data.timeWolk = checkTouch(data.timeWolk, deltaMinTime);
    data.moneyPerMonth = checkTouch(data.moneyPerMonth, deltaMinMoney);
    data.securityLevel = checkTouch(data.securityLevel, deltaMinSecurity);

    dispatch(filterAction(data));

    const location = {
      pathname: '/result',
      search: `?filter:tW=${data.timeWolk}&mPM=${data.moneyPerMonth}&tPM=${data.timePerMonth}&sLv=${data.securityLevel}&pS=${data.petSize}&eTT=${data.easyToTrain}&fml=${data.family}&aprt=${data.apartment}&alrg=${data.allergy}`,
      state: { filter: data },
    };
    history.push(location);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SliderSection
        name="timeWolk"
        refAttribute={register}
        delta={deltaPositionTime}
        deltaMin={deltaMinTime}
        defaultValue={filterData ? setDefaultValue(filterData.timeWolk, deltaMinTime) : deltaMinTime.toString()}
        min="55"
        max="240"
        step="5"
        units="хв"
        lable="Щодня зможу проводити з ним"
      />

      <SliderSection
        name="moneyPerMonth"
        refAttribute={register}
        delta={deltaPositionMoney}
        deltaMin={deltaMinMoney}
        defaultValue={filterData ? setDefaultValue(filterData.moneyPerMonth, deltaMinMoney) : deltaMinMoney.toString()}
        min="340"
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
        defaultValue={
          filterData ? setDefaultValue(filterData.securityLevel, deltaMinSecurity) : deltaMinSecurity.toString()
        }
        min="19"
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
