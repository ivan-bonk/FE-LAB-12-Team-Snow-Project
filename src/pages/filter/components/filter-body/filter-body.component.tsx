import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { filterAction } from 'store/filter/actions/filter.action';
import { OverviewCheckboxes } from '../overview-checkboxes/overview-checkboxes.component';
import { PetSizeCheckboxes } from '../petSize-checkboxes/petSize-checkboxes.component';
import { SliderSection } from '../slider-section/slider-section.component';
import { TimePerMonthCheckboxes } from '../timePerMonth-checkboxes/timePerMonth-checkboxes.component';
import { Button } from '../button/button.component';
import { BodyProps, Data } from './bodyFilter.intarface';
import styles from './filter-body.module.scss';

export const FilterBody: React.FC<Partial<BodyProps>> = () => {
  const { register, handleSubmit, errors } = useForm<Data>();
  const dispatch = useDispatch();
  const history = useHistory();

  const goBack = (): void => {
    dispatch(filterAction(null));
    history.push('/result');
  };
  const onSubmit = (data: Data): void => {
    dispatch(filterAction(data));
    history.push('/result');
  };

  const deltaPositionTime = 0.0155;
  const deltaPositionMoney = 0.00089;
  const deltaPositionSecurity = 0.0093;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SliderSection
        name="timeWolk"
        refAttribute={register}
        delta={deltaPositionTime}
        min="0"
        max="60"
        step="1"
        units="хв"
        lable="Щодня зможу проводити з ним"
      />

      <SliderSection
        name="moneyPerMonth"
        refAttribute={register}
        delta={deltaPositionMoney}
        min="0"
        max="1000"
        step="50"
        units="грн"
        lable="На місяць зможу витрачати максимум"
      />

      <TimePerMonthCheckboxes refAttribute={register({ required: true })} />
      {errors.timePerMonth && <p className={styles.error}>Будь-ласка виберіть час який зможете приділяти собаці </p>}

      <SliderSection
        name="securityLevel"
        refAttribute={register}
        delta={deltaPositionSecurity}
        min="0"
        max="100"
        step="1"
        units="%"
        lable="Захисник та охоронець на"
      />

      <PetSizeCheckboxes refAttribute={register({ required: true })} />
      {errors.petSize && <p className={styles.error}>Будь-ласка виберіть розмір собаки</p>}

      <OverviewCheckboxes refAttribute={register} />

      <Button className="btn btn__apply" text="Застосувати" onClick={handleSubmit(onSubmit)} />
      <Button className="btn btn__cancel" text="Назад" onClick={goBack} />
    </form>
  );
};
