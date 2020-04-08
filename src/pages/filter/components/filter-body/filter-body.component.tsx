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
// import styles from './filter-body.module.scss';

export const FilterBody: React.FC<Partial<BodyProps>> = () => {
  // const { register, handleSubmit, errors } = useForm<Data>();
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

  const deltaPositionTime = 0.00323;
  const deltaPositionMoney = 0.0003;
  const deltaPositionSecurity = 0.0078;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SliderSection
        name="timeWolk"
        refAttribute={register}
        delta={deltaPositionTime}
        defaultValue={filterData ? filterData.timeWolk : '0'}
        min="0"
        max="240"
        step="10"
        units="хв"
        lable="Щодня зможу проводити з ним"
      />

      <SliderSection
        name="moneyPerMonth"
        refAttribute={register}
        delta={deltaPositionMoney}
        defaultValue={filterData ? filterData.moneyPerMonth : '0'}
        min="0"
        max="2500"
        step="50"
        units="грн"
        lable="На місяць зможу витрачати максимум"
      />

      <TimePerMonthCheckboxes refAttribute={register()} />
      {/* <TimePerMonthCheckboxes refAttribute={register({ required: true })} /> */}
      {/* {errors.timePerMonth && <p className={styles.error}>Будь-ласка виберіть час який зможете приділяти собаці </p>} */}

      <SliderSection
        name="securityLevel"
        refAttribute={register}
        delta={deltaPositionSecurity}
        defaultValue={filterData ? filterData.securityLevel : '0'}
        min="0"
        max="100"
        step="1"
        units="%"
        lable="Захисник та охоронець на"
      />

      <PetSizeCheckboxes refAttribute={register()} />
      {/* <PetSizeCheckboxes refAttribute={register({ required: true })} /> */}
      {/* {errors.petSize && <p className={styles.error}>Будь-ласка виберіть розмір собаки</p>} */}

      <OverviewCheckboxes refAttribute={register} />

      <Button className="btn btn__apply" text="Застосувати" onClick={handleSubmit(onSubmit)} />
      <Button className="btn btn__cancel" text="Назад" onClick={goBack} />
    </form>
  );
};
