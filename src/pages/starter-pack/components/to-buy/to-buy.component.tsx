import React from 'react';
import style from './to-buy.module.scss';
import { ToBuyProps } from './to-buy.interface';

export const ToBuy: React.FC<ToBuyProps> = props => {
  const {
    observations: { height },
  } = props;

  const widthCof = 0.9;
  const heightNumber: RegExpMatchArray | null = height.match(/\d{1,2}/);
  const petWidth: number = Math.floor(parseInt(`${heightNumber}`) / widthCof);

  return (
    <div className={style.toBuy}>
      <h2 className={style.toBuy__header}>
        <span className={`material-icons ${style.toBuy__header__cart}`}>shopping_cart</span>
        <span className={style.toBuy__header__title}>Придбати</span>
      </h2>
      <ul className={style.toBuy__list}>
        <li className={style.toBuy__element}>
          <span className={style.toBuy__element__title}>Лежак для собаки</span>
          <span className={style.toBuy__element__definition}>Довжина від {petWidth} см</span>
        </li>
        <li className={style.toBuy__element}>
          <span className={style.toBuy__element__title}>Миски</span>
          <span className={style.toBuy__element__definition}>2 штуки - вода/корм</span>
        </li>
        <li className={style.toBuy__element}>
          <span className={style.toBuy__element__title}>Корм для цуценят</span>
          <span className={style.toBuy__element__definition}>1 кг</span>
        </li>
        <li className={style.toBuy__element}>
          <span className={style.toBuy__element__title}>Пеленки/лоток</span>
          <span className={style.toBuy__element__definition}>10 штук</span>
        </li>
        <li className={style.toBuy__element}>
          <span className={style.toBuy__element__title}>Іграшки</span>
          <span className={style.toBuy__element__definition}>М'ячик, кісточка</span>
        </li>
        <li className={style.toBuy__element}>
          <span className={style.toBuy__element__title}>Смаколики</span>
          <span className={style.toBuy__element__definition}>Будь-які</span>
        </li>
      </ul>
    </div>
  );
};
