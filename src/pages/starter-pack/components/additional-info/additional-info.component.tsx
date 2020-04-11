import React, { useState } from 'react';
import style from './additional-info.module.scss';

export const AdditionalInfo: React.FC = () => {
  const [vaccination, setVaccination] = useState(false);
  const [food, setFood] = useState(false);
  const [walk, setWalk] = useState(false);

  const toggle = (callback: any, block: boolean) => {
    callback(!block);
  };

  return (
    <div className={style.additional}>
      <h2 className={style.additional__header}>
        <span className={`material-icons ${style.additional__header__info}`}>info</span>
        <span className={style.additional__header__title}>Додаткова інформація</span>
      </h2>

      <div className={style.additional__block}>
        <div className={style.additional__block__header} onClick={() => toggle(setVaccination, vaccination)}>
          <span className={`material-icons ${style.additional__block__arrow}`}>
            {vaccination ? 'expand_less' : 'expand_more'}
          </span>
          <span className={style.additional__block__title}>Щеплення</span>
        </div>
        {vaccination && (
          <div className={style.additional__block__info}>
            <p>Кожна собака повинна отримати 3 щеплення :</p>
            <ol>
              <li>У віці близько 2 місяців</li>
              <li>3 тижні після першого щеплення</li>
              <li>Рік після другого щеплення</li>
            </ol>
            <p> Інформацію про щеплення обов’язково записувати в медичну книжку.</p>
          </div>
        )}
      </div>

      <div className={style.additional__block}>
        <div className={style.additional__block__header} onClick={() => toggle(setFood, food)}>
          <span className={`material-icons ${style.additional__block__arrow}`}>
            {food ? 'expand_less' : 'expand_more'}
          </span>
          <span className={style.additional__block__title}>Годування</span>
        </div>
        {food && (
          <div className={style.additional__block__info}>
            <p>
              Перших кілька днів рекомендовано годувати собаку тим кормом, який Вам дав заводчик, для того, щоб собака
              пройшла адаптацію до нового дому без додаткового стресу.
            </p>
            <p>
              Підбираючи новий корм, необхідно звернути увагу, чи підходить він для цуценят. Вага денної порції завжди
              вказана на упаковці і залежить від віку, ваги та активності вашого улюбленця.
            </p>
          </div>
        )}
      </div>

      <div className={style.additional__block}>
        <div className={style.additional__block__header} onClick={() => toggle(setWalk, walk)}>
          <span className={`material-icons ${style.additional__block__arrow}`}>
            {walk ? 'expand_less' : 'expand_more'}
          </span>
          <span className={style.additional__block__title}>Вигул</span>
        </div>
        {walk && (
          <div className={style.additional__block__info}>
            <p>
              Починати вигулювати собаку необхідно 10 днів після другого щеплення. Весь час до цього моменту Ваш собака
              знаходиться на карантині і ходить в туалет на спеціальні пеленки/лоточок.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
