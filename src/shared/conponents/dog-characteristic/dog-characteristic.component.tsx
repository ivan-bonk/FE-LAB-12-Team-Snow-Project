import React from 'react';
import { PetCharacteristic } from './dog-characteristics.interfaces';

import styles from './dog-characteristic.module.scss';

export const DogCharacteristic: React.FC<PetCharacteristic> = (props): React.ReactElement => {
  return (
    <div className={styles.characteristicContainer}>
      <p className={styles.characteristicContainer__characteristicTitle}>{props.title}</p>
      <p className={styles.characteristicContainer__characteristicValue}>{props.value}</p>
    </div>
  );
};
