import { useForm } from 'react-hook-form';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ROUTES } from 'shared/constants/routes.constants';
import { Select } from './components/select-component/select.component';
import { MealInput } from './components/meal-input/meal-input.component';
import { Radio } from './components/radio-component/radio.component';
import { RootState, Data } from './quiz-page.intarface';
import { quizAction } from 'store/quiz/actions/quiz.action';
import { fetchPetBreeds } from 'store/quiz/actions/quiz.action';
import styles from './quiz-page.module.scss';
import { useHistory } from 'react-router-dom';

import { SliderSection } from '../filter/components/slider-section/slider-section.component';
import { ErrorHandling } from 'shared/components/error-handling/error-handling.component';

import dog from '../../images/dog-quiz.svg';

export const QuizPage: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Data>();

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data: Data): void => {
    dispatch(quizAction(data));

    const location = {
      pathname: '/care',
      search: `?filter:brd=${data.breed}&mN=${data.mealNumber}&mW=${data.mealWeight}&mCUp=${data.medChekUp}&wN=${data.walkNumber}&weigth=${data.weight}`,
      state: data,
    };
    history.push(location);
  };

  useEffect(() => {
    dispatch(fetchPetBreeds.request());
  }, [dispatch]);

  const breedsList = useSelector((state: RootState) => state.breeds.breeds);
  const error = !!useSelector((state: RootState) => state.result.errors);

  const walkNumberValue = ['1 раз', '2 - 3 рази', 'Більше 3-х'];
  const mealNumberValue = ['1 раз', '2 рази', '3 рази', 'Більше 3-х разів'];
  const medChekUpValue = ['1 раз', '1 - 2 рази', 'Більше 2-х'];

  const deltaPositionWeight = 0.00845;

  return (
    <div className={styles.quiz}>
      {error ? (
        <ErrorHandling />
      ) : (
        <>
          <h2 className={styles.quiz__title}>Наскільки добре ви піклуєтесь про свого собаку?</h2>
          <img src={dog} alt="Dog" className={styles.quiz__img} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Select
              name="breed"
              refAttribute={register({ validate: value => value !== '' })}
              elements={breedsList}
              lable="Порода"
            />
            {errors.breed && <p className={styles.error}>Будь-ласка виберіть породу собаки</p>}

            <SliderSection
              name="weight"
              refAttribute={register({ validate: value => value > 0 })}
              delta={deltaPositionWeight}
              deltaMin={1}
              defaultValue={'0'}
              min="0"
              max="100"
              step="5"
              units="кг"
              lable="Вага"
            />
            {errors.weight && <p className={styles.error}>Будь-ласка виберіть вагу собаки</p>}

            <Radio
              refAttribute={register({ required: true })}
              name="walkNumber"
              lable="Кількість вигулювань за день"
              value={walkNumberValue}
            />
            {errors.walkNumber && <p className={styles.error}>Будь-ласка вкажіть кількість вигулювань за день</p>}

            <Radio
              refAttribute={register({ required: true })}
              name="mealNumber"
              lable="Кількість прийомів їжі"
              value={mealNumberValue}
            />
            {errors.mealNumber && <p className={styles.error}>Будь-ласка вкажіть кількість прийомів їжі на день</p>}

            <MealInput name="mealWeight" refAttribute={register({ required: true, validate: value => value > 0 })} />
            {errors.mealWeight?.type === 'required' && <p className={styles.error}>Будь-ласка вкажіть вагу порції </p>}
            {errors.mealWeight?.type === 'validate' && (
              <p className={styles.error}>Вага порції не може бути менша або рівна нулю !</p>
            )}

            <Radio
              refAttribute={register({ required: true })}
              name="medChekUp"
              lable="Кількість мед. чекапів за рік"
              value={medChekUpValue}
            />
            {errors.medChekUp && <p className={styles.error}>Будь-ласка кількість мед. чекапів за рік</p>}

            <Link to={ROUTES.home} className={styles.quiz__submit} onClick={handleSubmit(onSubmit)}>
              Дізнатися результат
            </Link>
          </form>
        </>
      )}
    </div>
  );
};
