import { useForm } from 'react-hook-form';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ROUTES } from 'shared/constants/routes.constants';
import { Logo } from 'shared/components/logo/logo.component';
import { Select } from './components/select-component/select.component';
import { MealInput } from './components/meal-input/meal-input.component';
import { Radio } from './components/radio-component/radio.component';
import { RootState, Data } from './quiz-page.intarface';
import { quizAction } from 'store/quiz/actions/quiz.action';
import { fetchPetsAsync } from 'store/result/actions/result.actions';
import styles from './quiz-page.module.scss';
import { useHistory } from 'react-router-dom';

import { SliderSection } from '../filter/components/slider-section/slider-section.component';

import dog from '../../images/dog-quiz.svg';

export const QuizPage: React.FC = () => {
  const { register, handleSubmit } = useForm<Data>();

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data: Data): void => {
    dispatch(quizAction(data));

    const location = {
      pathname: '/care',
      search: `?filter:mN=${data.mealNumber}&mW=${data.mealWeight}&mCUp=${data.medChekUp}&wN=${data.walkNumber}&weigth=${data.weight}`,
      state: data,
    };
    history.push(location);
  };

  useEffect(() => {
    dispatch(fetchPetsAsync.request());
  }, []);

  const pets = useSelector((state: RootState) => state.result.resultStore);
  const dogs: any = [];
  pets.forEach(dog => {
    dogs.push(dog.breed);
  });

  const walkNumberValue = ['1 раз', '2 - 3 рази', 'Більше 3-х'];
  const mealNumberValue = ['1 раз', '2 рази', '3 рази', 'Більше 3-х разів'];
  const medChekUpValue = ['1 раз', '1 - 2 рази', 'Більше 2-х'];

  const deltaPositionWeight = 0.0089;

  return (
    <div className={styles.quiz}>
      <Logo />
      <h2 className={styles.quiz__title}>Наскільки добре ви піклуєтесь про свого собаку?</h2>
      <img src={dog} alt="Dog" className={styles.quiz__img} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select name="breed" refAttribute={register} elements={dogs} lable="Порода" />
        <SliderSection
          name="weight"
          refAttribute={register}
          delta={deltaPositionWeight}
          deltaMin={1}
          defaultValue={'0'}
          min="0"
          max="100"
          step="5"
          units="кг"
          lable="Вага"
        />
        <Radio refAttribute={register} name="walkNumber" lable="Кількість вигулювань за день" value={walkNumberValue} />
        <Radio refAttribute={register} name="mealNumber" lable="Кількість прийомів їжі" value={mealNumberValue} />
        <MealInput name={'mealWeight'} refAttribute={register} />
        <Radio refAttribute={register} name="medChekUp" lable="Кількість мед. чекапів за рік" value={medChekUpValue} />
        <Link to={ROUTES.home} className={styles.quiz__submit} onClick={handleSubmit(onSubmit)}>
          Дізнатися результат
        </Link>
      </form>
    </div>
  );
};
