import React from 'react';
import { useHistory } from 'react-router-dom';
import { DogImages } from '../dog-images/dog-images.component';
import { DogCharacteristic } from 'shared/components/dog-characteristic/dog-characteristic.component';
import { DogInfoProps } from './dog.interfaces';
import { ROUTES } from 'shared/constants/routes.constants';

import styles from './dog.module.scss';

export const Dog: React.FC<DogInfoProps> = props => {
  const history = useHistory();

  const onDogContainerClick = () => {
    history.push(ROUTES.pet.route(props.id));
  };

  return (
    <div className={styles.dogContainer} onClick={onDogContainerClick}>
      <div className={styles.dogContainer__dogBreed}>
        <h3 className={styles.dogContainer__dogBreed__dogBreedText}>{props.name}</h3>
      </div>
      <DogImages images={props.images} />
      <div className={styles.dogContainer__dogCharacteristicContainer}>
        <DogCharacteristic title="Час догляду" value={`${props.observations.careTime} год/день`} />
        <DogCharacteristic title="Витрати" value={`${props.observations.carePrice} грн`} />
        <DogCharacteristic title="Вартість" value={props.observations.price} />
      </div>
    </div>
  );
};
