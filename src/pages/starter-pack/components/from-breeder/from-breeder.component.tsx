import React from 'react';
import style from './from-breeder.module.scss';

export const FromBreeder: React.FC = () => {
  return (
    <div className={style.fromBreeder}>
      <h2 className={style.fromBreeder__header}>
        <span className={`material-icons ${style.fromBreeder__header__help}`}>help_outline</span>
        <span className={style.fromBreeder__header__title}>Від заводчика</span>
      </h2>
      <div className={style.fromBreeder__infoBlock}>
        <div className={style.fromBreeder__info}>
          <span className={style.fromBreeder__info__title}>Документи</span>
          <span className={style.fromBreeder__info__text}>Паспорт</span>
          <span className={style.fromBreeder__info__text}>Мед. книга</span>
        </div>
        <div className={style.fromBreeder__info}>
          <span className={style.fromBreeder__info__title}>Інформація</span>
          <span className={style.fromBreeder__info__text}>Щеплення</span>
          <span className={style.fromBreeder__info__text}>Здоров&#39;я батьків</span>
        </div>
      <div className={style.fromBreeder__info}>
        <span className={style.fromBreeder__info__title}>Інше</span>
        <span className={style.fromBreeder__info__text}>Корм на перші кілька днів</span>
      </div>
      </div>
    </div>
  );
};
