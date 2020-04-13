import { useForm } from 'react-hook-form';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../shared/constants/routes.constants';
import { Logo } from '../../shared/logo/logo.component';
import { Select } from './components/select-component/select.component';
import { Radio } from './components/radio-component/radio.component';
import { RootState, Data } from './quiz-page.intarface';
import { quizAction } from '../../store/quiz/actions/quiz.action';
import { fetchPetsAsync } from '../../store/result/actions/result.actions';
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
    history.push('/care');
  };

  useEffect(() => {
    dispatch(fetchPetsAsync.request());
  }, []);

  const pets = useSelector((state: RootState) => state.result.resultStore);
  const dogs: any = [];
  pets.forEach(dog => {
    dogs.push(dog.breed);
  });

  const deltaPositionWeight = 0.0093;

  return (
    <div className={styles.quiz}>
      <Logo />
      <h2 className={styles.quiz__title}>На скільки добре ви піклуєтесь про свого собаку?</h2>
      <img src={dog} alt="Dog" className={styles.quiz__img} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select name="breed" refAttribute={register} elements={dogs} lable="Порода" />
        <div>
          <p>Дата народження</p>
          <input type="date" ref={register} name="birth" className={styles.date} />
        </div>
        <SliderSection
          name="weight"
          refAttribute={register}
          delta={deltaPositionWeight}
          min="0"
          max="100"
          step="5"
          units="кг"
          lable="Вага"
        />
        <Radio
          refAttribute={register}
          name="walkNumber"
          lable="Кількість вигулювань за день"
          value={['1 раз', '2 - 3 рази', 'Більше 3-х']}
        />
        <Radio
          refAttribute={register}
          name="mealNumber"
          lable="Кількість прийомів їжі"
          value={['1 раз', '2 рази', '3 рази', 'Більше 3-х разів']}
        />
        <Select
          name="mealWeight"
          refAttribute={register}
          elements={['100', '200', '300', '400']}
          lable="Кількість їжі на порцію(гр.)"
        />
        <Radio
          refAttribute={register}
          name="medChekUp"
          lable="Кількість мед. чекапів за рік"
          value={['1 раз', '1 - 2 рази', 'Більше 2-х']}
        />
        <Link to={ROUTES.home} className={styles.quiz__submit} onClick={handleSubmit(onSubmit)}>
          Дізнатися результат
        </Link>
      </form>
    </div>
  );
};
