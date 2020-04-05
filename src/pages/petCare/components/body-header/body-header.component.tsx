import React from 'react';
import styles from './body-header.module.scss';
import { CareBodyProps } from '../care-body/careBody.interface';

export const BodyHeader: React.FC<CareBodyProps> = props => {
  let url;
  const getUrl = () => {
    if (props.pet.imgUrl !== undefined) {
      url = props.pet.imgUrl;
    }
  };

  getUrl();
  return (
    <div className={styles.bodyHeader}>
      <h2 className={styles.bodyHeader__title}>Акіта</h2>
      <img src={url} className={styles.bodyHeader__img} alt="dog" />
    </div>
  );
};
