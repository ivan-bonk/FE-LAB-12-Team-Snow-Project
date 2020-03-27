import React from 'react';
import { PetCharacteristic } from './dog-characteristics.interfaces';

import './dog-characteristic.styles.css';

export const DogCharacteristic: React.FC<PetCharacteristic> = (props): React.ReactElement => {
    return (
        <div className="characteristic-container">
            <p className="characteristic-title">{props.title}</p>
            <p className="characteristic-value">{props.value}</p>
        </div>
    );
};