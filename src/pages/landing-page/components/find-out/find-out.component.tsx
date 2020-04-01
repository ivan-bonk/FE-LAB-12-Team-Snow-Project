import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../shared/constants/routes.constants'

import img1 from '../../../../images/Landing 3.png';
import dog from './bigl.svg';
import styles from './find-out.module.scss';

export const FindOut: React.FC = () => {
  return (
    <div className={styles.block}>
      <h2 className={styles.block__title}>Дізнайтеся чи правильно ви доглядаєте за соїм улюбленцем</h2>
      <img src={img1} width="200" className={styles.block__img}></img>

      <table className={styles.table}>
        <thead className={styles.table__head}>
          <tr>
            <th className={styles.table__row1}>
              <img src={dog} />
              <span className={styles.table__name}>Бігль</span>
            </th>
            <th className={styles.table__row2}>Дані</th>
            <th className={styles.table__row3}>Норма</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.table__row1}>Вага, кг</td>
            <td className={(styles.table__data, styles.table__data_middle)}>20</td>
            <td>25 - 30</td>
          </tr>
          <tr>
            <td className={styles.table__row1}>Довжина, см</td>
            <td className={(styles.table__data, styles.table__data_good)}>30</td>
            <td>27 - 33</td>
          </tr>
          <tr>
            <td className={styles.table__row1}>Кілкість вигулювань вдень</td>
            <td className={(styles.table__data, styles.table__data_good)}>4</td>
            <td>3-5</td>
          </tr>
          <tr>
            <td className={styles.table__row1}>Кількість прийомів їжі за день</td>
            <td className={(styles.table__data, styles.table__data_bad)}>5</td>
            <td>2-4</td>
          </tr>
        </tbody>
      </table>
      <Link to={ROUTES.home} className={styles.block__link}>
        Дізнатися →
      </Link>
    </div>
  );
};
