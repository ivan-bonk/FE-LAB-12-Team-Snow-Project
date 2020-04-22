import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/constants/routes.constants';

import img1 from 'images/Landing 3.png';
import dog from './bigl.svg';
import styles from './find-out.module.scss';

import { Tooltip, Zoom } from '@material-ui/core';

export const FindOut: React.FC = () => {
  return (
    <div className={styles.block}>
      <h2 className={styles.block__title}>Дізнайтеся чи правильно ви доглядаєте за своїм улюбленцем</h2>
      <div className={styles.block__imgContainer}>
        <img src={img1} width="200" className={styles.block__imgContainer__img} alt="dog with man" />
      </div>

      <div className={styles.block__table}>
        <div className={styles.block__table__header}>
          <div className={styles.block__table__rowElement}>
            <span>
              <img src={dog} alt="Dog" />
            </span>
            <span className={styles.block__table__name}>Бігль</span>
          </div>

          <div className={styles.block__table__colBlock}>
            <span className={styles.block__table__col}>Дані</span>
            <span className={styles.block__table__col}>Норма</span>
          </div>
        </div>

        <div className={styles.block__table__row}>
          <div className={styles.block__table__rowElement}>
            <span>Вага, кг</span>
          </div>
          <div className={styles.block__table__colBlock}>
            <span className={styles.block__table__data_middle}>20</span>
            <span className={styles.block__table__col}>25 - 30</span>
          </div>
        </div>

        <div className={styles.block__table__row}>
          <div className={styles.block__table__rowElement}>
            <span>Довжина, см</span>
          </div>
          <div className={styles.block__table__colBlock}>
            <span className={styles.block__table__data_good}>30</span>
            <span className={styles.block__table__col}>27 - 33</span>
          </div>
        </div>

        <div className={styles.block__table__row}>
          <div className={styles.block__table__rowElement}>
            <span>Кількість вигулювань в день</span>
          </div>
          <div className={styles.block__table__colBlock}>
            <span className={styles.block__table__data_good}>4</span>
            <span className={styles.block__table__col}>3 - 5</span>
          </div>
        </div>

        <div className={styles.block__table__row}>
          <div className={styles.block__table__rowElement}>
            <span>Кількість прийомів їжі за день</span>
          </div>
          <div className={styles.block__table__colBlock}>
            <span className={styles.block__table__data_bad}>5</span>
            <span className={styles.block__table__col}>2 - 4</span>
          </div>
        </div>
      </div>
      <Tooltip
        TransitionComponent={Zoom}
        title={<h1 style={{ fontSize: '12px' }}>Дізнатись чи правильно я доглядаю за своїм улюбленцем</h1>}
        arrow
      >
        <div className={styles.block__linkContainer}>
          <Link to={ROUTES.quiz} className={styles.block__linkContainer__link}>
            Дізнатися →
          </Link>
        </div>
      </Tooltip>
    </div>
  );
};
