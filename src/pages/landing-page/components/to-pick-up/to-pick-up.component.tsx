import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/constants/routes.constants';

import img2 from 'images/Landing 2.png';
import dialogs from 'images/dialog.svg';
import styles from './to-pick-up.module.scss';

import { Tooltip, Zoom } from '@material-ui/core';

export const ToPickUp: React.FC = () => {
  return (
    <div className={styles.block}>
      <h2 className={styles.block__title}>Підберіть свого ідеального собаку</h2>
      <img src={img2} width="200" className={styles.block__img} alt="Img"></img>
      <img src={dialogs} className={styles.block__img} alt="Dialogs"></img>
      <Tooltip
        TransitionComponent={Zoom}
        title={<h1 style={{ fontSize: '12px' }}>Підібрати свого ідеального собаку</h1>}
        arrow
      >
        <Link to={ROUTES.result} className={styles.block__link}>
          Підібрати →
        </Link>
      </Tooltip>
    </div>
  );
};
