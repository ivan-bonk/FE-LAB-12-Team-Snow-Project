import React from 'react';
import { DogImages } from '../dog-images/dog-images.component';
import { DogCharacteristic } from '../../../../shared/conponents/dog-characteristic/dog-characteristic.component';
import { DogInfo } from './dog.interfaces';

import './dog.styles.scss';

export const Dog: React.FC<DogInfo> = props => {
  return (
    <div className="dog-container">
      <div className="dog-name">
        <h3 className="dog-name-text">{props.name}</h3>
      </div>
      <DogImages />
      <div className="dog-characteristic-container">
        <DogCharacteristic title="Час догляду" value={`${props.observations.careTime}`} />
        <DogCharacteristic title="Витрати" value={`${props.observations.carePrice}`} />
        <DogCharacteristic title="Вартість" value={`${props.observations.price}`} />
      </div>
    </div>
  );
};
