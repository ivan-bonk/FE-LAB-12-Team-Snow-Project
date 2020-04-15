import React from 'react';
import styles from './body-header.module.scss';
import { CareBodyProps } from '../care-body/careBody.interface';

export const BodyHeader: React.FC<CareBodyProps> = props => {
  let url;
  let petBreed = '';
  const getUrl = () => {
    if (props.pet.imgUrl !== undefined) {
      url = props.pet.imgUrl[0];
      petBreed = props.pet.breed!;
    }
  };

  getUrl();
  return (
    <div className={styles.bodyHeader}>
      <h2 className={styles.bodyHeader__title}>{petBreed}</h2>
      <img src={url} className={styles.bodyHeader__img} alt="dog" />
    </div>
  );
};
