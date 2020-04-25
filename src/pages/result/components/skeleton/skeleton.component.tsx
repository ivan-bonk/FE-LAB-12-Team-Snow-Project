import React from 'react';
import { Skeleton } from '@material-ui/lab';

import styles from './skeleton.module.scss';

export const ResultSkeleton: React.FC = () => {
  return (
    <div className={styles.skeleton}>
      <Skeleton variant="rect" animation="wave" height={400} className={styles.skeleton__dog}>
        <Skeleton variant="text" width="100%" height={40} className={styles.skeleton__dog__item} />
        <Skeleton variant="rect" width="100%" height="62%" className={`${styles.skeleton__dog__item} ${styles.mt10}`} />
        <Skeleton variant="text" width="80%" height={60} className={styles.skeleton__dog__item} />
        <Skeleton variant="rect" width={175} height={35} className={styles.button} />
      </Skeleton>
      <Skeleton variant="rect" animation="wave" height={400} className={styles.skeleton__dog}>
        <Skeleton variant="text" width="100%" height={40} className={styles.skeleton__dog__item} />
        <Skeleton variant="rect" width="100%" height="62%" className={`${styles.skeleton__dog__item} ${styles.mt10}`} />
        <Skeleton variant="text" width="80%" height={60} className={styles.skeleton__dog__item} />
        <Skeleton variant="rect" width={175} height={35} className={styles.button} />
      </Skeleton>
      <Skeleton variant="rect" animation="wave" height={400} className={styles.skeleton__dog}>
        <Skeleton variant="text" width="100%" height={40} className={styles.skeleton__dog__item} />
        <Skeleton variant="rect" width="100%" height="62%" className={`${styles.skeleton__dog__item} ${styles.mt10}`} />
        <Skeleton variant="text" width="80%" height={60} className={styles.skeleton__dog__item} />
        <Skeleton variant="rect" width={175} height={35} className={styles.button} />
      </Skeleton>
    </div>
  );
};
