import React from 'react';
import { PetCharacteristicProps } from './dog-characteristics.interfaces';

import styles from './dog-characteristic.module.scss';

export const DogCharacteristic: React.FC<PetCharacteristicProps> = (props): React.ReactElement => {
  return (
    <div className={styles.characteristicContainer}>
      <p className={styles.characteristicContainer__characteristicTitle}>{props.title}</p>
      <p className={styles.characteristicContainer__characteristicValue}>{props.value}</p>
    </div>
  );
};
